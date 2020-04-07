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

export const calendar = (theme) => ({
    theme: {
        calendarBackground: theme ? "white" : "#1E1E1E",
        arrowColor: theme ? "#c5e1a5" : "#4caf50",
        monthTextColor: theme ? "black" : "white",
        todayTextColor: theme ? "#4caf50" : "#c5e1a5",
        textDisabledColor: theme ? "#bdbdbd" : "#616161",
        selectedDotColor: theme ? "#4caf50" : "#c5e1a5",
        dayTextColor: theme ? "black" : "white",
        "stylesheet.calendar.header": {
            dayHeader: {
                marginTop: 2,
                marginBottom: 7,
                width: 32,
                textAlign: "center",
                color: theme ? "#4caf50" : "#c5e1a5",
            },
        },
        dotColor: theme ? "#4caf50" : "#c5e1a5",
    },
    style: { borderRadius: 4, overflow: "hidden" },
});