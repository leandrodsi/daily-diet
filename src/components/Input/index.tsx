import { TextInputProps } from "react-native";
import * as S from "./styled";

type InputProps = TextInputProps & {
  label: string;
};

export const Input = ({ label, ...rest }: InputProps) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input {...rest} />
    </S.Container>
  );
};
