import * as React from "react";
import { Appbar } from "react-native-paper";

export default Header = ({ title, onBack, onSave, theme, onThemeChange }) => {
    return (
        <Appbar.Header>
            {onBack && <Appbar.Action icon="close" onPress={onBack} />}
            <Appbar.Content title={title} />
            {onSave && <Appbar.Action icon="check" onPress={onSave} />}
            {onThemeChange && (
                <Appbar.Action
                    icon={theme ? "brightness-4" : "brightness-7"}
                    onPress={onThemeChange}
                />
            )}
        </Appbar.Header>
    );
};
