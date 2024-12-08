import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "@mui/material";
import "../../../src/App.css";
import Button from "@mui/material/Button";
import Loader from "../loader/Loader";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Chip from "@mui/material/Chip";
import EditIcon from "@mui/icons-material/Edit";
import { driverDetailsAction } from "../../actions/CommonActions";
import Modal from "../modal/Modal";

const DriverVerificationPage = ({ id, setShowVerifyPage }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isOpen, setIsOpen ] = useState(false)
  const [formType, setFormType] = useState('')

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  const { driver, loading } = useSelector((state) => state.driverDetails);
  const {updatePersonalDetails } = useSelector((state) => state.updateDriverPersonalDetails)

  useEffect(() => {
    if (!adminInfo) {
      navigate("/login");
    }
    dispatch(driverDetailsAction(id));
  }, [adminInfo, dispatch, navigate, id, updatePersonalDetails]);


  const handleDriverVerifyPageForm = (type) => {
    setFormType(type)
    setIsOpen(true)
  }

  return (
    <>
      {!loading && driver ? (
        <>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <div>
              <Button
                onClick={() => setShowVerifyPage(false)}
                variant="contained"
                sx={{ backgroundColor: "#e75c05", mr: 2, mb: 2 }}
                color="primary"
              >
                <ArrowBackIcon /> Back
              </Button>
              {driver.isApproved ? (
                <Chip
                  sx={{ mb: 2, width: 100, height: 40, fontSize: 18 }}
                  label="Active"
                  color="success"
                />
              ) : (
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#e75c05", mr: 5, mb: 2 }}
                  color="primary"
                >
                  <CheckCircleIcon /> Approve
                </Button>
              )}
            </div>
          </div>

          <Grid container spacing={5} sx={{ marginTop: "5px" }}>
            <Grid item xs={12} md={3}>
              <Stack direction="row" spacing={2}>
                <Avatar
                  alt="Remy Sharp"
                  bordered="true"
                  src={
                    driver.personalDetails.profileImg &&
                    driver.personalDetails.profileImg
                  }
                  sx={{ width: 180, height: 180, ml: 5, mr: 5, mb: 2 }}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <div
                style={{
                  fontWeight: "bolder",
                  color: "#e75c05",
                  marginBottom: 15,
                }}
              >
                <span>Driver ID :</span>
                <span>{driver.driverId && driver.driverId}</span>
              </div>
              <div
                style={{
                  fontWeight: "bolder",
                  marginBottom: 15,
                }}
              >
                <span>Name :</span>
                <span> 
                  {driver.personalDetails.firstName &&
                  driver.personalDetails.lastName
                    ? driver.personalDetails.firstName +
                      " " +
                      driver.personalDetails.lastName
                    : ""}
                </span>
              </div>
              <div
                style={{
                  fontWeight: "bolder",
                  marginBottom: 15,
                }}
              >
                <span>Mobile Number :</span>{" "}
                <span>
                  {driver.personalDetails.defaultPhoneNumber &&
                    driver.personalDetails.defaultPhoneNumber}
                </span>
              </div>
              <div
                style={{
                  fontWeight: "bolder",
                  marginBottom: 15,
                }}
              >
                <span>Alternative Number :</span>{" "}
                <span>
                  {driver.personalDetails.alternativeNumber &&
                    driver.personalDetails.alternativeNumber}
                </span>
              </div>
              <div
                style={{
                  fontWeight: "bolder",
                  marginBottom: 15,
                }}
              >
                <span> Emergency Number :</span>
                <span>
                  {driver.personalDetails.emergencyNumber &&
                    driver.personalDetails.emergencyNumber}
                </span>
              </div>
              <div
                style={{
                  fontWeight: "bolder",
                  marginBottom: 15,
                }}
              >
                {driver.personalDetails.refferalNumber ? (
                  <>
                    <span>Referral Number :</span>
                    <span>{driver.personalDetails.refferalNumber}</span>
                  </>
                ) : (
                  ""
                )}
              </div>
              <div
                style={{
                  fontWeight: "bolder",
                  marginBottom: 15,
                }}
              >
                <span>City :</span>{" "}
                <span>
                  {driver.personalDetails.addCity &&
                    driver.personalDetails.addCity}
                </span>
              </div>
              <div
                style={{
                  fontWeight: "bolder",
                  marginBottom: 15,
                }}
              >
                <span>Locality :</span>{" "}
                <span>
                  {driver.personalDetails.addLocality &&
                    driver.personalDetails.addLocality}
                </span>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div
                style={{
                  fontWeight: "bolder",

                  marginBottom: 15,
                }}
              >
                <span style={{ color: "#e75c05" }}>Vehicle No :</span>
                <span>
                  {driver.vehicleDetails && driver.vehicleDetails.vehicleNumber}
                </span>
              </div>
              <div
                style={{
                  fontWeight: "bolder",

                  marginBottom: 15,
                }}
              >
                <span style={{ color: "#e75c05" }}>Vehicle Type :</span>
                <span>
                  {driver.vehicleDetails && driver.vehicleDetails.vehicleType}
                </span>
              </div>
              <div
                style={{
                  fontWeight: "bolder",

                  marginBottom: 15,
                }}
              >
                <span style={{ color: "#e75c05" }}>Sub Type :</span>
                <span>
                  {driver.vehicleDetails && driver.vehicleDetails.subType}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "60px",
                }}
              >
                <Button
                  variant="contained"
                  style={{ background: "#e75c05", marginTop: "20px" }}
                  startIcon={<EditIcon />}
                  onClick={() => handleDriverVerifyPageForm("update_driver_details")}
                >
                  Update
                </Button>
              </div>
            </Grid>
          </Grid>

          <div style={{ marginTop : "20px"}}>
            <h2>Documents</h2>
          <Table striped= "true" bordered="true" hover= "true" style={{ marginTop : "20px"}}>
            <thead>
              <tr>
                <th>Documents Type</th>

                <th>Documents images</th>
                <th>Documents Details</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {/* adhar details */}
              {driver.personalDetails ? (
                <tr>
                  <td>Aadhaar </td>
                  <td>
                    <div>
                      <img
                        style={{
                          margin: "5px",
                          maxWidth: "250px",
                          maxHeight: "100px",
                        }}
                        src={driver.personalDetails.adharFrontImg}
                        alt="img"
                      ></img>
                      <img
                        style={{
                          margin: "5px",
                          maxWidth: "250px",
                          maxHeight: "100px",
                        }}
                        src={driver.personalDetails.adharBackImg}
                        alt="img"
                      ></img>
                    </div>
                  </td>
                  <td>
                    <span style={{ display: "block" }}>
                      <span>Aadhaar Number</span> :{" "}
                      {driver.personalDetails.adharNumber}
                    </span>
                  </td>
                  <td>
                    {" "}
                    <div
                      style={{
                        display: "flex",
                        width: "250px",
                        justifyContent: "center",
                        alignContent: "center",
                      }}
                    >
                      <Button
                        variant="contained"
                        style={{ background: "#e75c05", marginTop: "20px" }}
                        startIcon={<EditIcon />}
                        onClick={() => handleDriverVerifyPageForm("update_driver_aadhaar_details")}
                      >
                        Update
                      </Button>
                    </div>
                  </td>
                </tr>
              ) : (
                ""
              )}

              {/* bank documents */}
              {driver.bankDetails ? (
                <tr key={2}>
                  <td>Bank </td>
                  <td>
                    <img
                      style={{
                        margin: "5px",
                        maxWidth: "250px",
                        maxHeight: "100px",
                      }}
                      src={
                        driver.bankDetails &&
                        driver.bankDetails.passbookStatementImg &&
                        driver.bankDetails.passbookStatementImg
                      }
                      alt="passbook"
                    ></img>
                  </td>
                  <td>
                    <span style={{ display: "block" }}>
                      <span>Account Number</span> :{" "}
                      {driver.bankDetails && driver.bankDetails.accountNumber}
                    </span>
                    <span style={{ display: "block" }}>
                      <span> Bank Name</span>:
                      {driver.bankDetails && driver.bankDetails.bankName}
                    </span>
                    <span style={{ display: "block" }}>
                      <span> Ifsc Code:</span>:
                      {driver.bankDetails && driver.bankDetails.ifscCode}
                    </span>
                  </td>
                  <td>
                    {" "}
                    <div
                      style={{
                        display: "flex",
                        width: "250px",
                        justifyContent: "center",
                        alignContent: "center",
                      }}
                    >
                      <Button
                        variant="contained"
                        style={{ background: "#e75c05", marginTop: "20px" }}
                        startIcon={<EditIcon />}
                        onClick={() => handleDriverVerifyPageForm("update_driver_bank_details")}
                      >
                        Update
                      </Button>
                    </div>
                  </td>
                </tr>
              ) : (
                ""
              )}

              {/* pan details */}

              {driver && driver.bankDetails && driver.bankDetails.panCardImg ? (
                <tr key={3}>
                  <td>Pancard </td>
                  <td>
                    {driver.bankDetails && driver.bankDetails.panCardImg ? (
                      <img
                        style={{
                          margin: "5px",
                          maxWidth: "250px",
                          maxHeight: "100px",
                        }}
                        src={driver.bankDetails.panCardImg}
                        alt="img"
                      ></img>
                    ) : (
                      "Not added"
                    )}
                  </td>
                  <td>
                    <span> Pancard No: </span>
                    {driver.bankDetails && driver.bankDetails.panCardNumber ? (
                      <span style={{ display: "block" }}>
                        {driver.bankDetails.panCardNumber}
                      </span>
                    ) : (
                      " ---Not added---"
                    )}
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        width: "250px",
                        justifyContent: "center",
                        alignContent: "center",
                      }}
                    >
                      <Button
                        variant="contained"
                        style={{ background: "#e75c05", marginTop: "20px" }}
                        startIcon={<EditIcon />}
                      >
                        Update
                      </Button>
                    </div>
                  </td>
                </tr>
              ) : null}
              {driver.vehicleDetails ? (
                <tr>
                  <td>Vehicle</td>
                  <td>
                    <img
                      style={{
                        margin: "5px",
                        maxWidth: "250px",
                        maxHeight: "100px",
                      }}
                      src={
                        driver.vehicleDetails &&
                        driver.vehicleDetails.vehicleFrontImg
                      }
                      alt="img"
                    ></img>
                    <img
                      style={{
                        margin: "5px",
                        maxWidth: "250px",
                        maxHeight: "100px",
                      }}
                      src={
                        driver.vehicleDetails &&
                        driver.vehicleDetails.vehicleBackImg
                      }
                      alt="img"
                    ></img>
                  </td>
                  <td>
                    <span style={{ display: "block" }}>
                      <span>vehicle Number</span> :{" "}
                      {driver.vehicleDetails &&
                        driver.vehicleDetails.vehicleNumber}
                    </span>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        width: "250px",
                        justifyContent: "center",
                        alignContent: "center",
                      }}
                    >
                      <Button
                        variant="contained"
                        style={{ background: "#e75c05", marginTop: "20px" }}
                        startIcon={<EditIcon />}
                        onClick={() => handleDriverVerifyPageForm("update_driver_vehicle_details")}
                      >
                        Update
                      </Button>
                    </div>
                  </td>
                </tr>
              ) : (
                ""
              )}

              {driver.vehicleDetails ? (
                <tr>
                  <td> Insurance </td>
                  <td>
                    <img
                      style={{
                        margin: "5px",
                        maxWidth: "250px",
                        maxHeight: "100px",
                      }}
                      src={
                        driver.vehicleDetails &&
                        driver.vehicleDetails.insuranceImg
                      }
                      alt="img"
                    ></img>
                  </td>
                  <td>
                    <span style={{ display: "block" }}>
                      <span>Insurance Number</span> :{" "}
                      {driver.vehicleDetails &&
                        driver.vehicleDetails.insuranceNumber}
                    </span>
                    <span style={{ display: "block" }}>
                      <span>Insurance expiry date</span> :{" "}
                      {driver.vehicleDetails &&
                        driver.vehicleDetails.insuranceExpiryDate}
                    </span>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        width: "250px",
                        justifyContent: "center",
                        alignContent: "center",
                      }}
                    >
                      <Button
                        variant="contained"
                        style={{ background: "#e75c05", marginTop: "20px" }}
                        startIcon={<EditIcon />}
                      >
                        Update
                      </Button>
                    </div>
                  </td>
                </tr>
              ) : (
                ""
              )}

              {driver.vehicleDetails ? (
                <tr>
                  <td> License </td>
                  <td>
                    <img
                      style={{
                        margin: "5px",
                        maxWidth: "250px",
                        maxHeight: "100px",
                      }}
                      src={
                        driver.vehicleDetails &&
                        driver.vehicleDetails.drivingLicenseImg
                      }
                      alt="img"
                    ></img>
                  </td>
                  <td>
                    <span style={{ display: "block" }}>
                      <span>License Number</span> :
                      {driver.vehicleDetails &&
                        driver.vehicleDetails.drivingLicenseNo}
                    </span>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        width: "250px",
                        justifyContent: "center",
                        alignContent: "center",
                      }}
                    >
                      <Button
                        variant="contained"
                        style={{ background: "#e75c05", marginTop: "20px" }}
                        startIcon={<EditIcon />}
                        onClick={() => handleDriverVerifyPageForm("update_driver_vehicle_details")}
                      >
                        Update
                      </Button>
                    </div>
                  </td>
                </tr>
              ) : (
                ""
              )}

              {/* registraion */}
              {driver.vehicleDetails ? (
                <tr>
                  <td> Registration-certificate</td>
                  <td>
                    <img
                      style={{
                        margin: "5px",
                        maxWidth: "250px",
                        maxHeight: "100px",
                      }}
                      src={
                        driver.vehicleDetails && driver.vehicleDetails.rcBookImg
                      }
                      alt="img"
                    ></img>
                  </td>

                  <td>
                    <div
                      style={{
                        display: "flex",
                        width: "250px",
                        justifyContent: "center",
                        alignContent: "center",
                      }}
                    >
                      <Button
                        variant="contained"
                        style={{ background: "#e75c05", marginTop: "20px" }}
                        startIcon={<EditIcon />}
                        onClick={() => handleDriverVerifyPageForm("update_driver_vehicle_details")}
                      >
                        Update
                      </Button>
                    </div>
                  </td>
                </tr>
              ) : (
                ""
              )}
            </tbody>
          </Table>
          </div>
        </>
      ) : (
        <Loader />
      )}
      <Modal
        open={isOpen}
        handleClose={() => setIsOpen(false)}
        title={`DRIVER ID : ${driver && driver.driverId}`}
        id={driver&& driver._id}
        formType={formType}
      />
    </>
  );
};

export default DriverVerificationPage;
