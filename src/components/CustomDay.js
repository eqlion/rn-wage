import * as React from "react";
import Day from "react-native-calendars/src/calendar/day/basic";

export default CustomDay = (props) => {
    const { marking } = props;
    marking.disableTouchEvent = true;
    return <Day {...props} />;
};
