import { combineReducers } from "redux";

import data from "./data";
import setup from "./setup";
import theme from "./theme";

export default combineReducers({ data, setup, theme });
