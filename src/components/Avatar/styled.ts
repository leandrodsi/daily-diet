import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;

    border: 2px solid ${theme.COLORS.GRAY_600};
    border-radius: 20px;
  `}
`;

export const Photo = styled.Image`
  flex: 1;
  border-radius: 20px;
`;
