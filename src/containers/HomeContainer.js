import Home from "../screens/Home";
import { connect } from "react-redux";
import moment from "moment";

// const data = [
//     {
//         date: "11.03.2020",
//         lunches: 1,
//         startHour: "13:00",
//         finishHour: "22:00",
//         isHoliday: false
//     },
//     {
//         date: "11.02.2020",
//         lunches: 1,
//         startHour: "13:00",
//         finishHour: "22:00",
//         isHoliday: false
//     }
// ];

// const settings = {
//     holidayWage: 1.5,
//     nightWage: 1.25,
//     taxRate: 0,
//     baseWage: 10,
//     nightStarts: 22,
//     prepayRate: 0.4
// };

const moveToFriday = date => {
    // If this date is yet to come
    if (
        moment(`${date}.${moment().month() + 1}.15`, "DD.MM.HH").diff(
            moment()
        ) > 0
    ) {
        date = moment(`${date}.${moment().month() + 1}}`, "DD.MM");
    } else {
        date = moment(`${date}.${moment().month() + 2}}`, "DD.MM");
    }
    if (date.day() === 0) {
        date = parseInt(date.day(5 - 7).format("D"));
    } else if (date.day() === 6) {
        date = parseInt(date.day(5).format("D"));
    } else {
        date = parseInt(date.format("D"));
    }
    return date;
};

const calculatePrepay = (data, settings) => {
    const { taxRate, baseWage, prepayRate } = settings;
    let { prepayDate } = settings;
    let hours = 0;
    const currentMonth = data.filter(
        i =>
            moment(i.startDate, "DD.MM.YYYY").format("M") ===
            moment().format("M")
    );
    prepayDate = moveToFriday(prepayDate);
    for (let shift of currentMonth) {
        if (
            parseInt(moment(shift.startDate, "DD.MM.YYYY").format("D")) <
            prepayDate
        ) {
            hours += shift.hours;
        }
    }
    hours *= 1 - prepayRate;
};

const calculateSalary = (data, settings) => {
    let { taxRate, baseWage, prepayRate, prepayDate } = settings;
    // Work hours before the prepay
    let hours = 0;
    // Work hours after the prepay til the end of the month
    let salaryHours = 0;
    // Going thru shifts of the current month only
    let currentMonth = data.filter(
        i =>
            moment(i.startDate, "DD.MM.YYYY").format("M") ===
            moment().format("M")
    );
    // The prepay is moved to Friday if it's on weekends
    prepayDate = moveToFriday(prepayDate);
    for (let shift of currentMonth) {
        if (
            parseInt(moment(shift.startDate, "DD.MM.YYYY").format("D")) <
            prepayDate
        ) {
            hours += shift.hours;
        } else {
            salaryHours += shift.hours;
        }
    }
    salaryHours += hours * (1 - prepayRate);
    if (parseInt(moment().format("D")) >= prepayDate) {
        hours = 0;
    }
    return [prepayRate * hours, salaryHours].map(i =>
        (i * (1 - taxRate) * baseWage).toFixed(2)
    );
};

const salaryDate = date => {
    date = moveToFriday(date);
    const now = parseInt(moment().format("D"));
    if (now < date) {
        return moment(`${date}, 15`, "DD, HH").calendar();
    } else if (now === date) {
        return moment("15", "HH").calendar();
    } else {
        return moment(`${date}, 15`, "DD, HH")
            .add(1, "months")
            .calendar();
    }
};

const mapStateToProps = state => {
    const [prepay, salary] = calculateSalary(state.data, state.setup);
    return {
        nextSalaryDate: salaryDate(state.setup.salaryDate),
        nextPrepayDate: salaryDate(state.setup.prepayDate),
        nextPrepay: prepay,
        nextSalary: salary
    };
};

export default connect(mapStateToProps)(Home);
