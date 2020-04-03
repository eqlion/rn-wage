import * as React from "react";
import { Appbar } from "react-native-paper";

export default Header = ({ title, onBack, onSave }) => {
    return (
        <Appbar.Header>
            {onBack && <Appbar.Action icon="close" onPress={onBack} />}
            <Appbar.Content title={title} />
            {onSave && <Appbar.Action icon="check" onPress={onSave} />}
        </Appbar.Header>
    );
};
