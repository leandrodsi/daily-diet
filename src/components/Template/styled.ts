import styled, { css } from "styled-components/native";
import { TemplateProps } from ".";

export const Container = styled.View<Pick<TemplateProps, "color">>`
  ${({ theme, color = "GRAY_300" }) => css`
    flex: 1;

    background-color: ${theme.COLORS[color]};

    padding-top: 64px;
  `}
`;

export const Content = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding: 32px 24px;

    background-color: ${theme.COLORS.WHITE};

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  `}
`;
