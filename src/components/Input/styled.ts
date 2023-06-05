import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-shrink: 1;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;

export const Input = styled.TextInput`
  ${({ theme }) => css`
    padding: 12px 16px;
    margin: 4px 0px 16px;

    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;

    border: 1px solid ${theme.COLORS.GRAY_200};
    border-radius: 6px;
  `}
`;
