import {
  createText,
  createTheme,
  createBox,
  useTheme as useReTheme,
} from "@shopify/restyle";

export const theme = createTheme({
  colors: {
    primary: "#2CB9B0",
    secondary: "#0C0D34",
    text: "rgba(12,13,52,0.7)",
    white: "white",
    grey: "rgba(12,13,52,0.1)",
    slightGrey: "#F4F0EF",
    lightGrey: "#FAFAFA",
    lightBlue: "#BFEAF5",
    darkGrey: "#8A8D90",
    danger: "#FF0058",
    primaryLight: "#E7F9F7",
    drawer1: "#FE5E33",
    drawer2: "#FFC641",
    drawer3: "#FF87A2",
    drawer4: "#442CB9",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    hero: {
      fontWeight: "bold",
      fontSize: 80,
      color: "white",
      textAlign: "center",
      lineHeight: 80,
    },
    title1: {
      fontSize: 28,
      color: "secondary",
    },
    title2: {
      fontSize: 24,
      color: "secondary",
      fontWeight: "600",
      lineHeight: 30,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: "text",
    },
    button: {
      fontSize: 15,
      lineHeight: 24,
      color: "text",
      textAlign: "center",
    },
    header: {
      fontSize: 14,
      lineHeight: 24,
      color: "secondary",
    },
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 22,
    xl: 75,
  },
  breakpoints: {},
});

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();
//export default theme;
