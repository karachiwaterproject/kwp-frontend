import {
  ACCOUNT_DELETED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  username: localStorage.getItem("username"),
  isAuthenticated: null,
  loading: localStorage.getItem("username") === null || "" ? false : true,
  user: null,
};

export default function auth(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload.data,
        admin: payload.data.nodes_access[0] === "all",
        allowedNodes: payload.data.nodes_access,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.data.access);
      localStorage.setItem("username", payload.username);
      return {
        ...state,
        username: payload.username,
        token: payload.data.access,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case ACCOUNT_DELETED:
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        token: null,
        username: null,
        loginFailed: true,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        token: null,
        username: null,
      };
    default:
      return state;
  }
}
