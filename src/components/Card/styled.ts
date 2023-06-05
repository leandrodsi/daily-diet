import { ColorsTypes } from "@theme/index";
import { ArrowUpRight } from "phosphor-react-native";
import styled, { css } from "styled-components/native";
import { CardProps } from ".";

export const Container = styled.TouchableOpacity<Pick<CardProps, "color">>`
  ${({ theme, color = "SECONDARY_50" }) => css`
    align-items: center;
    justify-content: center;

    padding: 25px;
    border-radius: 8px;

    flex-shrink: 1;
    width: 100%;

    background-color: ${theme.COLORS[color]};
  `}
`;

export const Icon = styled(ArrowUpRight).attrs(
  ({ theme, color = "SECONDARY_50" }) => {
    const arrowColor = color.includes("PRIMARY")
      ? "PRIMARY"
      : color.includes("SECONDARY")
      ? "SECONDARY"
      : color;
    return {
      size: 24,
      color: theme.COLORS[arrowColor as ColorsTypes],
    };
  },
)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};

    text-align: center;
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};

    text-align: center;
  `}
`;
