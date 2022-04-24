import axios from "axios";
import { GET_READINGS, READINGS_ERROR, GET_READINGS_WEEKLY } from "./types";
import { setAlert } from "./alert";
import { HOST } from "constrants";

export const getReadings = (node) => async (dispatch) => {
  try {
    const res = await axios.get(`${HOST}/api/reading/${node}`);

    dispatch({
      type: GET_READINGS,
      payload: res.data,
    });
    return true;
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
    let res;
    if (time1 === "" || time1 === undefined) {
      res = await axios.get(`${HOST}/api/reading/${node}`);
    } else {
      res = await axios.get(`${HOST}/api/reading/${node}/${time1},${time2}`);
    }

    dispatch({
      type: GET_READINGS,
      payload: res.data,
    });
    return res.data;
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

export const getHourlyStats = (node) => async (dispatch) => {
  try {
    // const startDate = new Date();
    // const endDate = new Date();
    // startDate.setHours(0, 0, 0, 0);

    // ~~(startDate.valueOf() / 1000),

    let todayC = new Date();
    todayC.setDate(todayC.getDate());
    todayC.setHours(0, 0, 0, 0);

    let todayC6 = new Date();
    todayC6.setDate(todayC6.getDate() - 7);
    todayC6.setHours(0, 0, 0, 0);

    const res = await axios.get(
      `${HOST}/api/p-reading/${node}/${todayC6.valueOf() / 1000},${
        todayC.valueOf() / 1000
      }`
    );

    dispatch({
      type: GET_READINGS_WEEKLY,
      payload: res.data,
    });
    return res.data;
    //   return res.data;
  } catch (error) {
    // dispatch({
    //   type: READINGS_ERROR,
    //   payload: {
    //     msg: error.response.statusText,
    //     status: error.response.status,
    //   },
    // });
  }
};
