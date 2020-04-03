import {
    FINISH_SETUP,
    // BASE_WAGE,
    ADD_DATA,
    // HOLIDAY_WAGE,
    // NIGHT_WAGE,
    // TAX_RATE,
    THEME,
    // SALARY_DATE,
    // PREPAY_DATE,
    // PREPAY_RATE,
    // NIGHT_STARTS,
    // NIGHT_ENDS,
    // LUNCH_TIME,
    CHANGE_SCREEN,
    REMOVE_DATA,
    EDIT_DATA,
    MODIFY_SETTINGS
} from "./actionTypes";

export const finishSetup = () => ({
    type: FINISH_SETUP
});

// export const baseWage = wage => ({
//     type: BASE_WAGE,
//     wage
// });

export const addData = data => ({
    type: ADD_DATA,
    data
});

export const removeData = date => ({
    type: REMOVE_DATA,
    date
});

export const editData = data => ({
    type: EDIT_DATA,
    data
});

// export const holidayWage = rate => ({
//     type: HOLIDAY_WAGE,
//     rate
// });

// export const nightWage = rate => ({
//     type: NIGHT_WAGE,
//     rate
// });

// export const taxRate = tax => ({
//     type: TAX_RATE,
//     tax
// });

export const changeTheme = () => ({
    type: THEME
});

// export const salaryDate = date => ({
//     type: SALARY_DATE,
//     date
// });

// export const prepayDate = date => ({
//     type: PREPAY_DATE,
//     date
// });

// export const prepayRate = rate => ({
//     type: PREPAY_RATE,
//     rate
// });

// export const nightStarts = hour => ({
//     type: NIGHT_STARTS,
//     hour
// });

// export const nightEnds = hour => ({
//     type: NIGHT_ENDS,
//     hour
// });

// export const lunchTime = time => ({
//     type: LUNCH_TIME,
//     time
// });

export const changeScreen = index => ({
    type: CHANGE_SCREEN,
    index
});

export const modifySettings = data => ({
    type: MODIFY_SETTINGS,
    data
});
