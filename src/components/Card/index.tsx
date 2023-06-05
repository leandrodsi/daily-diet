import { ColorsTypes } from "@theme/index";

import { TouchableOpacityProps } from "react-native";
import * as S from "./styled";

export type CardProps = TouchableOpacityProps & {
  title: string;
  description: string;
  color?: ColorsTypes;
};

export const Card = ({
  title,
  description,
  color = "SECONDARY_50",
  onPress,
  ...rest
}: CardProps) => {
  return (
    <S.Container
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={0.85}
      color={color}
      {...rest}
    >
      {onPress && <S.Icon color={color} />}
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
};
