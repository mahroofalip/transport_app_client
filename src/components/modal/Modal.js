import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import AppBar from "@mui/material/AppBar";
import EditIcon from "@mui/icons-material/Edit";
import CustomerAddWalletForm from "../forms/CustomerAddWalletForm";
import CustomerAddCommentForm from "../forms/CustomerAddCommentForm";
import CustomerBlockForm from "../forms/CustomerBlockForm";
import CustomerUnBlockForm from "../forms/CustomerUnBlockForm";
import DriverAddWalletForm from "../forms/DriverAddWalletForm";
import DriverAddCommentForm from "../forms/DriverAddCommentForm";
import UpdateDriverDetailsForm from "../forms/UpdateDriverDetailsForm";
import DriverDocumentsUpdateForm from "../forms/DriverDocumetsUpdateForm";

const Modal = ({
  handleClose,
  open,
  title,
  formType,
  id,
  customerComments,
  driverComments
}) => (
  <React.Fragment>
    <Dialog fullWidth={true} maxWidth="md" open={open} onClose={handleClose}>
      <AppBar position="static" sx={{ backgroundColor: "#e75c05" }}>
        <DialogTitle sx={{ color: "white" }}>
          <EditIcon /> <span>{title}</span>
        </DialogTitle>
      </AppBar>
      {formType === "customer_add_wallet" && (
        <CustomerAddWalletForm handleClose={handleClose} id={id} />
      )}
      {formType === "customer_add_comment" && (
        <CustomerAddCommentForm
          handleClose={handleClose}
          id={id}
          customerComments={customerComments}
        />
      )}
      {formType === "block_customer" && (
        <CustomerBlockForm handleClose={handleClose} id={id} />
      )}
      {formType === "unblock_customer" && (
        <CustomerUnBlockForm handleClose={handleClose} id={id} />
      )}
      {formType === "driver_add_wallet" && (
        <DriverAddWalletForm handleClose={handleClose} id={id} />
      )}
      {
        formType === "driver_add_comment" && 
        <DriverAddCommentForm driverComments={driverComments} handleClose={handleClose} id={id} />
      }
      {
        formType === "update_driver_details" && 
        <UpdateDriverDetailsForm handleClose={handleClose} id={id} open={open}/>
      }
      {
        formType === "update_driver_aadhaar_details" && 
        <DriverDocumentsUpdateForm handleClose={handleClose} id={id} formType={formType} />
      }
      {
        formType === "update_driver_bank_details" &&
        <DriverDocumentsUpdateForm handleClose={handleClose} id={id} formType={formType} />
      }
      {
        formType === "update_driver_vehicle_details" &&
        <DriverDocumentsUpdateForm handleClose={handleClose} id={id} formType={formType} />
      }
    </Dialog>
  </React.Fragment>
);

export default Modal;
