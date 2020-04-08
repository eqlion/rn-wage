import React from "react";
import { ScrollView, View } from "react-native";
import { Paragraph } from "react-native-paper";
import { Card, Chart, Header } from "../components";

import { view } from "../styles";
import i18n from "../i18n";

export default Stats = ({ hours, total, earned, theme }) => (
    <View style={view(theme)}>
        <Header title={i18n.t("STATS")} />
        {hours.labels.length === 0 ? (
            <Card title={i18n.t("STATS")}>
                <Paragraph>{i18n.t("STATS_WARNING")}</Paragraph>
            </Card>
        ) : (
            <ScrollView>
                <Chart
                    hours={hours}
                    total={total}
                    earned={earned}
                    theme={theme}
                />
            </ScrollView>
        )}
    </View>
);
