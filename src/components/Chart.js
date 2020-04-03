import * as React from "react";
import { Dimensions, ScrollView } from "react-native";
import { BarChart } from "react-native-chart-kit";
import Card from "./Card";

export default Chart = ({ hoursData, totalData, earnedData }) => {
    const style = {
        marginVertical: 8,
        borderRadius: 4
    };

    const x = hoursData.labels;

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
                        data={hoursData}
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
                        data={totalData}
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
                        data={earnedData}
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
