import Home from "../screens/Home";
import { connect } from "react-redux";
import moment from "moment";
// import momentRU from "moment/locale/ru";
import { changeTheme } from "../actions";

// moment.updateLocale("ru", momentRU);
// console.log(momentRU);

// const data = [
//     {
//         startDate: "11.03.2020",
//         finishDate: "11.03.2020",
//         startHour: "13:00",
//         finishHour: "22:00",
//         hours: 8
//     },
//     {
//         startDate: "11.02.2020",
//         finishDate: "11.02.2020",
//         startHour: "13:00",
//         finishHour: "22:00",
//         hours: 8
//     },
// ];

// const settings = {
//     holidayWage: 1.5,
//     nightWage: 1.25,
//     taxRate: 0,
//     baseWage: 10,
//     nightStarts: 22,
//     salaryDate: 10,
//     prepayDate: 25,
//     prepayRate: 0.4
// };

const moveToFriday = (date) => {
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
    let month;
    prepayDate = moveToFriday(prepayDate);
    if (moment().format("D") < prepayDate) {
        month = moment().format("M");
    } else {
        month = moment().add(1, "months").format("M");
    }
    const currentShifts = data.filter(
        (shift) =>
            moment(shift.startDate, "DD.MM.YYYY").format("M") === month &&
            moment(shift.startDate, "DD.MM.YYYY").format("D") < prepayDate &&
            !shift.flagged
    );
    for (let shift of currentShifts) {
        hours += shift.hours;
    }
    return hours * prepayRate * (1 - taxRate) * baseWage;
};

const calculateSalary = (data, settings) => {
    const { taxRate, baseWage, prepayRate } = settings;
    let { salaryDate } = settings;
    let hours = 0;
    let month;
    salaryDate = moveToFriday(salaryDate);
    if (moment().format("D") > salaryDate) {
        month = moment().format("M");
    } else {
        month = moment().subtract(1, "months").format("M");
    }
    const currentShifts = data.filter(
        (shift) =>
            moment(shift.startDate, "DD.MM.YYYY").format("M") === month &&
            !shift.flagged
    );
    for (let shift of currentShifts) {
        hours += shift.hours;
    }
    return hours * (1 - prepayRate) * (1 - taxRate) * baseWage;
};

const salaryDate = (date) => {
    date = moveToFriday(date);
    const now = parseInt(moment().format("D"));
    if (now < date) {
        return moment(`${date}, 15`, "DD, HH").calendar();
    } else if (now === date) {
        return moment("15", "HH").calendar();
    } else {
        return moment(`${date}, 15`, "DD, HH").add(1, "months").calendar();
    }
};

const mapStateToProps = (state) => {
    const { setup, data, theme } = state;
    const salary = calculateSalary(data, setup);
    const prepay = calculatePrepay(data, setup);
    return {
        nextSalaryDate: salaryDate(setup.salaryDate),
        nextPrepayDate: salaryDate(setup.prepayDate),
        nextPrepay: Math.round(prepay * 100) / 100,
        nextSalary: Math.round(salary * 100) / 100,
        theme,
        prepayDate: state.setup.prepayDate,
    };
};

const mapDispatchToProps = {
    changeTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
