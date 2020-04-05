import {
    FINISH_SETUP,
    ADD_DATA,
    THEME,
    REMOVE_DATA,
    EDIT_DATA,
    MODIFY_SETTINGS,
} from "./actionTypes";

// Action creators connected to shifts data
export const addData = (data) => ({
    type: ADD_DATA,
    data,
});

export const removeData = (date) => ({
    type: REMOVE_DATA,
    date,
});

export const editData = (data) => ({
    type: EDIT_DATA,
    data,
});

// Settings action creators
export const finishSetup = () => ({
    type: FINISH_SETUP,
});

export const modifySettings = (settings) => ({
    type: MODIFY_SETTINGS,
    settings,
});

// Theme action creator
export const changeTheme = () => ({
    type: THEME,
});
