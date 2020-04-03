import { THEME } from "../actions/actionTypes";

export default theme = (state = true, action) => {
    switch (action.type) {
        case THEME:
            return !state;
        default:
            return state;
    }
};
