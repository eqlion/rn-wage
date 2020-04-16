import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { connect } from "react-redux";
import { enableScreens } from "react-native-screens";

import Navigation from "../containers/NavigationContainer";
import Settings from "../containers/SettingsContainer";

import { lightTheme, darkTheme } from "../styles";

enableScreens();

const Provider = ({ initialSetup, theme }) => (
    <PaperProvider theme={theme ? lightTheme : darkTheme}>
        <NavigationContainer>
            {initialSetup ? <Settings /> : <Navigation />}
        </NavigationContainer>
    </PaperProvider>
);

const mapStateToProps = (state) => ({
    initialSetup: state.setup.firstSetup,
    theme: state.theme,
});

export default connect(mapStateToProps)(Provider);
