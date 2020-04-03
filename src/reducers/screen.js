import { CHANGE_SCREEN } from "../actions/actionTypes";

export default screen = (state = 0, action) => {
    switch (action.type) {
        case CHANGE_SCREEN:
            return action.index;
        default:
            return state;
    }
};
