import React from "react";
import { Calendar } from "react-native-calendars";
import { Card, Header } from "../components";

export default CalendarScreen = ({ navigation, markedDates }) => {
    return (
        <>
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
        </>
    );
};
