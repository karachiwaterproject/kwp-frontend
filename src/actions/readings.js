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
  console.log("hello");
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

    // console.log(~~(today.valueOf() / 1000));
    // console.log(~~(todayC.valueOf() / 1000));
    console.log(~~(todayC.valueOf() / 1000), ~~(today.valueOf() / 1000));
    console.log(~~(todayC1.valueOf() / 1000), ~~(todayC.valueOf() / 1000));
    console.log(todayC, today);
    console.log(todayC1, todayC);

    //   let res;
    //   if (time1 === "" || time1 === undefined) {
    //     res = await axios.get(`${HOST}/api/reading/${node}`);
    //   } else {
    //     res = await axios.get(`${HOST}/api/reading/${node}/${time1},${time2}`);
    //   }

    //   dispatch({
    //     type: GET_READINGS,
    //     payload: res.data,
    //   });
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
