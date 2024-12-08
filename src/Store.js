import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  addCustomerCommentReducer,
  adminLoginReducer,
  customerListReducer,
  driverDetailsReducer,
  driversListReducers,
  singleCustomerDetailsReducer,
  subAdminLoginReducer,
} from "./reducers/Reducers";
import {
  addCustomerWalletReducer,
  customerBlockReducer,
  customerUnBlockReducer,
  driverAddCommentReducer,
  driverAddWalletReducer,
  updateDriverPersonalDetailsReducer,
} from "./reducers/AdminReducers";

const reducer = combineReducers({
  adminLogin: adminLoginReducer,
  subAdminLogin: subAdminLoginReducer,
  customerList: customerListReducer,
  addCustomerWallet: addCustomerWalletReducer,
  addCustomerComment: addCustomerCommentReducer,
  blockCustomer: customerBlockReducer,
  unBlockCustomer: customerUnBlockReducer,
  singleCustomerDetails: singleCustomerDetailsReducer,
  driversList: driversListReducers,
  addDriverWallet: driverAddWalletReducer,
  addDriverComment: driverAddCommentReducer,
  driverDetails: driverDetailsReducer,
  updateDriverPersonalDetails : updateDriverPersonalDetailsReducer,
});

const adminInfoFromStorage = localStorage.getItem("adminInfo")
  ? JSON.parse(localStorage.getItem("adminInfo"))
  : null;

const subAdminInfoFromStorage = localStorage.getItem("subAdminInfo")
  ? JSON.parse(localStorage.getItem("subAdminInfo"))
  : null;

const initialState = {
  adminLogin: { adminInfo: adminInfoFromStorage },
  subAdminLogin: { subAdminInfo: subAdminInfoFromStorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
