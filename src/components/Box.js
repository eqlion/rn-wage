import * as React from "react";
import { View } from "react-native";

export default Box = ({ children, style }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                ...style,
            }}
        >
            {children}
        </View>
    );
};
