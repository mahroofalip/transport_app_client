import axios from 'axios'
import { 
  BLOCK_CUSTOMER_FAIL,
  BLOCK_CUSTOMER_REQUEST,
    BLOCK_CUSTOMER_SUCCESS,
    CUSTOMER_ADD_WALLET_FAIL, 
    CUSTOMER_ADD_WALLET_REQUEST, 
    CUSTOMER_ADD_WALLET_SUCCESS, 
    DRIVER_ADD_WALLET_FAIL, 
    DRIVER_ADD_WALLET_REQUEST, 
    DRIVER_ADD_WALLET_SUCCESS, 
    UNBLOCK_CUSTOMER_FAIL, 
    UNBLOCK_CUSTOMER_REQUEST,
    UNBLOCK_CUSTOMER_SUCCESS,
    UPDATE_DRIVER_PERSONAL_DETAILS_FAIL,
    UPDATE_DRIVER_PERSONAL_DETAILS_REQUEST,
    UPDATE_DRIVER_PERSONAL_DETAILS_SUCCESS
} from "../constants/AdminConstants";
import { LoadrunnrApi } from '../links/Main';

export const addWalletAction =
  (customerId, wallet, comment) => async (dispatch, getState) => {
    console.log({
        customerId,
        wallet,
        comment
    });
    try {
      dispatch({
        type: CUSTOMER_ADD_WALLET_REQUEST,
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
        `${LoadrunnrApi}/api/admin/add-wallet`,
        { customerId, wallet, comment },
        config
      );

    //   if (data) {
    //     if (data.customerWallet) {
    //       const socket = io(LOADRUNNR_SOCKET_API, {
    //         withCredentials: true,
    //         transports: ["websocket"],
    //         extraHeaders: {
    //           "my-custom-header": "abcd",
    //         },
    //       });
    //       socket.emit("updateCustomerWallet", data);
    //     }
    //   }
      dispatch({
        type: CUSTOMER_ADD_WALLET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CUSTOMER_ADD_WALLET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      console.log(error.response && error.response.data.message
        ? error.response.data.message
        : error.message,);
    }
  };



  export const blockCustomerAction =
  (customerId, comment) => async (dispatch, getState) => {
    try {
      dispatch({
        type: BLOCK_CUSTOMER_REQUEST,
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
        `${LoadrunnrApi}/api/admin/block-customer`,
        { customerId, comment },
        config
      );
      dispatch({
        type: BLOCK_CUSTOMER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BLOCK_CUSTOMER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const unblockCustomerAction =
  (customerId, comment) => async (dispatch, getState) => {
    try {
      dispatch({
        type: UNBLOCK_CUSTOMER_REQUEST,
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
        `${LoadrunnrApi}/api/admin/unblock-customer`,
        { customerId, comment },
        config
      );
      dispatch({
        type: UNBLOCK_CUSTOMER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UNBLOCK_CUSTOMER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const addDriverWalletAction =
  (driverId, wallet, comment) => async (dispatch, getState) => {
    try {
      dispatch({
        type: DRIVER_ADD_WALLET_REQUEST,
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
        `${LoadrunnrApi}/api/admin/add-driver-wallet`,
        { driverId, wallet, comment },
        config
      );
      dispatch({
        type: DRIVER_ADD_WALLET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DRIVER_ADD_WALLET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const updateDriverPersonalDetails =
  (details) => async (dispatch, getState) => {
    try {
      dispatch({
        type: UPDATE_DRIVER_PERSONAL_DETAILS_REQUEST,
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
        `${LoadrunnrApi}/api/admin/edit-driver-personal-details`,
        details,

        config
      );
      dispatch({
        type: UPDATE_DRIVER_PERSONAL_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_DRIVER_PERSONAL_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };