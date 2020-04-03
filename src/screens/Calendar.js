import React from "react";
import { Paragraph } from "react-native-paper";
import { Calendar } from "react-native-calendars";
import { Card, Header } from "../components";

export default CalendarScreen = props => {
    return (
        <>
            <Header title="Calendar" />
            <Card title="Calendar">
                <Calendar onDayPress={day => console.log(day)} />
            </Card>
        </>
    );
};
