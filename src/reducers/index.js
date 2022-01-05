import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import node from "./node";
import reading from "./readings";

export default combineReducers({ alert, auth, node, reading });
