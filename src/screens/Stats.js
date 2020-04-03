import React from "react";
import { ScrollView } from "react-native";
import { Paragraph } from "react-native-paper";
import { Card, Chart, Header } from "../components";

export default Stats = ({ stats }) => {
    const sortDates = (f, s) => {
        const [f1, f2] = f.split(".");
        const [s1, s2] = s.split(".");
        f = `${f2}.${f1}`;
        s = `${s2}.${s1}`;
        if (f > s) {
            return 1;
        } else {
            return -1;
        }
    };

    const sortedDates = Object.keys(stats).sort(sortDates);

    const sortedHours = sortedDates.map(date => stats[date].hours.toString());
    const hoursData = {
        labels: sortedDates,
        datasets: [{ data: sortedHours }]
    };
    const sortedTotal = sortedDates.map(date => stats[date].total.toString());
    const totalData = {
        labels: sortedDates,
        datasets: [{ data: sortedTotal }]
    };
    const sortedEarned = sortedDates.map(date => stats[date].earned.toString());
    const earnedData = {
        labels: sortedDates,
        datasets: [{ data: sortedEarned }]
    };

    return (
        <>
            <Header title="Stats" />
            {Object.keys(stats).length === 0 ? (
                <Card title="Stats">
                    <Paragraph>Add some data first!</Paragraph>
                </Card>
            ) : (
                <ScrollView>
                    <Chart
                        hoursData={hoursData}
                        totalData={totalData}
                        earnedData={earnedData}
                    />
                </ScrollView>
            )}
        </>
    );
};
