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
  UPDATE_BRAND_REQUEST,
  UPDATE_BRAND_SUCCESS,
  UPDATE_BRAND_FAIL,
  DELETE_BRAND_REQUEST,
  DELETE_BRAND_SUCCESS,
  DELETE_BRAND_FAIL,
  CLEAR_ERRORS,
} from "../constants/brandConstants";

export const createBrandReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BRAND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_BRAND_SUCCESS:
      return {
        loading: false,
        brand: action.payload,
      };
    case CREATE_BRAND_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const allBrandsReducer = (state = { brands: [] }, action) => {
  switch (action.type) {
    case ALL_BRAND_REQUEST:
      return {
        loading: true,
      };

    case ALL_BRAND_SUCCESS:
      return {
        loading: false,
        brands: action.payload,
      };

    case ALL_BRAND_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
// get a brand
export const getbrandReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BRAND_REQUEST:
      return {
        loading: true,
      };

    case GET_BRAND_SUCCESS:
      return {
        loading: false,
        brand: action.payload,
      };

    case GET_BRAND_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const updateBradReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_BRAND_REQUEST:
    case DELETE_BRAND_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case DELETE_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_BRAND_FAIL:
    case DELETE_BRAND_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
