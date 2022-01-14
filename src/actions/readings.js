import axios from "axios";
import { GET_READINGS, READINGS_ERROR } from "./types";
import { setAlert } from "./alert";
import { HOST } from "constrants";

export const getReadings = (node) => async (dispatch) => {
  try {
    const res = await axios.get(`${HOST}/api/reading/${node}`);
    dispatch({
      type: GET_READINGS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: READINGS_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const getReadingsWithTime = (node, time1, time2) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${HOST}/api/reading/${node}/${time1},${time2}`
    );
    dispatch({
      type: GET_READINGS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: READINGS_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
