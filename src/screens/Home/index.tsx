import logo from "@assets/images/Logo.png";
import { Avatar } from "@components/Avatar";
import { Button } from "@components/Button";
import { Card } from "@components/Card";
import { EmptyState } from "@components/EmptyState";
import { Meal } from "@components/Meal";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { mealGetAll } from "@storage/meal/mealGetAll";
import { format } from "date-fns";
import { Plus } from "phosphor-react-native";
import { useCallback, useState } from "react";
import { Alert, SectionList } from "react-native";
import { useTheme } from "styled-components";
import * as S from "./styled";

export type MealType = {
  id: string;
  date: Date;
  name: string;
  description: string;
  isOnTheDiet: boolean;
};

export type FormmatedMealsByDateType = {
  title: string;
  data: MealType[];
};

export const Home = () => {
  const { COLORS } = useTheme();
  const navigation = useNavigation();

  const [meals, setMeals] = useState<FormmatedMealsByDateType[]>([]);
  const [statistics, setStatistics] = useState(0);

  const handleNavigateStatistics = () => {
    navigation.navigate("statistics");
  };

  const handleNavigateNewMeal = () => {
    navigation.navigate("newMeal", {});
  };

  const fetchMeals = async () => {
    try {
      const storedMeals = await mealGetAll();

      const mealsInDiet = storedMeals.filter((meal) => meal.isOnTheDiet);
      setStatistics((mealsInDiet.length / storedMeals.length) * 100 || 0);

      const formmatedMeals = storedMeals.reduce((acc, meal) => {
        const dateIndex = acc.findIndex(
          (item) => item.title === format(meal.date, "dd.MM.yy"),
        );

        if (dateIndex > -1) {
          acc[dateIndex].data = [...acc[dateIndex].data, meal];
        } else {
          const newDate = {
            title: format(meal.date, "dd.MM.yy"),
            data: [meal],
          };

          acc = [...acc, newDate];
        }

        return acc;
      }, [] as FormmatedMealsByDateType[]);

      setMeals(formmatedMeals);
    } catch (error) {
      Alert.alert(
        "Ooops",
        "Algo deu errado ao tentar recuperar suas refeições, tente novamente mais tarde.",
      );
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, []),
  );

  return (
    <S.Container>
      <S.Header>
        <S.Logo source={logo} />
        <Avatar image="https://thispersondoesnotexist.com/" />
      </S.Header>
      <Card
        title={`${statistics.toFixed(2)}%`}
        description="das refeições dentro da dieta"
        onPress={handleNavigateStatistics}
      />

      <S.Section>Refeições</S.Section>

      <Button
        label="Nova refeição"
        icon={() => <Plus size={18} color={COLORS.WHITE} />}
        onPress={handleNavigateNewMeal}
      />

      <SectionList
        sections={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Meal key={item.id} meal={item} />}
        renderSectionHeader={({ section }) => <S.Date>{section.title}</S.Date>}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, marginTop: 16 }}
        contentContainerStyle={
          meals.length === 0
            ? { flex: 1, justifyContent: "center" }
            : {
                paddingBottom: 60,
              }
        }
        ListEmptyComponent={() => (
          <EmptyState message="Cadastre uma refeição" />
        )}
      />
    </S.Container>
  );
};
