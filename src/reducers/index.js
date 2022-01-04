import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import node from "./node";

export default combineReducers({ alert, auth, node });
