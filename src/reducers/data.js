import { ADD_DATA, REMOVE_DATA, EDIT_DATA } from "../actions/actionTypes";

const d = [
    {
        startDate: "25.03.2020",
        finishDate: "26.03.2020",
        startHour: "10.00",
        finishHour: "09.00",
        hours: 25.5
    }
];

export default data = (state = [], action) => {
    switch (action.type) {
        case ADD_DATA:
            return [...state, action.data];
        case REMOVE_DATA:
            return state.filter(data => data.date != action.date);
        case EDIT_DATA:
            return [
                ...state.filter(data => data.date != action.data.date),
                action.data
            ];
        default:
            return state;
    }
};
