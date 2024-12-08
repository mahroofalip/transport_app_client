import { 
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGIN_REQUEST, 
    ADMIN_LOGIN_SUCCESS, 
    ADMIN_LOGOUT, 
    CUSTOMERS_LIST_FAIL, 
    CUSTOMERS_LIST_REQUEST, 
    CUSTOMERS_LIST_SUCCESS, 
    CUSTOMER_ADD_COMMENT_FAIL, 
    CUSTOMER_ADD_COMMENT_REQUEST, 
    CUSTOMER_ADD_COMMENT_SUCCESS, 
    DRIVERS_LIST_FAIL, 
    DRIVERS_LIST_REQUEST, 
    DRIVERS_LIST_SUCCESS, 
    SINGLE_CUSTOMER_DETAILS_FAIL, 
    SINGLE_CUSTOMER_DETAILS_REQUEST, 
    SINGLE_CUSTOMER_DETAILS_SUCCESS, 
    SINGLE_DRIVER_DETAILS_FAIL, 
    SINGLE_DRIVER_DETAILS_REQUEST, 
    SINGLE_DRIVER_DETAILS_SUCCESS, 
    SUB_ADMIN_LOGIN_FAIL, 
    SUB_ADMIN_LOGIN_REQUEST,
    SUB_ADMIN_LOGIN_SUCCESS,
    SUB_ADMIN_LOGOUT,
} from "../constants/CommonConstants";

export const adminLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case ADMIN_LOGIN_REQUEST:
        return { loading: true };
      case ADMIN_LOGIN_SUCCESS:
        return { loading: false, adminInfo: action.payload };
      case ADMIN_LOGIN_FAIL:
        return { loading: false, error: action.payload };
      case ADMIN_LOGOUT:
        return {};
      default:
        return state;
    }
  };

  export const subAdminLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case SUB_ADMIN_LOGIN_REQUEST:
        return { loading: true };
      case SUB_ADMIN_LOGIN_SUCCESS:
        return { loading: false, subAdminInfo: action.payload };
      case SUB_ADMIN_LOGIN_FAIL:
        return { error: action.payload };
        case SUB_ADMIN_LOGOUT:
          return {};
      default:
        return state;
    }
  };


  export const driverDetailsReducer = (state = {}, action) => {
    switch (action.type) {
      case SINGLE_DRIVER_DETAILS_REQUEST:
        return { loading: true };
      case SINGLE_DRIVER_DETAILS_SUCCESS:
        return { loading: false, driver: action.payload };
      case SINGLE_DRIVER_DETAILS_FAIL:
        return { error: action.payload };
      default:
        return state;
    }
  };



  export const customerListReducer = (state = {}, action) => {
    switch (action.type) {
      case CUSTOMERS_LIST_REQUEST:
        return { loading: true };
      case CUSTOMERS_LIST_SUCCESS:
        return { loading: false, customers: action.payload };
      case CUSTOMERS_LIST_FAIL:
        return { error: action.payload };
      default:
        return state;
    }
  };

  export const addCustomerCommentReducer = (state = {}, action) => {
    switch (action.type) {
      case CUSTOMER_ADD_COMMENT_REQUEST:
        return { loading: true };
      case CUSTOMER_ADD_COMMENT_SUCCESS:
        return { loading: false, addComment: action.payload };
      case CUSTOMER_ADD_COMMENT_FAIL:
        return { error: action.payload };
      default:
        return state;
    }
  };

  export const singleCustomerDetailsReducer = (state = {}, action) => {
    switch (action.type) {
      case SINGLE_CUSTOMER_DETAILS_REQUEST:
        return { loading: true };
      case SINGLE_CUSTOMER_DETAILS_SUCCESS:
        return { loading: false, customerDetails: action.payload };
      case SINGLE_CUSTOMER_DETAILS_FAIL:
        return { error: action.payload };
      default:
        return state;
    }
  };
  
  export const driversListReducers = (state = {}, action) => {
    switch (action.type) {
      case DRIVERS_LIST_REQUEST:
        return { loading: true };
      case DRIVERS_LIST_SUCCESS:
        return { loading: false, drivers: action.payload };
      case DRIVERS_LIST_FAIL:
        return { error: action.payload };
      default:
        return state;
    }
  };