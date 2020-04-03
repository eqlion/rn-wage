import React from "react";
import { View } from "react-native";
import { Paragraph } from "react-native-paper";
import { Header, FAB, Card } from "../components";

export default Home = ({
    navigation,
    nextSalaryDate,
    nextPrepayDate,
    nextSalary,
    nextPrepay
}) => {
    return (
        <>
            <Header title="Home" />
            <View>
                <Card title="Prepay">
                    <Paragraph>
                        The next prepay is going to be: {nextPrepayDate}.
                    </Paragraph>
                    <Paragraph>It's going to be {nextPrepay}.</Paragraph>
                </Card>
                <Card title="Salary">
                    <Paragraph>
                        The next salary is going to be: {nextSalaryDate}.
                    </Paragraph>
                    <Paragraph>It's going to be {nextSalary}.</Paragraph>
                </Card>
            </View>
            <FAB onPress={() => navigation.navigate("Add Data")} />
        </>
    );
};