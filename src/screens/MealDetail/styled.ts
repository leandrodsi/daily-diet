import styled, { css } from "styled-components/native";

export const InfoWrapper = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;

    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;

    color: ${theme.COLORS.GRAY_600};

    margin: 8px 0px 24px;
  `}
`;

export const DateLabel = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;

    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const DateValue = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;

    color: ${theme.COLORS.GRAY_600};

    margin: 8px 0px 24px;
  `}
`;

export const TagWrapper = styled.View`
  flex-direction: row;
`;

export const Filler = styled.View`
  flex: 1;
`;

export const Tag = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    gap: 5px;

    padding: 8px 16px;
    border-radius: 20px;

    background-color: ${theme.COLORS.GRAY_200};
  `}
`;

export const TagValue = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;

    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const ButtonsWrapper = styled.View`
  gap: 8px;
`;
