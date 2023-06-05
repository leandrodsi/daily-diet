import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonStyleTypes = "default" | "outlined";

export const Container = styled(TouchableOpacity)<{ type: ButtonStyleTypes }>`
  ${({ theme, type }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 8px;

    padding: 0px 16px;
    height: 50px;
    border-radius: 6px;

    background-color: ${type === "default"
      ? theme.COLORS.GRAY_700
      : theme.COLORS.WHITE};

    ${type === "outlined" &&
    css`
      border: 1px solid ${theme.COLORS.GRAY_700};
    `}
  `}
`;

export const Label = styled.Text<{ type: ButtonStyleTypes }>`
  ${({ theme, type }) => css`
    color: ${type === "default" ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};

    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
