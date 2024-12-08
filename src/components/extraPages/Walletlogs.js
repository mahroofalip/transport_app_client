import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSingleCustomerAction } from "../../actions/CommonActions";
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TableComponent from "../table/Table";

const detailsBox = {
  minHeight: "20vh",
  backgroundColor: "rgb(128, 128, 128)",
  padding: "5vh",
};

const detailsInnerBox = {
  minHeight: "15vh",
  backgroundColor: "white",
  border: "1px solid black",
  borderRadius: "20px",
  padding: "3vh",
};

const headings = [
  {
    id: "walletlogId",
    label: "Wallet_Log_ID",
    width: "0px",
  },
  {
    id: "transactionBy",
    label: "Transaction_by",
    width: "0px",
  },
  {
    id: "holder",
    label: "Wallet_Holdername",
    width: "0px",
  },
  {
    id: "amount",
    label: "Amount",
    width: "0px",
  },
  {
    id: "comment",
    label: "Comment",
    width: "0px",
  },
  {
    id: "transactionType",
    label: "Transaction_Type",
    width: "0px",
  },
  {
    id: "dateAndTime",
    label: "Created_At",
    width: "0px",
  },
];
const Walletlogs = ({ user, id, handleClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { adminInfo } = useSelector((state) => state.adminLogin);
  const { subAdminInfo } = useSelector((state) => state.subAdminLogin)
  const { customerDetails } = useSelector(
    (state) => state.singleCustomerDetails
  );
  useEffect(() => {
    if(user === "admin"){
      if (adminInfo) {
        dispatch(getSingleCustomerAction(id, user));
      } else {
        navigate("/login");
      }
    }else if(user === "subAdmin"){
      if(!subAdminInfo){
        navigate("/sub-admin/login")
      }else{
        dispatch(getSingleCustomerAction(id, user));
      }
    }
  }, [
    adminInfo, 
    dispatch, 
    navigate, 
    id, 
    user, 
    subAdminInfo
  ]);
  return (
    <>
      {
        customerDetails && 
      <>
        <div className="container-fluid" style={detailsBox}>
          <div style={detailsInnerBox}>
            <Button style={{ float: "right", backgroundColor : "#e75c05", color : "white"}} onClick={() => handleClose()}>
              <ArrowBackIcon /> Back
            </Button>
            <h5 style={{ color: "rgb(231, 92, 5)" }}>
              CustomerId : {customerDetails && customerDetails.cutomerID}
            </h5>
            <p>
              Name :{" "}
              <span>
                {customerDetails &&
                  customerDetails.firstName + " " + customerDetails.lastName}
              </span>
            </p>
            <p>
              Mobile Number :{" "}
              <span>{customerDetails && customerDetails.phoneNumber}</span>
            </p>
            <p>
              Email ID : <span>{customerDetails && customerDetails.email}</span>
            </p>
            <p>
              Gst : <span>{customerDetails && customerDetails.gstNo}</span>
            </p>
            <p>
              Wallet Amount :{" "}
              <span>₹ {customerDetails && customerDetails.wallet}</span>
            </p>
            <p>
              Coins : <span> {customerDetails && customerDetails.coins}</span>
            </p>
          </div>
        </div>
        <div className="walletlogTable p-5">
          <TableComponent
            headings={headings}
            array={customerDetails.walletlogs}
            screen="customerWalletLogs"
          />
        </div>
      </>
      }
    </>
  );
};

export default Walletlogs;
