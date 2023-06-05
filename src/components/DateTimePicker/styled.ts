import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  ${({ theme }) => css`
    flex: 1;
    padding: 12px 16px;
    margin: 4px 0px 16px;

    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;

    border: 1px solid ${theme.COLORS.GRAY_200};
    border-radius: 6px;
  `}
`;

export const DateTime = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
