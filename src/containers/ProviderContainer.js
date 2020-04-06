import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { connect } from "react-redux";

import Navigation from "../components/Navigation";
import Settings from "../containers/SettingsContainer";

const Provider = ({ initialSetup }) => (
    <PaperProvider>
        <NavigationContainer>
            {initialSetup ? <Settings /> : <Navigation />}
        </NavigationContainer>
    </PaperProvider>
);

const mapStateToProps = (state) => ({
    initialSetup: state.setup.firstSetup,
});

export default connect(mapStateToProps)(Provider);
