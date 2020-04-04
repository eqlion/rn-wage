import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Calendar from "../containers/CalendarContainer";
import Shift from "../containers/ShiftContainer";

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Shift" component={Shift} />
    </Stack.Navigator>
);
