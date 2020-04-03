import { connect } from "react-redux";
import Calendar from "../screens/Calendar";

const mapStateToProps = state => {
    const { data } = state;

    let markedDates = new Object();

    for (let shift in data) {
        let [day, month, year] = data[shift].startDate.split(".");
        markedDates[`${year}-${month}-${day}`] = { marked: true };
    }

    return { markedDates };
};

export default connect(mapStateToProps)(Calendar);
