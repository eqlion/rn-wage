import * as React from "react";
import { Dimensions, ScrollView } from "react-native";
import { BarChart } from "react-native-chart-kit";
import Card from "./Card";

export default Chart = ({ hours, total, earned }) => {
    const style = {
        marginVertical: 8,
        borderRadius: 4
    };

    const x = hours.labels;

    const width =
        Dimensions.get("window").width >
        (Dimensions.get("window").width / 7) * x.length
            ? Dimensions.get("window").width - 40
            : (Dimensions.get("window").width / 7) * x.length;
    const chartConfig = {
        backgroundGradientFrom: "#ffffff",
        backgroundGradientTo: "#ffffff",
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
    };
    return (
        <>
            <Card title="Hours">
                <ScrollView horizontal={true}>
                    <BarChart
                        style={style}
                        data={hours}
                        width={width}
                        height={220}
                        chartConfig={chartConfig}
                        fromZero={true}
                    />
                </ScrollView>
            </Card>
            <Card title="Total earnings">
                <ScrollView horizontal={true}>
                    <BarChart
                        style={style}
                        data={total}
                        width={width}
                        height={220}
                        chartConfig={chartConfig}
                        fromZero={true}
                    />
                </ScrollView>
            </Card>
            <Card title="After taxation">
                <ScrollView horizontal={true}>
                    <BarChart
                        style={style}
                        data={earned}
                        width={width}
                        height={220}
                        chartConfig={chartConfig}
                        fromZero={true}
                    />
                </ScrollView>
            </Card>
        </>
    );
};
