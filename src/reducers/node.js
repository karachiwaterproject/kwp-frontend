import { NODE_ERROR } from "actions/types";
import { GET_NODE } from "actions/types";
import { GET_NODES } from "actions/types";

const initialState = {
  nodes: [],
  node: null,
  loading: true,
  error: {},
};

export default function node(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_NODES:
      return {
        ...state,
        nodes: payload,
        loading: false,
      };
    case GET_NODE:
      return {
        ...state,
        node: payload,
        loading: false,
      };
    case NODE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}
