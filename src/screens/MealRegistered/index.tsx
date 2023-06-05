import in_diet_image from "@assets/images/in_diet.png";
import out_diet_image from "@assets/images/out_diet.png";
import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ColorsTypes } from "@theme/index";
import * as S from "./styled";

type MealRegisteredParams = {
  isInDiet: boolean;
};

export const MealRegistered = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { isInDiet = true } = route.params as MealRegisteredParams;
  const dataSelector = isInDiet ? "inDiet" : "outDiet";

  const screenData = {
    inDiet: {
      title: "Continue assim!",
      description: [
        {
          message: `Você continua `,
          bold: false,
        },
        {
          message: `dentro da dieta.`,
          bold: true,
        },
        {
          message: ` Muito bem!`,
          bold: false,
        },
      ],
      image: in_diet_image,
      color: "SECONDARY" as ColorsTypes,
    },
    outDiet: {
      title: "Que pena!",
      description: [
        {
          message: `Você `,
          bold: false,
        },
        {
          message: `saiu da dieta`,
          bold: true,
        },
        {
          message: ` dessa vez, mas continue se esforçando e não desista!`,
          bold: false,
        },
      ],
      image: out_diet_image,
      color: "PRIMARY" as ColorsTypes,
    },
  };

  const handleNavigateToHome = () => {
    navigation.navigate("home");
  };

  return (
    <S.Container>
      <S.Title color={screenData[dataSelector].color}>
        {screenData[dataSelector].title}
      </S.Title>
      <S.Description>
        {screenData[dataSelector].description.map((description) =>
          description.bold ? (
            <S.BoldText>{description.message}</S.BoldText>
          ) : (
            description.message
          ),
        )}
      </S.Description>
      <S.Image source={screenData[dataSelector].image} />
      <Button label="Ir para a página inicial" onPress={handleNavigateToHome} />
    </S.Container>
  );
};
