import { TouchableOpacityProps } from "react-native";
import * as S from "./styled";

type ButtonProps = TouchableOpacityProps & {
  label: string;
  icon?: React.ElementType;
  type?: S.ButtonStyleTypes;
};

export const Button = ({
  label,
  icon: Icon,
  type = "default",
  ...rest
}: ButtonProps) => {
  return (
    <S.Container type={type} {...rest}>
      {Icon ? <Icon /> : null}
      <S.Label type={type}>{label}</S.Label>
    </S.Container>
  );
};
