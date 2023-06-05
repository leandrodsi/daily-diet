import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;

  margin-bottom: 32px;
`;

export const BackButton = styled(TouchableOpacity)`
  position: absolute;

  left: 24px;
`;

export const Icon = styled(ArrowLeft).attrs({
  size: 24,
})``;

export const HeaderTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;
