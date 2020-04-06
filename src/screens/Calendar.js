import React from "react";
import { View } from "react-native";
import { Calendar } from "react-native-calendars";
import { Card, Header } from "../components";

export default CalendarScreen = ({ navigation, markedDates, theme }) => {
    return (
        <View style={{ flex: 1, backgroundColor: theme ? "white" : "#121212" }}>
            <Header title="Calendar" />
            <Card title="Calendar">
                <Calendar
                    onDayPress={(day) =>
                        navigation.navigate("Shift", {
                            day: day.dateString.split("-").reverse().join("."),
                        })
                    }
                    disabledByDefault={true}
                    markedDates={markedDates}
                />
            </Card>
        </View>
    );
};
