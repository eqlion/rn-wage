import { ADD_DATA, REMOVE_DATA, EDIT_DATA } from "../actions/actionTypes";

export default data = (state = [], action) => {
    switch (action.type) {
        case ADD_DATA:
            return [...state.filter((shift) => !shift.flagged), action.data];
        case REMOVE_DATA:
            const oldData = state.find(
                (shift) => shift.startDate === action.date
            );
            oldData.flagged = true;

            return [
                ...state.filter((shift) => shift.startDate !== action.date),
                oldData,
            ];
        case EDIT_DATA:
            return [
                ...state.filter(
                    (data) => data.startDate !== action.data.startDate
                ),
                action.data,
            ];
        default:
            return state;
    }
};
