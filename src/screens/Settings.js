import React from "react";
import { Paragraph } from "react-native-paper";
import Header from "../components/Header";
import Card from "../components/Card";

export default Settings = () => {
    return (
        <>
            <Header title="Settings" />
            <Card title="Settings">
                <Paragraph>Some text here</Paragraph>
            </Card>
        </>
    );
};
