import { useNavigation } from "@react-navigation/native";
import { MealType } from "@screens/Home";
import { format } from "date-fns";
import { Circle } from "phosphor-react-native";
import { useTheme } from "styled-components";
import * as S from "./styled";

type MealProps = {
  meal: MealType;
};

export const Meal = ({ meal }: MealProps) => {
  const { COLORS } = useTheme();
  const navigation = useNavigation();
  const { id, date, name, isOnTheDiet } = meal;

  const formmatedTime = format(date, "HH:mm");

  const handleNavigateMealDetail = () => {
    navigation.navigate("mealDetail", { id });
  };

  return (
    <S.Container onPress={handleNavigateMealDetail}>
      <S.Time>{formmatedTime}</S.Time>
      <S.Divider />
      <S.Description>{name}</S.Description>
      <Circle
        size={14}
        weight="fill"
        color={isOnTheDiet ? COLORS.SECONDARY_50 : COLORS.PRIMARY_50}
      />
    </S.Container>
  );
};
