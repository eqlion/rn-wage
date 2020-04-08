import * as React from "react";
import { View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Card, Header } from "../components";

import { calendar, view } from "../styles";
import i18n from "../i18n";
import calendarRU from "../i18n/locales/calendar";

export default CalendarScreen = ({ navigation, markedDates, theme }) => {
    const is_ru = i18n.locale.split("-")[0] === "ru";
    if (is_ru) {
        LocaleConfig.locales["ru"] = calendarRU;
        LocaleConfig.defaultLocale = "ru";
    }
    return (
        <View style={view(theme)}>
            <Header title={i18n.t("CALENDAR")} />
            <Card>
                <Calendar
                    key={`${theme}`}
                    theme={calendar(theme).theme}
                    style={calendar(theme).style}
                    onDayPress={(day) => {
                        if (Object.keys(markedDates).includes(day.dateString)) {
                            navigation.navigate("Shift", {
                                day: day.dateString
                                    .split("-")
                                    .reverse()
                                    .join("."),
                            });
                        }
                    }}
                    firstDay={is_ru ? 1 : 0}
                    markedDates={markedDates}
                />
            </Card>
        </View>
    );
};
