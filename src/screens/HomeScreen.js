import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../containers/HomeContainer";
import AddData from "../containers/AddDataContainer";

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Add Data" component={AddData} />
    </Stack.Navigator>
);
