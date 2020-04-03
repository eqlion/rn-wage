import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

export default MyComponent = ({ onPress }) => {
    return <FAB style={styles.fab} icon="plus" onPress={() => onPress()} />;
};

const styles = StyleSheet.create({
    fab: {
        position: "absolute",
        margin: 16,
        bottom: 0,
        right: 0
    }
});
