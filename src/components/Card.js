import * as React from "react";
import { Card } from "react-native-paper";

export default ({ children, title }) => (
    <Card style={{ marginHorizontal: 4, marginTop: 4 }}>
        {title && <Card.Title title={title} />}
        <Card.Content>{children}</Card.Content>
    </Card>
);
