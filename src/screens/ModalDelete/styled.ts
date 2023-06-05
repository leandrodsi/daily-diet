import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 24px;
    background-color: ${theme.COLORS.GRAY_700}66;
  `}
`;

export const Content = styled.View`
  ${({ theme }) => css`
    flex: 1;
    border-radius: 8px;
    padding: 40px 24px 24px;
    gap: 24px;

    background-color: ${theme.COLORS.WHITE};
  `}
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;

    text-align: center;
  `}
`;

export const ButtonsWrapper = styled.View`
  flex-direction: row;
  gap: 16px;
`;
