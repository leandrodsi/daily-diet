import { ColorsTypes } from "@theme/index";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: center;
    align-items: center;

    padding: 24px;

    background-color: ${theme.COLORS.WHITE};
  `}
`;

export const Title = styled.Text<{ color: ColorsTypes }>`
  ${({ theme, color }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS[color]};

    margin-bottom: 8px;
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;

    text-align: center;
  `}
`;

export const BoldText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const Image = styled.Image`
  margin: 30px 0px 30px;
`;
