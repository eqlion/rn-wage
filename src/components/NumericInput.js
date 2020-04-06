import * as React from "react";
import { TextInput } from "react-native-paper";

export default NumericInput = (props) => (
    <TextInput
        style={{ marginBottom: 4 }}
        keyboardType="numeric"
        mode="outlined"
        {...props}
    />
);
