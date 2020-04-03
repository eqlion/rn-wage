import { combineReducers } from "redux";

import data from "./data";
import setup from "./setup";
import theme from "./theme";
import screen from "./screen";

export default combineReducers({ data, setup, theme, screen });
