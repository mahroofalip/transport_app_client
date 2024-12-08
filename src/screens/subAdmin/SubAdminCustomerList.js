import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Sidebar from "../../components/side-bar/SideBar";
import TableComponent from "../../components/table/Table";
import Loader from "../../components/loader/Loader";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ListAllCustomersAction } from "../../actions/CommonActions";
import Modal from "../../components/modal/Modal";
import Walletlogs from "../../components/extraPages/Walletlogs";

const headings = [
  {
    id: "id",
    label: "ID",
    width: "25px",
  },
  {
    id: "status",
    label: "Status",
    width: "0px",
  },
  {
    id: "firstName",
    label: "First_Name",
    width: "0px",
  },
  {
    id: "lastName",
    label: "Last_Name",
    width: "0px",
  },
  {
    id: "phoneNumber",
    label: "Phone_Number",
    width: "0px",
  },
  {
    id: "email",
    label: "Email_Address",
    width: "0px",
  },
  {
    id: "gst",
    label: "GST_NO",
    width: "0px",
  },
  {
    id: "wallet",
    label: "Wallet",
    width: "0px",
  },

  {
    id: "order",
    label: "Orders",
    width: "0px",
  },

  {
    id: "action",
    label: "Actions",
    width: "0px",
  },
  {
    id: "csnote",
    label: "CS_Notes",
    width: "0px",
  },
  {
    id: "createAt",
    label: "Reg_Date",
    width: "0px",
  },
];

const AdminCustomerList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [logsOpen, setLogsOpen] = useState(false)
  const [formType, setFormType] = useState("");
  const [_id, set_id] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [csNote, setCsNote] = useState([]);

  const { subAdminInfo } = useSelector((state) => state.subAdminLogin);
  const { loading, customers } = useSelector((state) => state.customerList);
  const { customerWallet } = useSelector((state) => state.addCustomerWallet);
  const { addComment } = useSelector((state) => state.addCustomerComment);
  const { customerBlock } = useSelector((state) => state.blockCustomer);
  const { customerUnBlock } = useSelector((state) => state.unBlockCustomer);

  useEffect(() => {
    if (!subAdminInfo) {
      navigate("/login");
    }
    dispatch(ListAllCustomersAction("admin"));
  }, [
    subAdminInfo,
    dispatch,
    navigate,
    customerWallet,
    addComment,
    customerBlock,
    customerUnBlock,
  ]);

  const handleCustomerForms = (formType, _id, customerId, comments) => {
    console.log("handle forms");
    console.log(formType, _id, customerId, comments);
    if (formType === "customer_add_comment") {
      setCsNote(comments);
      setFormType(formType);
      set_id(_id);
      setCustomerId(customerId);
      setIsOpen(true);
    }else if (formType === "wallet_logs"){
      set_id(_id)
      setLogsOpen(true)
    } else{
      setFormType(formType);
      set_id(_id);
      setCustomerId(customerId);
      setIsOpen(true);
    }
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar
          activeTab="Customer"
          user="subAdmin"
          title="CUSTOMERS"
          id={subAdminInfo && subAdminInfo._id}
          email={subAdminInfo && subAdminInfo.email}
          name={subAdminInfo && `${subAdminInfo.firstName} ${subAdminInfo.lastName}`}
          token={subAdminInfo && subAdminInfo.token}
        />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 1 }}
        >
          <Toolbar />
          {
            logsOpen ?  <Walletlogs 
            handleClose={() => setLogsOpen(false)}
            user = "subAdmin"
            id={_id}
            /> :!loading && customers ? (
              <>
                <TableComponent
                  user="subAdmin"
                  handleCustomerForms={handleCustomerForms}
                  headings={headings}
                  array={customers}
                  screen="CustomerList"
                />
              </>
            ) : (
              <Loader />
            )
          }
          {/* <pre>{JSON.stringify(csNote, null, 4)}</pre> */}
        </Box>
        <Modal
          open={isOpen}
          handleClose={() => setIsOpen(false)}
          title={`CUSTOMER ID : ${customerId}`}
          id={_id}
          formType={formType}
          customerComments={csNote}
        />
      </Box>
    </>
  );
};

export default AdminCustomerList;