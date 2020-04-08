import * as React from "react";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Home from "../screens/HomeScreen";
import Calendar from "../screens/CalendarScreen";
import Settings from "../containers/SettingsContainer";
import Stats from "../containers/StatsContainer";

import i18n from "../i18n";

const Tab = createMaterialBottomTabNavigator();

export default Navigation = ({ theme }) => (
    <Tab.Navigator
        initialRouteName="Home"
        backBehavior="initialRoute"
        barStyle={{
            backgroundColor: theme ? "#4caf50" : "#121212",
        }}
    >
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
                tabBarLabel: i18n.t("HOME"),
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
                ),
                tabBarLabel: i18n.t("CALENDAR"),
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
                ),
                tabBarLabel: i18n.t("STATS"),
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
                ),
                tabBarLabel: i18n.t("SETTINGS"),
            }}
        />
    </Tab.Navigator>
);
