import { GET_PROJECT, DELETE_PROJECT } from "../types";

const initialState = {
  project: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECT:
      return {
        ...state,
        project: action.payload
      };
    case DELETE_PROJECT: {
      return {
        ...state,
        project: action.payload
      };
    }
    default:
      return state;
  }
}
