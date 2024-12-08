import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import {
  FormControl,
  InputLabel,
  Button,
  TableCell,
  TableRow,
  Select,
  MenuItem,
} from "@mui/material";

let commentShow = (cmnt) => {
  let comment = "";
  let status = "";

  if (cmnt && cmnt.substring(0, 5) === "Block" && cmnt.length > 5) {
    status = "Block";
    comment = cmnt.slice(9);
  } else if (cmnt && cmnt.substring(0, 7) === "Unblock" && cmnt.length > 7) {
    status = "Unblock";
    comment = cmnt.slice(9);
  } else if (cmnt) {
    comment = cmnt;
  }

  switch (status) {
    case "Block":
      return (
        <>
          {" "}
          <span style={{ backgroundColor: "red", color: "white" }}>
            {status}
          </span>
          {" :"}
          <span> {comment} </span>{" "}
        </>
      );
    case "Unblock":
      return (
        <>
          {" "}
          <span style={{ backgroundColor: "green", color: "white" }}>
            {status}
          </span>{" "}
          <span> {comment} </span>{" "}
        </>
      );
    default:
      return <span>{comment}</span>;
  }
};

const TableDatas = ({ 
  user,
  row, 
  screen, 
  handleCustomerForms,
  handleDriverForm
}) => {
  switch (screen) {
    case "CustomerList":
      return (
        <TableRow hover key={row._id}>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            {row.cutomerID}
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            {row.isBlock ? "Blocked" : "Active"}
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            {row.firstName}
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            {row.lastName}
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            {row.phoneNumber}
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            {row.email}
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            {row.gstNo}
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span>₹{row.wallet}</span>
            </div>
            {
              user === "admin" &&
            <Button
              sx={{
                backgroundColor: "#e75c05",
                width: "20px",
              }}
              variant="contained"
              onClick={() => {
                handleCustomerForms(
                  "customer_add_wallet",
                  row._id,
                  row.cutomerID
                );
              }}
            >
              Add
            </Button>
            }
          </TableCell>

          <TableCell
            sx={{ fontWeight: "bold", fontSize: "16px" }}
            // onClick={() => handleCustomerOrders(row._id, row.cutomerID)}
          >
            <Button
              sx={{ width: 100 }}
              variant="outlined"
              endIcon={<InfoIcon />}
            >
              {row.placedOrders ? row.placedOrders : 0}
            </Button>
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            <div>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Action</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="Action"
                  component="button"
                >
                  <MenuItem
                    value="walletLogs"
                    onClick={() => {
                      handleCustomerForms("wallet_logs", row._id);
                    }}
                  >
                    Wallet Logs
                  </MenuItem>
                  { user === "admin" && row.isBlock ? (
                    <MenuItem
                      value="UnBlock"
                      onClick={() => {
                        handleCustomerForms(
                          "unblock_customer",
                          row._id,
                          row.cutomerID
                        );
                      }}
                    >
                      UnBlock
                    </MenuItem>
                  ) : user=== "admin" && (
                    <MenuItem
                      value="Block"
                      onClick={() => {
                        handleCustomerForms(
                          "block_customer",
                          row._id,
                          row.cutomerID
                        );
                      }}
                    >
                      Block
                    </MenuItem>
                  )}
                </Select>
              </FormControl>
            </div>
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span>
                {row.csnote[row.csnote.length - 1]
                  ? commentShow(row.csnote[row.csnote.length - 1].comment)
                  : ""}
              </span>
            </div>
            <Button
              sx={{
                backgroundColor: "#e75c05",
                width: "150px",
              }}
              variant="contained"
              onClick={() => {
                handleCustomerForms(
                  "customer_add_comment",
                  row._id,
                  row.cutomerID,
                  row.csnote
                );
              }}
            >
              Add Comment
            </Button>
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            {row.dateAndTime}
          </TableCell>
        </TableRow>
      );

    case "DriverList":
      return (
        <TableRow hover key={row.personalDetails.firstName}>
         <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
          <span>{row.driverId}</span>
        </TableCell>
        <TableCell>
          {row.isOnline ? (
            <span
              style={{
                color: "green",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Online
            </span>
          ) : (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Offline
            </span>
          )}
        </TableCell>
        <TableCell>
          {row.status === "PendingVehicleDetails" ? (
            <span
              style={{
                color: "yellowgreen",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              {row.status}
            </span>
          ) : (
            ""
          )}
          {row.status === "PendingBankDetails" ? (
            <span
              style={{
                color: "blue",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              {row.status}
            </span>
          ) : (
            ""
          )}
          {row.status === "Pending" ? (
            <span
              style={{
                color: "orange",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              {row.status}
            </span>
          ) : (
            ""
          )}
          {row.status === "Active" ? (
            <span
              style={{
                color: "green",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              {row.status}
            </span>
          ) : (
            ""
          )}
          {row.status === "Blocked" ? (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              {row.status}
            </span>
          ) : (
            ""
          )}
        </TableCell>

        <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
          {row.personalDetails.addCity}
        </TableCell>
        <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
          {row.personalDetails.addLocality}
        </TableCell>
       
        <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
          {row.personalDetails.firstName}
        </TableCell>

        <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
          {row.personalDetails.defaultPhoneNumber}
        </TableCell>

        <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
          {row.vehicleDetails && row.vehicleDetails.vehicleType}
        </TableCell>
        <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
          {row.vehicleDetails && row.vehicleDetails.subType}
        </TableCell>
        <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span> {row.wallet && `₹${row.wallet.toFixed(0)}`}</span>
          </div>
          {
            user === "admin" &&
          <Button
            sx={{ backgroundColor: "#e75c05" }}
            variant="contained"
            onClick={() => {
              handleDriverForm("driver_add_wallet", row._id, row.driverId)
            }}
          >
            Add
          </Button>
          }
        </TableCell>
        <TableCell sx={{ color: "green" }}>
          <div>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Action</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                // value={age}
                label="Action"
                component="button"
                // onChange={(e) => {
                //   setCostomId(row.driverId);
                //   setDriverId(row._id);

                //   handleDropdown(
                //     e.target.value,
                //     row._id,
                //     row.regCompleted,
                //     row.status
                //   );
                // }}
              >{
                user === "admin" &&
                <MenuItem onClick={() => handleDriverForm("verifyPage", row._id)}>Add/verify Documents</MenuItem>
              }
                <MenuItem >Wallet Logs</MenuItem>
                <MenuItem value="viewProfile">View Profile</MenuItem>
                {user === "admin" && row.isBlock ? (
                  <MenuItem
                    value="UnBlock"
                    // onClick={() => {
                    //   setCostomId(row.driverId);
                    //   setDriverId(row._id);
                    // }}
                  >
                    UnBlock
                  </MenuItem>
                ) : user=== "admin" && (
                  <MenuItem
                    value="Block"
                    // onClick={() => {
                    //   setCostomId(row.driverId);
                    //   setDriverId(row._id);
                    // }}
                  >
                    Block
                  </MenuItem>
                )}
              </Select>
            </FormControl>
          </div>
        </TableCell>
        <TableCell 
        sx={{ fontWeight: "bold", fontSize: "16px" }} 
        // onClick={() => 
        // handleDriverBookings(row._id, row.driverId)}
        >
        <Button
            sx={{ width: 100 }}
            variant="outlined"
            endIcon={<InfoIcon />}
          >
          {row.attemptedRides ? row.attemptedRides : 0}
          </Button>
        </TableCell>

        <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }} 
        // onClick={() => handleDriverReviews(row._id)}
        >
        <Button
            sx={{ width: 100 }}
            variant="outlined"
            endIcon={<InfoIcon />}
          >
            {row.rating}/5
          </Button>


        </TableCell>

        <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
          {row.personalDetails.refferalNumber
            ? row.personalDetails.refferalNumber
            : "Nill"}
        </TableCell>
        <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
          {row.dateAndTime}
        </TableCell>

        <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span>
              {row.csnotes[row.csnotes.length - 1]
                ? commentShow(row.csnotes[row.csnotes.length - 1].comment)
                : ""}
            </span>
          </div>
          <Button
            sx={{
              backgroundColor: "#e75c05",
              width: "200px",
            }}
            variant="contained"
            onClick={() => {
              handleDriverForm("driver_add_comment", row._id, row.driverId, row.csnotes)
            }}
          >
            Add comment
          </Button>
        </TableCell>
      </TableRow>
      );

    case "PricingList":
      return (
        <TableRow hover>
          <TableCell>1</TableCell>
          <TableCell>PricingList</TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sfgsdfsdfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
        </TableRow>
      );

    case "UserBannerList":
      return (
        <TableRow hover>
          <TableCell>1</TableCell>
          <TableCell>User Banners</TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sfgsdfsdfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
        </TableRow>
      );

    case "RentalPricingList":
      return (
        <TableRow hover>
          <TableCell>1</TableCell>
          <TableCell>Rental Pricing</TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sfgsdfsdfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
        </TableRow>
      );
    case "DriverBannerList":
      return (
        <TableRow hover>
          <TableCell>1</TableCell>
          <TableCell>Driver Banner List</TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sfgsdfsdfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
        </TableRow>
      );

    case "BookingList":
      return (
        <TableRow hover>
          <TableCell>1</TableCell>
          <TableCell>Bookings List</TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sfgsdfsdfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
        </TableRow>
      );

    case "PromoCodeList":
      return (
        <TableRow hover>
          <TableCell>1</TableCell>
          <TableCell>Promcode List</TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sfgsdfsdfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
        </TableRow>
      );

    case "WithdrawalRequestList":
      return (
        <TableRow hover>
          <TableCell>1</TableCell>
          <TableCell>Withdrawal List</TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sfgsdfsdfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
        </TableRow>
      );

    case "SubAdminList":
      return (
        <TableRow hover>
          <TableCell>1</TableCell>
          <TableCell>Sub Admin List</TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sfgsdfsdfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdf
          </TableCell>

          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfdsfs
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            sdfsdfsdf
          </TableCell>
        </TableRow>
      );
    case "customerWalletLogs":
      return (
        <TableRow hover key={row._id}>
          <TableCell>{row.walletlogid}</TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            {row.transactionBy}
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            {row.holder}
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            ₹ {row.amount}
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            {row.comment}
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            {row.transactionType}
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            {row.dateAndTime}
          </TableCell>
        </TableRow>
      );

      case "driver_verification_details" :
        return (
          <TableRow hover>
           <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            {row.document}
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            {row.img.front_img}
            {row.img.back_img}
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            {row.details}
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
            {row.update}
          </TableCell>

         
        </TableRow>
        )
    default:
      break;
  }
};

export default TableDatas;
