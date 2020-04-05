import { FINISH_SETUP, MODIFY_SETTINGS } from "../actions/actionTypes";

const initialSetup = {
    firstSetup: true,
    baseWage: 148,
    holidayWage: 2,
    nightWage: 1.2,
    taxRate: 0.13,
    salaryDate: 10,
    prepayDate: 25,
    prepayRate: 0.4,
    nightStarts: 22,
    nightEnds: 8,
    lunchTime: 30,
};

export default setup = (state = initialSetup, action) => {
    switch (action.type) {
        case FINISH_SETUP:
            return { ...state, firstSetup: false };
        case MODIFY_SETTINGS:
            return { ...state, ...action.settings };
        default:
            return state;
    }
};
