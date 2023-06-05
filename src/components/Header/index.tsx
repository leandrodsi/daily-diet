import { useNavigation } from "@react-navigation/native";
import * as S from "./styled";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <S.Container>
      <S.BackButton onPress={handleGoBack}>
        <S.Icon />
      </S.BackButton>
      <S.HeaderTitle>{title}</S.HeaderTitle>
    </S.Container>
  );
};
