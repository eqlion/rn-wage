import React from "react";
import { ScrollView } from "react-native";
import { Paragraph } from "react-native-paper";
import { Card, Chart, Header } from "../components";

export default Stats = ({ hours, total, earned }) => (
    <>
        <Header title="Stats" />
        {hours.labels.length === 0 ? (
            <Card title="Stats">
                <Paragraph>Add some data first!</Paragraph>
            </Card>
        ) : (
            <ScrollView>
                <Chart hours={hours} total={total} earned={earned} />
            </ScrollView>
        )}
    </>
);
