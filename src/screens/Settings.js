import * as React from "react";
import { Paragraph, Checkbox } from "react-native-paper";
import { Header, Card, Box } from "../components";

export default Settings = ({ setup, modifySettings }) => {
    return (
        <>
            <Header title="Settings" />
            <Card title="Settings">
                <Paragraph>Some text here</Paragraph>
            </Card>
        </>
    );
};
