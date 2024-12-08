import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadIcon from "@mui/icons-material/Upload";
import { useDispatch, useSelector } from "react-redux";
import { driverDetailsAction } from "../../actions/CommonActions";
import Loader from "../loader/Loader";
import { updateDriverPersonalDetails } from "../../actions/AdminActions";

const UpdateDriverDetailsForm = ({ handleClose, id, open }) => {
  const dispatch = useDispatch();
  const [callDispatch, setCallDispatch] = useState(true);
  const [profileImg, setProfileImg] = useState(null);
  const [profileImg_id, setProfileImg_id] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emergencyNumber, setEmergencyNumber] = useState("");
  const [alternativeNumber, setAlternativeNumber] = useState("");
  const [city, setCity] = useState("");
  const [locality, setLocality] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleSubType, setVehicleSubType] = useState("");

  const { driver, loading } = useSelector((state) => state.driverDetails);
  useEffect(() => {
    if (open && callDispatch) {
      setCallDispatch(false);
      dispatch(driverDetailsAction(id));
    }
    if (driver) {
      setProfileImg(driver.personalDetails.profileImg);
      setProfileImg_id(driver.personalDetails.profileImg_id);
      setFirstName(driver.personalDetails.firstName);
      setLastName(driver.personalDetails.lastName);
      setMobileNumber(driver.personalDetails.defaultPhoneNumber);
      setEmergencyNumber(driver.personalDetails.emergencyNumber);
      setAlternativeNumber(driver.personalDetails.alternativeNumber);
      setCity(driver.personalDetails.addCity);
      setLocality(driver.personalDetails.addLocality);
      setVehicleNumber(driver.vehicleDetails.vehicleNumber);
      setVehicleType(driver.vehicleDetails.vehicleType);
      setVehicleSubType(driver.vehicleDetails.subType);
    }
  }, [open, id, dispatch, driver, callDispatch]);

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    if (profileImg) {
      setProfileImg(null);
    }
    hiddenFileInput.current.click();
  };


  const handleTakeImg = (event) => {
    const newImage = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(newImage);
    reader.onloadend = () => setProfileImg(reader.result);
  };

  const handleSubmit = () => {
    if (
      profileImg &&
      firstName &&
      lastName &&
      mobileNumber &&
      alternativeNumber &&
      emergencyNumber &&
      city &&
      locality &&
      vehicleNumber &&
      vehicleSubType &&
      vehicleType &&
      profileImg_id
    ) {
      dispatch(
        updateDriverPersonalDetails({
          driverId: id,
          firstName,
          lastName,
          ProImg: profileImg,
          profileImg_id,
          defaultPhoneNumber: mobileNumber,
          alternativeNumber,
          emargenceynumber: emergencyNumber,
          city,
          locality,
          vehicleNo: vehicleNumber,
          vehicleType,
          vehicleSubType,
        })
      );
      handleClose();
    }
  };

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
                  <Avatar
                    alt={profileImg}
                    src={profileImg}
                    sx={{ width: 240, height: 240 }}
                  />
                  <Button variant="contained" onClick={handleClick}>
                    {profileImg ? <DeleteIcon mr={2} /> : <UploadIcon mr={2} />}
                    {profileImg ? "Cancel" : "Update"}
                  </Button>
                  <input
                    type="file"
                    ref={hiddenFileInput}
                    onChange={handleTakeImg}
                    style={{ display: "none" }}
                  />
                </div>
              </div>
              <div>
                <TextField
                  onChange={(e) => setFirstName(e.target.value)}
                  error={firstName ? false : true}
                  label="First Name"
                  id="outlined-error-helper-text"
                  value={firstName}
                  fullWidth
                  sx={{ mb: "20px" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  helperText={firstName ? null : "Please enter firstname"}
                />
                <TextField
                  onChange={(e) => setMobileNumber(e.target.value)}
                  label="Mobile Number"
                  value={mobileNumber}
                  error={mobileNumber ? false : true}
                  type="number"
                  locality
                  fullWidth
                  sx={{ mb: "20px" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  helperText={
                    mobileNumber ? null : "Please Enter Mobile Number"
                  }
                />
                <TextField
                  onChange={(e) => setEmergencyNumber(e.target.value)}
                  label="Emergency Number"
                  type="number"
                  value={emergencyNumber}
                  error={emergencyNumber ? false : true}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  id="outlined-error-helper-text"
                  helperText={
                    emergencyNumber ? null : "Please Enter Emergency Number"
                  }
                />
              </div>
              <div>
                <TextField
                  onChange={(e) => setLastName(e.target.value)}
                  label="Last Name"
                  value={lastName}
                  error={lastName ? false : true}
                  sx={{ mb: "20px" }}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  id="outlined-error-helper-text"
                  helperText={lastName ? null : "Please Enter Last Name"}
                />
                <TextField
                  onChange={(e) => setAlternativeNumber(e.target.value)}
                  label="Alternative Number"
                  value={alternativeNumber}
                  error={alternativeNumber ? false : true}
                  type="number"
                  fullWidth
                  sx={{ mb: "20px" }}
                  id="outlined-error-helper-text"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  helperText={
                    alternativeNumber ? null : "Please Enter Alternative Number"
                  }
                />
                <TextField
                  onChange={(e) => setCity(e.target.value)}
                  label="City"
                  id="outlined-error-helper-text"
                  error={city ? false : true}
                  value={city}
                  fullWidth
                  sx={{ mb: "20px" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  helperText={city ? null : "Please Enter City"}
                />
              </div>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "& > :not(style)": { m: 2 },
              }}
            >
              <TextField
                onChange={(e) => setLocality(e.target.value)}
                id="outlined-error-helper-text"
                value={locality.toString()}
                error={locality ? false : true}
                label="Locality"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                helperText={locality ? null : "Please Enter Locality"}
              />
              <TextField
                onChange={(e) => setVehicleNumber(e.target.value)}
                label="Vehicle No"
                value={vehicleNumber}
                id="outlined-error-helper-text"
                error={vehicleNumber ? false : true}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                helperText={
                  vehicleNumber ? null : "Please Enter Vehicle Number"
                }
              />

              <Box sx={{ minWidth: 250, borderBottom: 0, borderRadius: "5px" }}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Vehicle Type
                  </InputLabel>
                  <NativeSelect
                    value={vehicleType}
                    inputProps={{
                      name: "vhType",
                      id: "uncontrolled-native",
                    }}
                    onChange={(e) => setVehicleType(e.target.value)}
                  >
                    <option value={vehicleType}>{vehicleType}</option>
                    {vehicleType === "Motor Cycle" ? null : (
                      <option value="Motor Cycle">Motor Cycle</option>
                    )}
                    {vehicleType === "Scooter" ? null : (
                      <option value="Scooter">Scooter</option>
                    )}
                    {vehicleType === "Three Wheeler & APE" ? null : (
                      <option value="Three Wheeler & APE">
                        Three Wheeler & APE
                      </option>
                    )}
                    {vehicleType === "Tata ACE 7ft" ? null : (
                      <option value="Tata ACE 7ft">Tata ACE 7ft</option>
                    )}
                    {vehicleType === "Tata ACE 8ft / Bolero" ? null : (
                      <option value="Tata ACE 8ft / Bolero">
                        Tata ACE 8ft / Bolero
                      </option>
                    )}
                    {vehicleType === "Tata ACE 407" ? null : (
                      <option value="Tata ACE 407">Tata ACE 407</option>
                    )}
                  </NativeSelect>
                </FormControl>
              </Box>
              <Box sx={{ minWidth: 250, borderBottom: 0, borderRadius: "5px" }}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Vehicle sub-type
                  </InputLabel>
                  <NativeSelect
                    defaultValue={vehicleSubType}
                    value={vehicleSubType}
                    inputProps={{
                      name: "vhSubType",
                      id: "uncontrolled-native",
                    }}
                    onChange={(e) => setVehicleSubType(e.target.value)}
                  >
                    {vehicleType === "Motor Cycle" ||
                    vehicleType === "Scooter" ? (
                      <option value="Open">Any</option>
                    ) : (
                      <option value={vehicleSubType}>{vehicleSubType}</option>
                    )}

                    {vehicleType === "Motor Cycle" ||
                    vehicleType === "Scooter" ? null : (
                      <option value="Close">Close</option>
                    )}
                    {vehicleType === "Motor Cycle" ||
                    vehicleType === "Scooter" ? null : (
                      <option value="Open">Open</option>
                    )}
                    {vehicleType === "Motor Cycle" ||
                    vehicleType === "Scooter" ? null : (
                      <option value="Tarpaulin">Tarpaulin</option>
                    )}
                  </NativeSelect>
                </FormControl>
              </Box>
            </Box>
          </DialogContent>

          <DialogActions>
            <Button
              variant="contained"
              style={{ backgroundColor: "#e75c05", color: "#fff" }}
              onClick={handleSubmit}
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
};

export default UpdateDriverDetailsForm;
