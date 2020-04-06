import { DefaultTheme, DarkTheme } from "react-native-paper";

export const lightTheme = {
    ...DefaultTheme,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: "#4caf50",
        accent: "#c5e1a5",
    },
};

export const darkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: "#4caf50",
        accent: "#4caf50",
    },
};
