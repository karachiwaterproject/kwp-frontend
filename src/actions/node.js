import axios from "axios";
import { GET_NODE, GET_NODES, NODE_ERROR } from "./types";
import { setAlert } from "./alert";
import { HOST } from "constrants";

export const getNodes = () => async (dispatch) => {
  try {
    const res = await axios.get(`${HOST}/api/node/`);
    dispatch({
      type: GET_NODES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: NODE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const getNode = (key) => async (dispatch) => {
  try {
    const res = await axios.get(`${HOST}/api/node/`);
    // console.log(res.data.filter((node) => node.slug === key));
    dispatch({
      type: GET_NODE,
      payload: res.data.filter((node) => node.slug === key)[0],
    });
  } catch (error) {
    dispatch({
      type: NODE_ERROR,
      payload: {
        msg: error.response,
        status: error.response.status,
      },
    });
  }
};
