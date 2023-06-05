import { Card } from "@components/Card";
import { useNavigation } from "@react-navigation/native";
import { mealGetAll } from "@storage/meal/mealGetAll";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import * as S from "./styled";

type StatisticsProps = {
  inDietPercent: number;
  inDiet: number;
  outDiet: number;
  totalMeals: number;
  bestSequenceInDiet: number;
};

export const Statistics = () => {
  const navigation = useNavigation();
  const [statistics, setStatistics] = useState<StatisticsProps>({
    inDietPercent: 0,
    inDiet: 0,
    outDiet: 0,
    totalMeals: 0,
    bestSequenceInDiet: 0,
  });

  const handleGoBack = () => {
    navigation.goBack();
  };

  const fetchMeals = async () => {
    try {
      const storage = await mealGetAll();

      const newStatistics = storage.reduce((acc, meal) => {
        return {
          ...acc,
          inDiet: meal.isOnTheDiet ? (acc.inDiet += 1) : acc.inDiet,
          outDiet: !meal.isOnTheDiet ? (acc.outDiet += 1) : acc.outDiet,
          totalMeals: (acc.totalMeals += 1),
        };
      }, statistics as StatisticsProps);

      newStatistics.inDietPercent =
        (newStatistics.inDiet / newStatistics.totalMeals) * 100;

      let bestSequence = 0;
      let counter = 0;
      storage.forEach((meal) => {
        if (!meal.isOnTheDiet) {
          counter = 0;
        } else {
          counter += 1;
        }
        if (counter > bestSequence) {
          bestSequence = counter;
        }
      });
      newStatistics.bestSequenceInDiet = bestSequence;

      setStatistics(newStatistics);
    } catch (error) {
      Alert.alert(
        "Ooops",
        "Não foi possível buscar os dados das suas refeições no momento. Tente novamente mais tarde",
      );
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.BackButton onPress={handleGoBack}>
          <S.Icon />
        </S.BackButton>
        <S.Title>{statistics.inDietPercent.toFixed(2)}%</S.Title>
        <S.Description>das refeições dentro da dieta</S.Description>
      </S.Header>

      <S.Content>
        <S.ContentTitle>Estatísticas gerais</S.ContentTitle>
        <Card
          title={statistics.bestSequenceInDiet.toString()}
          description="melhor sequência de pratos dentro da dieta"
          color="GRAY_200"
        />
        <Card
          title={statistics.totalMeals.toString()}
          description="refeições registradas"
          color="GRAY_200"
        />

        <S.HorizontalCardsContainer>
          <Card
            title={statistics.inDiet.toString()}
            description="refeições dentro da dieta"
            color="SECONDARY_10"
          />
          <Card
            title={statistics.outDiet.toString()}
            description="refeições fora da dieta"
            color="PRIMARY_10"
          />
        </S.HorizontalCardsContainer>
      </S.Content>
    </S.Container>
  );
};
