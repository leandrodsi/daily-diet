import { Button } from "@components/Button";
import { Template } from "@components/Template";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { MealType } from "@screens/Home";
import { mealGetById } from "@storage/meal/mealGetById";
import { format } from "date-fns";
import { Circle, PencilSimpleLine, Trash } from "phosphor-react-native";
import { useCallback, useState } from "react";
import { ActivityIndicator, Alert } from "react-native";
import { useTheme } from "styled-components";
import * as S from "./styled";

export const MealDetail = () => {
  const { COLORS } = useTheme();

  const [loading, setLoading] = useState(true);
  const [meal, setMeal] = useState<MealType>({} as MealType);

  const route = useRoute();
  const navigation = useNavigation();

  const { id } = route.params as {
    id: string;
  };

  const { name, description, date, isOnTheDiet } = meal;

  const formmatDateTime = () =>
    `${format(date, "dd/MM/yyyy")} às ${format(date, "HH:mm")}`;

  const handleEditMeal = () => {
    navigation.navigate("newMeal", { meal });
  };

  const handleDeleteMeal = () => {
    navigation.navigate("modalDelete", { id });
  };

  const fetchMeal = async () => {
    try {
      setLoading(true);

      const storage = await mealGetById(id);

      setMeal(storage);
    } catch (error) {
      Alert.alert(
        "Ooops",
        "Algo deu errado ao buscar a refeição, tente novamente mais tarde",
      );
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchMeal();
    }, []),
  );

  return (
    <Template title="Refeição" color="SECONDARY_10">
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <S.InfoWrapper>
            <S.Title>{name}</S.Title>
            <S.Subtitle>{description}</S.Subtitle>
            <S.DateLabel>Data e hora</S.DateLabel>
            <S.DateValue>{formmatDateTime()}</S.DateValue>
            <S.TagWrapper>
              <S.Tag>
                <Circle
                  size={8}
                  color={isOnTheDiet ? COLORS.SECONDARY : COLORS.PRIMARY}
                  weight="fill"
                />
                <S.TagValue>dentro da dieta</S.TagValue>
              </S.Tag>
              <S.Filler />
            </S.TagWrapper>
          </S.InfoWrapper>

          <S.ButtonsWrapper>
            <Button
              label="Editar refeição"
              icon={() => <PencilSimpleLine color={COLORS.WHITE} />}
              onPress={handleEditMeal}
            />
            <Button
              label="Excluir refeição"
              type="outlined"
              icon={() => <Trash color={COLORS.GRAY_700} />}
              onPress={handleDeleteMeal}
            />
          </S.ButtonsWrapper>
        </>
      )}
    </Template>
  );
};
