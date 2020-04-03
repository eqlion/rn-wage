import { connect } from "react-redux";
import Stats from "../screens/Stats";

const mapStateToProps = state => {
    const data = state.data;
    const { taxRate, baseWage } = state.setup;
    let stats = {};
    // let months = {};
    // for (let i = 1; i < 13; i++) {
    //     months[i.toString()] = { hours: 0 };
    // }
    // Calculating total hours for each year/month
    for (let shift of data) {
        let [day, month, year] = shift.startDate.split(".");
        let label = month + "." + year;
        if (stats[label] === undefined) {
            stats[label] = { hours: 0 };
        }
        stats[label].hours += shift.hours;
    }
    // Calculating money earned
    for (let entry in stats) {
        const { hours } = stats[entry];
        stats[entry].total = hours * baseWage;
        stats[entry].taxes = stats[entry].total * taxRate;
        stats[entry].earned = stats[entry].total - stats[entry].taxes;
    }
    return {
        stats
    };
};

export default connect(mapStateToProps)(Stats);
