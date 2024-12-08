import axios from "axios";


import { LoadrunnrApi } from "../links/Main";


import {
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  SUB_ADMIN_LOGIN_FAIL,
  SUB_ADMIN_LOGIN_REQUEST,
  SUB_ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
  SUB_ADMIN_LOGOUT,
  CUSTOMERS_LIST_REQUEST,
  CUSTOMERS_LIST_SUCCESS,
  CUSTOMERS_LIST_FAIL,
  CUSTOMER_ADD_COMMENT_REQUEST,
  CUSTOMER_ADD_COMMENT_SUCCESS,
  CUSTOMER_ADD_COMMENT_FAIL,
  SINGLE_CUSTOMER_DETAILS_REQUEST,
  SINGLE_CUSTOMER_DETAILS_SUCCESS,
  SINGLE_CUSTOMER_DETAILS_FAIL,
  DRIVERS_LIST_REQUEST,
  DRIVERS_LIST_FAIL,
  DRIVERS_LIST_SUCCESS,
  SINGLE_DRIVER_DETAILS_REQUEST,
  SINGLE_DRIVER_DETAILS_SUCCESS,
  SINGLE_DRIVER_DETAILS_FAIL

} from "../constants/CommonConstants";
import { DRIVER_ADD_COMMENT_FAIL, DRIVER_ADD_COMMENT_REQUEST, DRIVER_ADD_COMMENT_SUCCESS } from "../constants/AdminConstants";



export const adminLoginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_LOGIN_REQUEST,
    });

    const { data } = await axios.post(`${LoadrunnrApi}/api/admin/login`, {
      email,
      password,
    });
    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("adminInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ADMIN_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};



export const subAdminLoginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: SUB_ADMIN_LOGIN_REQUEST,
    });

    const { data } = await axios.post(`${LoadrunnrApi}/api/sub-admin/login`, {
      email,
      password,
    });

    dispatch({
      type: SUB_ADMIN_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("subAdminInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: SUB_ADMIN_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};



export const AdminLogout = () => (dispatch) => {
  localStorage.removeItem("adminInfo");
  dispatch({ type: ADMIN_LOGOUT });
};



export const subAdminLogout = () => (dispatch) => {
  localStorage.removeItem('subAdminInfo');
  dispatch({ type: SUB_ADMIN_LOGOUT });
};


export const ListAllCustomersAction = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CUSTOMERS_LIST_REQUEST,
    });
    if(user === "admin"){
      const {
        adminLogin: { adminInfo },
      } = getState();
      var config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      };
    }
    const { data } = await axios.get(
      `${LoadrunnrApi}/api/admin/manage-customers`,
      config
    );
    dispatch({
      type: CUSTOMERS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CUSTOMERS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};



export const addCommentAction =
  (customerId, comment ) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CUSTOMER_ADD_COMMENT_REQUEST,
      });
      const {
        adminLogin: { adminInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      };
      const { data } = await axios.put(
        `${LoadrunnrApi}/api/admin/add-comment`,
        { customerId, comment },
        config
      );
      dispatch({
        type: CUSTOMER_ADD_COMMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CUSTOMER_ADD_COMMENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };



export const getSingleCustomerAction =
  (customerId, user) => async (dispatch, getState) => {
    try {
      dispatch({
        type: SINGLE_CUSTOMER_DETAILS_REQUEST,
      });
      const {
        adminLogin: { adminInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      };
      const { data } = await axios.get(
        `${LoadrunnrApi}/api/admin/single-customer/${customerId}`,
        config
      );
      dispatch({
        type: SINGLE_CUSTOMER_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SINGLE_CUSTOMER_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const ListAllDriverAction = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: DRIVERS_LIST_REQUEST,
      });
  
      const { data } = await axios.get(
        `${LoadrunnrApi}/api/admin/list-drivers`);
    
      dispatch({
        type: DRIVERS_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DRIVERS_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const addDriverCommentAction =
  (driverId, comment, user) => async (dispatch, getState) => {
    try {
      dispatch({
        type: DRIVER_ADD_COMMENT_REQUEST,
      });
      const {
        adminLogin: { adminInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      };
      const { data } = await axios.put(
        `${LoadrunnrApi}/api/admin/add-driver-comment`,
        { driverId, comment },
        config
      );
      dispatch({
        type: DRIVER_ADD_COMMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DRIVER_ADD_COMMENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const driverDetailsAction = (driverId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: SINGLE_DRIVER_DETAILS_REQUEST,
      });
      const {
        adminLogin: { adminInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      };
      const { data } = await axios.get(
        `${LoadrunnrApi}/api/admin/driver-details/${driverId}`,
        config
      );
      dispatch({
        type: SINGLE_DRIVER_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SINGLE_DRIVER_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


