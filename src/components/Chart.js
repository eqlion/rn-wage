import * as React from "react";
import { Dimensions, ScrollView } from "react-native";
import { BarChart } from "react-native-chart-kit";
import Card from "./Card";

import { chart } from "../styles";

export default Chart = ({ hours, total, earned, theme }) => {
    const x = hours.labels;

    const width =
        Dimensions.get("window").width >
        (Dimensions.get("window").width / 7) * x.length
            ? Dimensions.get("window").width - 40
            : (Dimensions.get("window").width / 7) * x.length;

    return (
        <>
            <Card title="Hours">
                <ScrollView horizontal={true}>
                    <BarChart
                        style={chart(theme).style}
                        data={hours}
                        width={width}
                        height={220}
                        chartConfig={chart(theme).config}
                        fromZero={true}
                    />
                </ScrollView>
            </Card>
            <Card title="Total earnings">
                <ScrollView horizontal={true}>
                    <BarChart
                        style={chart(theme).style}
                        data={total}
                        width={width}
                        height={220}
                        chartConfig={chart(theme).config}
                        fromZero={true}
                    />
                </ScrollView>
            </Card>
            <Card title="After taxation">
                <ScrollView horizontal={true}>
                    <BarChart
                        style={chart(theme).style}
                        data={earned}
                        width={width}
                        height={220}
                        chartConfig={chart(theme).config}
                        fromZero={true}
                    />
                </ScrollView>
            </Card>
        </>
    );
};
