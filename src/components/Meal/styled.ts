import { TextProps, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  ${({ theme }) => css`
    flex-direction: row;
    justify-content: space-between;

    height: 49px;
    padding: 15px;
    margin-bottom: 8px;

    border: 1px solid ${theme.COLORS.GRAY_300};
    border-radius: 6px;

    gap: 8px;
  `}
`;

export const Divider = styled.View`
  ${({ theme }) => css`
    width: 1px;
    height: 100%;

    background-color: ${theme.COLORS.GRAY_300};
  `}
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`;

export const Description = styled.Text.attrs<TextProps>({
  numberOfLines: 1,
  ellipsizeMode: "tail",
})`
  ${({ theme }) => css`
    flex: 1;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`;
