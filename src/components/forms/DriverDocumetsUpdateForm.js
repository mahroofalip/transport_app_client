import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import InputLabel from "@mui/material/InputLabel";
// import FormControl from "@mui/material/FormControl";
// import NativeSelect from "@mui/material/NativeSelect";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadIcon from "@mui/icons-material/Upload";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../loader/Loader";
import { driverDetailsAction } from "../../actions/CommonActions";

const DriverDocumentsUpdateForm = ({ handleClose, id, formType, open }) => {
  const dispatch = useDispatch();

  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [aadhaarFrontImg, setAadhaarFrontImg] = useState();
  const [aadhaarBackImg, setAadhaarBackImg] = useState();
  const [accountNumber, setAccountNumber] = useState();
  const [passbookImg, setPassbookImg] = useState();
  const [ifscCode, setIfscCode] = useState();
  const [bankName, setBankName] = useState();

  const { driver, loading } = useSelector((state) => state.driverDetails);

  useEffect(() => {
    if (open) {
      dispatch(driverDetailsAction(id));
    }
    if (driver) {
      setAadhaarFrontImg(driver.personalDetails.adharFrontImg);
      setAadhaarBackImg(driver.personalDetails.adharBackImg);
      setAadhaarNumber(driver.personalDetails.adharNumber);
      setPassbookImg(driver.bankDetails.passbookStatementImg);
      setAccountNumber(driver.bankDetails.accountNumber)
      setIfscCode(driver.bankDetails.ifscCode)
      setBankName(driver.bankDetails.bankName)
    }
  }, [dispatch, open, id, driver]);

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    console.log(event);
    if (event === "aadhaarFrontImg") {
      setAadhaarFrontImg(null);
    } else if (event === "aadhaarBackImg") {
      setAadhaarBackImg(null);
    } else if(event === "passbookImg"){
        setPassbookImg(null)
    }
    hiddenFileInput.current.click();
  };

  const handleTakeImg = (event) => {
    const newImage = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(newImage);
    console.log(event.target.name);
    if (event.target.name === "aadhaarFrontImg") {
      reader.onloadend = () => setAadhaarFrontImg(reader.result);
    } else if (event.target.name === "aadhaarBackImg") {
      reader.onloadend = () => setAadhaarBackImg(reader.result);
    }else if(event.target.name === "passbookImg"){
        reader.onloadend = () => setPassbookImg(reader.result)
    }
  };

  const handleUpdateAadhaarDetails = () => {
    // dispatch()
  };

  const handleUpdateBankDetails = () => {
    // dispatch()
  };

  switch (formType) {
    case "update_driver_aadhaar_details":
      return (
        <>
          {!loading && driver ? (
            <>
              <DialogContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 2 },
                  }}
                >
                  <div>
                    <span style={{ marginLeft: "30px" }}>
                      Aadhaar Front Image
                    </span>
                    <DialogContent dividers>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        {
                          <img
                            width="350px"
                            src={aadhaarFrontImg}
                            alt="chosen"
                          ></img>
                        }
                      </div>
                    </DialogContent>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "5px",
                      }}
                    >
                      {/* <input
                    ref={inputFileRef}
                    accept="image/*"
                    hidden
                    id="aadhaar-front"
                    type="file"
                    name="aadhaarFront"
                    onChange={handleOnChange}
                  />
                  <label htmlFor="aadhaar-front">
                    <UploadButton
                      variant="contained"
                      color="primary"
                      component="span"
                      style={{ width: "300px" }}
                      mb={2}
                      onClick={handleAadhaarFrontClick}
                    >
                      {aadhaarFront ? (
                        <DeleteIcon mr={2} />
                      ) : (
                        <UploadIcon mr={2} />
                      )}
                      {aadhaarFront ? "Cancel" : "Update"}
                    </UploadButton>
                  </label> */}

                      <Button
                        variant="contained"
                        style={{ width: "300px" }}
                        mb={2}
                        onClick={() => handleClick("aadhaarFrontImg")}
                      >
                        {aadhaarFrontImg ? (
                          <DeleteIcon mr={2} />
                        ) : (
                          <UploadIcon mr={2} />
                        )}
                        {aadhaarFrontImg ? "Cancel" : "Update"}
                      </Button>
                      <input
                        type="file"
                        accept="image/*"
                        ref={hiddenFileInput}
                        name="aadhaarFrontImg"
                        onChange={handleTakeImg}
                        hidden
                      />
                    </div>
                  </div>
                  <div>
                    <span style={{ marginLeft: "30px" }}>
                      Aadhaar Back Image
                    </span>
                    <DialogContent dividers>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        {
                          <img
                            width="350px"
                            src={aadhaarBackImg}
                            alt="chosen"
                          ></img>
                        }
                      </div>
                    </DialogContent>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "5px",
                      }}
                    >
                      {/* <input
                    ref={inputFileRef}
                    accept="image/*"
                    hidden
                    id="aadhaar-back"
                    type="file"
                    name="aadhaarBack"
                    onChange={handleOnChange}
                  />
                  <label htmlFor="aadhaar-back">
                    <UploadButton
                      variant="contained"
                      color="primary"
                      component="span"
                      style={{ width: "300px" }}
                      mb={2}
                      onClick={handleAadhaarBackClick}
                    >
                      {aadhaarBack ? (
                        <DeleteIcon mr={2} />
                      ) : (
                        <UploadIcon mr={2} />
                      )}
                      {aadhaarBack ? "Cancel" : "Update"}
                    </UploadButton>
                  </label> */}
                      <Button
                        variant="contained"
                        style={{ width: "300px" }}
                        mb={2}
                        onClick={() => handleClick("aadhaarBackImg")}
                      >
                        {aadhaarBackImg ? (
                          <DeleteIcon mr={2} />
                        ) : (
                          <UploadIcon mr={2} />
                        )}
                        {aadhaarBackImg ? "Cancel" : "Update"}
                      </Button>
                      <input
                        type="file"
                        accept="image/*"
                        ref={hiddenFileInput}
                        name="aadhaarBackImg"
                        onChange={handleTakeImg}
                        hidden
                      />
                    </div>
                  </div>
                </Box>
                <div>
                  <div style={{ display: "flex", justifyContent: "end" }}>
                    {" "}
                    <span align="">{aadhaarNumber.length}/12</span>{" "}
                  </div>
                  <TextField
                    onChange={(e) => setAadhaarNumber(e.target.value)}
                    error={
                      aadhaarNumber
                        ? false
                        : aadhaarNumber.length === 12
                        ? false
                        : true
                    }
                    label="Aadhaar number"
                    type="number"
                    name="aadhaarNo"
                    value={aadhaarNumber}
                    fullWidth
                    size="Normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    //   className={helperTxtClass.root}
                    helperText={
                      aadhaarNumber ? (
                        <>
                          {aadhaarNumber.length === 12
                            ? null
                            : "Aadhaar number must be 12th character"}{" "}
                        </>
                      ) : (
                        "Please enter aadhaar number"
                      )
                    }
                  />
                </div>
                {/* <pre>{JSON.stringify(driver, null, 4)}</pre> */}
              </DialogContent>

              <DialogActions>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#e75c05", color: "#fff" }}
                  onClick={handleUpdateAadhaarDetails}
                >
                  Submit
                </Button>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "red", color: "#fff" }}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </DialogActions>
            </>
          ) : (
            <Loader />
          )}
        </>
      );

    case "update_driver_bank_details":
      return (
        <>
          {!loading && driver ? (
            <>
              <DialogContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 2 },
                  }}
                >
                  <div>
                    <div style={{ textAlign: "center" }}>
                      <div>
                        {
                          <img
                            width="400px"
                            height="300px"
                            src={passbookImg}
                            alt="chosen"
                          ></img>
                        }
                      </div>
                      {/* <input
                      ref={inputFileRef}
                      accept="image/*"
                      hidden
                      name="passbook"
                      id="passbook"
                      type="file"
                      onChange={handleOnChange}
                    />
                    <label htmlFor="passbook">
                      <UploadButton
                        variant="contained"
                        color="primary"
                        component="span"
                        m={2}
                        onClick={handlePassBookImgClick}
                      >
                        {newPassbookImg ? (
                          <DeleteIcon mr={2} />
                        ) : (
                          <UploadIcon mr={2} />
                        )}
                        {newPassbookImg ? "Cancel" : "Update"}
                      </UploadButton>
                    </label> */}
                      <Button
                        variant="contained"
                        style={{ width: "300px" }}
                        mb={2}
                        onClick={() => handleClick("passbookImg")}
                      >
                        {passbookImg ? (
                          <DeleteIcon mr={2} />
                        ) : (
                          <UploadIcon mr={2} />
                        )}
                        {passbookImg ? "Cancel" : "Update"}
                      </Button>
                      <input
                        type="file"
                        accept="image/*"
                        ref={hiddenFileInput}
                        name="passbookImg"
                        onChange={handleTakeImg}
                        hidden
                      />
                    </div>
                  </div>
                  <div>
                    <TextField
                      onChange={(e) => setAccountNumber(e.target.value)}
                      label="Bank Ac Number"
                      error={accountNumber ? false : true}
                      name="BankAcNo"
                      type="number"
                      value={accountNumber}
                      fullWidth
                      sx={{ mb: "20px" }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      // className={helperTxtClass.root}
                      helperText={
                        accountNumber ? null : "Please Enter Bank Ac Number"
                      }
                    />
                    <TextField
                      onChange={(e) => setBankName(e.target.value)}
                      label="Bank Name"
                      name="bankName"
                      error={bankName ? false : true}
                      value={bankName}
                      fullWidth
                      sx={{ mb: "20px" }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      // className={helperTxtClass.root}
                      helperText={bankName ? null : "Please enter bank name"}
                    />
                    <TextField
                      onChange={(e) => setIfscCode(e.target.value)}
                      label="Ifsc"
                      name="Ifsc"
                      value={ifscCode}
                      fullWidth
                      sx={{ mb: "20px" }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      // className={helperTxtClass.root}
                      helperText={ifscCode ? null : "Please enter ifsc code"}
                    />
                  </div>
                </Box>
              </DialogContent>

              <DialogActions>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#e75c05", color: "#fff" }}
                  onClick={handleUpdateBankDetails}
                >
                  Submit
                </Button>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "red", color: "#fff" }}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                {/* <pre>{JSON.stringify(driver, null, 4)}</pre> */}
              </DialogActions>
              
            </>
          ) : (
            <Loader />
          )}
          {/* <pre>{JSON.stringify(driver, null, 4)}</pre> */}
        </>
      );
    case "update_driver_vehicle_details" :
        return (
          <>
            {/* <DialogContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "& > :not(style)": { m: 2 },
                }}
              >
                <div>
                  <span style={{ marginLeft: "30px" }}>
                    Vehicle front Image
                  </span>
                  <DialogContent dividers>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {
                        <img
                          width="350px"
                          src={newVehicleFrontImg || vehicleFrontImg}
                          alt="chosen"
                        ></img>
                      }
                    </div>
                  </DialogContent>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "5px",
                    }}
                  >
                    <input
                      ref={inputFileRef}
                      accept="image/*"
                      hidden
                      id="vehicle-front"
                      type="file"
                      name="vehicleFront"
                      onChange={handleOnChange}
                    />
                    <label htmlFor="vehicle-front">
                      <UploadButton
                        variant="contained"
                        color="primary"
                        component="span"
                        style={{ width: "300px" }}
                        mb={2}
                        onClick={handleVehicleFrontClick}
                      >
                        {newVehicleFrontImg ? (
                          <DeleteIcon mr={2} />
                        ) : (
                          <UploadIcon mr={2} />
                        )}
                        {newVehicleFrontImg ? "Cancel" : "Update"}
                      </UploadButton>
                    </label>
                  </div>
                </div>
                <div>
                  <span style={{ marginLeft: "30px" }}>Vehicle back Image</span>
                  <DialogContent dividers>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {
                        <img
                          width="350px"
                          src={newVehicleBackImg || vehicleBackImg}
                          alt="chosen"
                        ></img>
                      }
                    </div>
                  </DialogContent>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "5px",
                    }}
                  >
                    <input
                      ref={inputFileRef}
                      accept="image/*"
                      hidden
                      id="vehicle-back"
                      type="file"
                      name="vehicleBack"
                      onChange={handleOnChange}
                    />
                    <label htmlFor="vehicle-back">
                      <UploadButton
                        variant="contained"
                        color="primary"
                        component="span"
                        style={{ width: "300px" }}
                        mb={2}
                        onClick={handleVehicleBackClick}
                      >
                        {newVehicleBackImg ? (
                          <DeleteIcon mr={2} />
                        ) : (
                          <UploadIcon mr={2} />
                        )}
                        {newVehicleBackImg ? "Cancel" : "Update"}
                      </UploadButton>
                    </label>
                  </div>
                </div>
              </Box>
              <div>
                <div style={{ display: "flex", justifyContent: "end" }}> </div>
                <TextField
                  onChange={inputHandle}
                  label="Vehcle number"
                  name="vehicleNumber"
                  value={vehicleNo}
                  fullWidth
                  size="Normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={helperTxtClass.root}
                  helperText={vehicleNo ? null : "Please enter vehicle number"}
                />
              </div>
            </DialogContent>

            <DialogActions>
              <Button
                variant="contained"
                style={{ backgroundColor: "#e75c05", color: "#fff" }}
                onClick={submit}
              >
                Submit
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "red", color: "#fff" }}
                onClick={handleClose}
              >
                Cancel
              </Button>
            </DialogActions> */}
 
        </>
        )
      default:
      return;
  }
};

export default DriverDocumentsUpdateForm;
