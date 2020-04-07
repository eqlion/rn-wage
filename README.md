# React Native Wage

## What is it?

This is an app that is aimed at people working with a set hourly wage. The app helps calculate the earned money, featuring support for taxes, not payed lunches, different night and holiday wage, and salary payments split in two parts with set proportion.

## What is used to build it?

- React Native 61
	* [@react-native-community/datetimepicker](https://github.com/react-native-community/datetimepicker) for a native date-time picker
	* [@react-navigation/material-bottom-tabs](https://github.com/react-navigation/react-navigation/tree/4.x/packages/material-bottom-tabs) for material-esque bottom navigation tabs
	* [@react-navigation/stack](https://github.com/react-navigation/react-navigation/tree/4.x/packages/stack) for stack navigation
	* [react-native-calendars](https://github.com/wix/react-native-calendars) for a customizable calendar
	* [react-native-chart-kit](https://github.com/indiespirit/react-native-chart-kit) for beautiful charts
	* [react-native-paper](https://github.com/callstack/react-native-paper) for material design compliant UI elements
- Redux for state management
    * [react-redux](https://github.com/reduxjs/react-redux) for connecting redux store to RN components
    * [redux-persist](https://github.com/rt2zz/redux-persist) for saving state locally
- [moment](https://github.com/moment/moment) for date manipulation

## How to run it? 

You can either install the apk from [here]() (don't forget to enable installation from unknown sources), or clone the repo, run ```yarn install``` to install the dependencies (I assume that you already have expo installed and configured) and run ```yarn start``` to start the local server.
