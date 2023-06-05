export const theme = {
  FONT_FAMILY: {
    REGULAR: "Nunito_400Regular",
    BOLD: "Nunito_700Bold",
  },
  FONT_SIZE: {
    XS: 12,
    SM: 14,
    MD: 16,
    LG: 18,
    XL: 24,
    XXL: 32,
  },
  COLORS: {
    PRIMARY: "#BF3B44",
    PRIMARY_50: "#F3BABD",
    PRIMARY_10: "#F4E6E7",
    SECONDARY: "#639339",
    SECONDARY_50: "#CBE4B4",
    SECONDARY_10: "#E5F0DB",
    GRAY_700: "#1B1D1E",
    GRAY_600: "#333638",
    GRAY_500: "#5C6265",
    GRAY_400: "#B9BBBC",
    GRAY_300: "#DDDEDF",
    GRAY_200: "#EFF0F0",
    GRAY_100: "#FAFAFA",
    WHITE: "#FFFFFF",
    TRANSPARENT: "transparent",
  },
};

export type ColorsTypes = keyof typeof theme.COLORS;
