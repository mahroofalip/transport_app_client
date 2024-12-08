import { 
  BLOCK_CUSTOMER_FAIL,
  BLOCK_CUSTOMER_REQUEST,
    BLOCK_CUSTOMER_SUCCESS,
    CUSTOMER_ADD_WALLET_FAIL, 
    CUSTOMER_ADD_WALLET_REQUEST, 
    CUSTOMER_ADD_WALLET_SUCCESS, 
    DRIVER_ADD_COMMENT_FAIL, 
    DRIVER_ADD_COMMENT_REQUEST, 
    DRIVER_ADD_COMMENT_SUCCESS, 
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

export const addCustomerWalletReducer = (state = {}, action) => {
    switch (action.type) {
      case CUSTOMER_ADD_WALLET_REQUEST:
        return { loading: true };
      case CUSTOMER_ADD_WALLET_SUCCESS:
        return { loading: false, customerWallet: action.payload };
      case CUSTOMER_ADD_WALLET_FAIL:
        return { error: action.payload };
      default:
        return state;
    }
  };

  export const customerBlockReducer = (state = {}, action) => {
    switch (action.type) {
      case BLOCK_CUSTOMER_REQUEST:
        return { loading: true };
      case BLOCK_CUSTOMER_SUCCESS:
        return { loading: false, customerBlock: action.payload };
      case BLOCK_CUSTOMER_FAIL:
        return { error: action.payload };
      default:
        return state;
    }
  };

  export const customerUnBlockReducer = (state = {}, action) => {
    switch (action.type) {
      case UNBLOCK_CUSTOMER_REQUEST:
        return { loading: true };
      case UNBLOCK_CUSTOMER_SUCCESS:
        return { loading: false, customerUnBlock: action.payload };
      case UNBLOCK_CUSTOMER_FAIL:
        return { error: action.payload };
      default:
        return state;
    }
  };


  export const driverAddWalletReducer = (state = {}, action) => {
    switch (action.type) {
      case DRIVER_ADD_WALLET_REQUEST:
        return { loading: true };
      case DRIVER_ADD_WALLET_SUCCESS:
        return { loading: false, addWallet: action.payload };
      case DRIVER_ADD_WALLET_FAIL:
        return { error: action.payload };
      default:
        return state;
    }
  };


  export const driverAddCommentReducer = (state = {}, action) => {
    switch (action.type) {
      case DRIVER_ADD_COMMENT_REQUEST:
        return { loading: true };
      case DRIVER_ADD_COMMENT_SUCCESS:
        return { loading: false, addComment: action.payload };
      case DRIVER_ADD_COMMENT_FAIL:
        return { error: action.payload };
      default:
        return state;
    }
  };


  export const updateDriverPersonalDetailsReducer = (state = {}, action) => {
    switch (action.type) {
      case UPDATE_DRIVER_PERSONAL_DETAILS_REQUEST :
        return { loading: true };
      case UPDATE_DRIVER_PERSONAL_DETAILS_SUCCESS:
        return { loading: false, updatePersonalDetails: action.payload };
      case UPDATE_DRIVER_PERSONAL_DETAILS_FAIL:
        return { error: action.payload };
      default:
        return state;
    }
  };