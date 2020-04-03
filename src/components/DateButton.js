import * as React from "react";
import { View } from "react-native";
import { TouchableRipple } from "react-native-paper";

export default DateButton = ({ children, onPress }) => (
    <TouchableRipple onPress={() => onPress()} rippleColor="rgba(0, 0, 0, .32)">
        <View style={{ marginHorizontal: 7, marginVertical: 5 }}>
            {children}
        </View>
    </TouchableRipple>
);
