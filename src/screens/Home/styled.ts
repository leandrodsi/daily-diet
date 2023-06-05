import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  padding: 66px 22px 0px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 40px;
`;

export const Logo = styled.Image``;

export const Section = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};

    margin: 40px 0px 8px;
  `}
`;

export const Date = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};

    margin-bottom: 10px;
    padding: 16px 0px 8px;
    background-color: ${theme.COLORS.GRAY_200};
  `};
`;

export const MealsContainer = styled.View`
  margin-bottom: 28px;
`;
