import axios from "axios";
import { ADD_PROJECT, DELETE_PROJECT, GET_PROJECT, GET_ERRORS } from "../types";
import { returnErrors } from "./errorAction";

export const addProject = newProject => (dispatch, getState) => {
  console.log(newProject);
  axios
    .post("http://localhost:5000/project", newProject, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: ADD_PROJECT
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const getProjects = dispatch => {
  console.log("hello");
  axios
    .get("http://localhost:5000/project")
    .then(res => {
      dispatch({
        type: GET_PROJECT,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: GET_ERRORS });
    });
};

export const getUserProject = (dispatch, getState) => {
  axios
    .get(
      `http://localhost:5000/project/${getState().auth.user.email}`,
      tokenConfig(getState)
    )
    .then(res => {
      dispatch({
        type: GET_PROJECT,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const deleteProject = (dispatch, getState) => {
  axios
    .delete(
      `http://localhost:5000/project/${getState().auth.user.email}`,
      tokenConfig(getState)
    )
    .then(res => {
      dispatch({
        type: DELETE_PROJECT
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const tokenConfig = getState => {
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
};
