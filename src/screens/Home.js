import React from "react";
import { View } from "react-native";
import { Paragraph } from "react-native-paper";
import { Header, FAB, Card } from "../components";

import { view } from "../styles";
import i18n from "../i18n";

export default Home = ({
    navigation,
    nextSalaryDate,
    nextPrepayDate,
    nextSalary,
    nextPrepay,
    theme,
    changeTheme,
    prepayDate,
}) => {
    return (
        <View style={view(theme)}>
            <Header
                title={i18n.t("HOME")}
                theme={theme}
                onThemeChange={() => changeTheme()}
            />
            <>
                {prepayDate !== 0 && (
                    <Card title={i18n.t("PREPAY")}>
                        <Paragraph>
                            {i18n.t("PREPAY_DATE_HOME")}
                            {nextPrepayDate}.
                        </Paragraph>
                        <Paragraph>
                            {i18n.t("PREPAY_SUM_HOME")}
                            {nextPrepay}.
                        </Paragraph>
                    </Card>
                )}
                <Card title={i18n.t("SALARY")}>
                    <Paragraph>
                        {i18n.t("SALARY_DATE_HOME")}
                        {nextSalaryDate}.
                    </Paragraph>
                    <Paragraph>
                        {i18n.t("SALARY_SUM_HOME")}
                        {nextSalary}.
                    </Paragraph>
                </Card>
            </>
            <FAB onPress={() => navigation.navigate("Add Data")} />
        </View>
    );
};
