import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding: 66px 0px 0px;

    background-color: ${theme.COLORS.SECONDARY_50};
  `}
`;

export const Header = styled.View`
  padding: 30px 0 40px;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled(TouchableOpacity)`
  position: absolute;
  left: 24px;
  top: 0px;
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.SECONDARY,
}))``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;

export const Content = styled.View`
  ${({ theme }) => css`
    flex: 1;
    gap: 16px;
    padding: 36px 24px;

    background-color: ${theme.COLORS.WHITE};

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  `}
`;

export const ContentTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;

    margin-bottom: 16px;
    text-align: center;
  `}
`;

export const HorizontalCardsContainer = styled.View`
  flex-direction: row;
  gap: 16px;
`;
