import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { mealRemove } from "@storage/meal/mealRemove";
import { Alert } from "react-native";
import * as S from "./styled";

export const ModalDelete = () => {
  const route = useRoute();
  const { id } = route.params as { id: string };
  const navigation = useNavigation();

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleConfirm = async () => {
    try {
      await mealRemove(id);

      navigation.navigate("home");
    } catch (error) {
      Alert.alert("Ooops", "Algo deu errado ao excluir a sua refeição.");
    }
  };

  return (
    <S.Container>
      <S.Content>
        <S.Message>
          Deseja realmente excluir o{"\n"}registro da refeição?
        </S.Message>
        <S.ButtonsWrapper>
          <Button
            label="Cancelar"
            type="outlined"
            onPress={handleCancel}
            style={{ flex: 1 }}
          />
          <Button
            label="Sim, excluir"
            onPress={handleConfirm}
            style={{ flex: 1 }}
          />
        </S.ButtonsWrapper>
      </S.Content>
    </S.Container>
  );
};
