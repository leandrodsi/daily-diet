import { Circle } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { ThemeType } from "styled-components";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;

  gap: 8px;
`;

export type ButtonSelectStyleType = "inDiet" | "outDiet";

const buttonSelectVariants = {
  inDiet: (theme: ThemeType) => css`
    background-color: ${theme.COLORS.SECONDARY_10};

    border: 1px solid ${theme.COLORS.SECONDARY};
  `,
  outDiet: (theme: ThemeType) => css`
    background-color: ${theme.COLORS.PRIMARY_10};

    border: 1px solid ${theme.COLORS.PRIMARY};
  `,
};

export const ButtonSelect = styled(TouchableOpacity)<{
  type: ButtonSelectStyleType;
  selected: boolean;
}>`
  ${({ theme, type, selected }) => css`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 50px;
    gap: 8px;

    border-radius: 6px;

    background-color: ${theme.COLORS.GRAY_200};

    ${selected && buttonSelectVariants[type](theme)}
  `}
`;

export const Icon = styled(Circle).attrs({
  weight: "fill",
})``;

export const Label = styled.Text``;
