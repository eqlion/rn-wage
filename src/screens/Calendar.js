import React, { useState } from "react";
import { View } from "react-native";
import { Calendar } from "react-native-calendars";
import { Card, Header } from "../components";

import { calendar, view } from "../styles";

export default CalendarScreen = ({ navigation, markedDates, theme }) => {
    return (
        <View style={view(theme)}>
            <Header title="Calendar" />
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
                    markedDates={markedDates}
                />
            </Card>
        </View>
    );
};
