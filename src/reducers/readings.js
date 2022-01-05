import { READINGS_ERROR } from "actions/types";
import { GET_READINGS } from "actions/types";

const initialState = {
  readings: [],
  loading: true,
  error: {},
};

export default function reading(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_READINGS:
      return {
        ...state,
        readings: payload,
        loading: false,
      };

    case READINGS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
