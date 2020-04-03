import { connect } from "react-redux";
import Stats from "../screens/Stats";

const sortDates = (f, s) => {
    const [f1, f2] = f.split(".");
    const [s1, s2] = s.split(".");
    f = `${f2}.${f1}`;
    s = `${s2}.${s1}`;
    if (f > s) {
        return 1;
    } else {
        return -1;
    }
};
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

    const sortedDates = Object.keys(stats).sort(sortDates);

    const sortedHours = sortedDates.map(date => stats[date].hours.toString());
    const hours = {
        labels: sortedDates,
        datasets: [{ data: sortedHours }]
    };
    const sortedTotal = sortedDates.map(date => stats[date].total.toString());
    const total = {
        labels: sortedDates,
        datasets: [{ data: sortedTotal }]
    };
    const sortedEarned = sortedDates.map(date => stats[date].earned.toString());
    const earned = {
        labels: sortedDates,
        datasets: [{ data: sortedEarned }]
    };

    return {
        hours,
        total,
        earned
    };
};

export default connect(mapStateToProps)(Stats);
