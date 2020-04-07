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

export const view = (theme) => ({
    flex: 1,
    backgroundColor: theme ? "white" : "#121212",
});

export const chart = (theme) => ({
    style: {
        marginVertical: 8,
        borderRadius: 4,
    },
    config: {
        backgroundGradientFrom: theme ? "#ffffff" : "#1E1E1E",
        backgroundGradientTo: theme ? "#ffffff" : "#1E1E1E",
        color: (opacity = 1) =>
            theme
                ? `rgba(76, 175, 80, ${opacity})`
                : `rgba(197, 225, 165, ${opacity})`,
        labelColor: (opacity = 1) =>
            theme
                ? `rgba(0, 0, 0, ${opacity})`
                : `rgba(255, 255, 255, ${opacity})`,
    },
});

export const divider = {
    marginVertical: 4,
};
