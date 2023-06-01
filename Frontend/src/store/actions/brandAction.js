import {
  CREATE_BRAND_REQUEST,
  CREATE_BRAND_SUCCESS,
  CREATE_BRAND_FAIL,
  ALL_BRAND_REQUEST,
  ALL_BRAND_SUCCESS,
  ALL_BRAND_FAIL,
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
  GET_BRAND_FAIL,
  DELETE_BRAND_REQUEST,
  DELETE_BRAND_SUCCESS,
  DELETE_BRAND_FAIL,
  CLEAR_ERRORS,
} from "../constants/brandConstants";

import axios from "../../axios";

// create a Brand
export const createBrand = (brandData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_BRAND_REQUEST });
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.post("/admin/brand/new", brandData, config);

    dispatch({ type: CREATE_BRAND_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_BRAND_FAIL,
      payload: error.response.data.message,
    });
  }
};

// get categories
export const allBrands = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_BRAND_REQUEST });
    const { data } = await axios.get("/brands");
    dispatch({ type: ALL_BRAND_SUCCESS, payload: data.brands });
    // console.log("data from store", data.brands);
  } catch (error) {
    dispatch({
      type: ALL_BRAND_FAIL,
      payload: error.response.data.message,
    });
  }
};
// get brand Details
export const getbrand = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_BRAND_REQUEST });
    const { data } = await axios.get(`/brand/${id}`);
    dispatch({ type: GET_BRAND_SUCCESS, payload: data.brand });
    // console.log("data from store", data.brands);
  } catch (error) {
    dispatch({
      type: GET_BRAND_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteBrand = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BRAND_REQUEST });
    const { data } = await axios.delete("/admin/brand/:id");
    dispatch({ type: DELETE_BRAND_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: DELETE_BRAND_FAIL,
      payload: error.response.data.message,
    });
  }
};
// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
