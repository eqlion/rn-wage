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
const mapStateToProps = (state) => {
    const data = state.data.filter((shift) => !shift.flagged);
    const { taxRate, baseWage } = state.setup;
    let stats = {};
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
    for (let shift in stats) {
        const { hours } = stats[shift];
        stats[shift].total = hours * baseWage;
        stats[shift].taxes = stats[shift].total * taxRate;
        stats[shift].earned = stats[shift].total - stats[shift].taxes;
    }

    const sortedDates = Object.keys(stats).sort(sortDates);

    // Formatting the data for the plotting
    const sortedHours = sortedDates.map((date) => stats[date].hours.toString());
    const hours = {
        labels: sortedDates,
        datasets: [{ data: sortedHours }],
    };
    const sortedTotal = sortedDates.map((date) => stats[date].total.toString());
    const total = {
        labels: sortedDates,
        datasets: [{ data: sortedTotal }],
    };
    const sortedEarned = sortedDates.map((date) =>
        stats[date].earned.toString()
    );
    const earned = {
        labels: sortedDates,
        datasets: [{ data: sortedEarned }],
    };

    return {
        hours,
        total,
        earned,
        theme: state.theme,
    };
};

export default connect(mapStateToProps)(Stats);
