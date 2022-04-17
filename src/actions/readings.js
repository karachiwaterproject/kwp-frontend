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

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let todayC = new Date();
    todayC.setDate(todayC.getDate() - 1);
    todayC.setHours(0, 0, 0, 0);

    let todayC1 = new Date();
    todayC1.setDate(todayC1.getDate() - 2);
    todayC1.setHours(0, 0, 0, 0);

    let todayC2 = new Date();
    todayC2.setDate(todayC2.getDate() - 3);
    todayC2.setHours(0, 0, 0, 0);

    let todayC3 = new Date();
    todayC3.setDate(todayC3.getDate() - 4);
    todayC3.setHours(0, 0, 0, 0);

    let todayC4 = new Date();
    todayC4.setDate(todayC4.getDate() - 5);
    todayC4.setHours(0, 0, 0, 0);

    let todayC5 = new Date();
    todayC5.setDate(todayC5.getDate() - 6);
    todayC5.setHours(0, 0, 0, 0);

    let todayC6 = new Date();
    todayC6.setDate(todayC6.getDate() - 7);
    todayC6.setHours(0, 0, 0, 0);

    const res = await axios.get(
      `${HOST}/api/p-reading/${node}/${todayC6.valueOf() / 1000},${
        todayC5.valueOf() / 1000
      },${todayC4.valueOf() / 1000},${todayC3.valueOf() / 1000},${
        todayC2.valueOf() / 1000
      },${todayC1.valueOf() / 1000},${todayC.valueOf() / 1000}`
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
