import * as React from "react";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Home from "../screens/HomeScreen";
import Calendar from "../screens/Calendar";
import Settings from "../screens/Settings";
import Stats from "../containers/StatsContainer";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

export default Navigation = () => (
    <Tab.Navigator initialRouteName="Home" backBehavior="initialRoute">
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                        name="home"
                        color={color}
                        size={26}
                    />
                ),
                title: "Home"
            }}
        />
        <Tab.Screen
            name="Calendar"
            component={Calendar}
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                        name="calendar"
                        color={color}
                        size={26}
                    />
                )
            }}
        />
        <Tab.Screen
            name="Stats"
            component={Stats}
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                        name="chart-histogram"
                        color={color}
                        size={26}
                    />
                )
            }}
        />
        <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                        name="settings"
                        color={color}
                        size={26}
                    />
                )
            }}
        />
    </Tab.Navigator>
);
