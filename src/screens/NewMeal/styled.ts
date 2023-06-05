import styled, { css } from "styled-components/native";

export const InputWrapper = styled.View`
  flex-direction: row;
  gap: 16px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;

export const FormContent = styled.View`
  flex: 1;
`;
