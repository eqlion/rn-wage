import { MODIFY_SETTINGS } from "../actions/actionTypes";

// const devState = {
//     firstSetup: false,
//     baseWage: 148,
//     holidayWage: 2,
//     nightWage: 1.2,
//     taxRate: 0.13,
//     salaryDate: 10,
//     prepayDate: 25,
//     prepayRate: 0.4,
//     nightStarts: 22,
//     nightEnds: 8,
//     lunchTime: 30,
// };

const initialSetup = {
    firstSetup: true,
    baseWage: 0,
    holidayWage: 1,
    nightWage: 1,
    taxRate: 0,
    salaryDate: 0,
    prepayDate: 0,
    prepayRate: 0,
    nightStarts: 22,
    nightEnds: 8,
    lunchTime: 0,
};

export default setup = (state = initialSetup, action) => {
    switch (action.type) {
        case MODIFY_SETTINGS:
            return { ...state, ...action.settings };
        default:
            return state;
    }
};
