import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { options1, options2, options3 } from "./Values";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
//import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 10 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// let filters = [];

const CheckDropDown1 = () => {
  const [values, setValus] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setValus(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl sx={{ m: 1, width: "auto", minWidth: 150 }} size="small">
      <InputLabel id="demo-multiple-checkbox-label">Status</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={values}
        onChange={handleChange}
        input={<OutlinedInput label="Status" />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {options1.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={values.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const CheckDropDown2 = () => {
  const [values, setValues] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setValues(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl sx={{ m: 1, width: "auto", minWidth: 150 }} size="small">
      <InputLabel id="demo-multiple-checkbox-label">Vehicle Type</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={values}
        onChange={handleChange}
        input={<OutlinedInput label="Vehicle Type" />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {options2.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={values.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const CheckDropDown3 = () => {
  //   const dispatch = useDispatch();
  const [values, setValues] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setValues(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl sx={{ m: 1, width: "auto", minWidth: 180 }} size="small">
      <InputLabel id="demo-multiple-checkbox-label">type3</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={values}
        onChange={handleChange}
        input={<OutlinedInput label="Vehicle subtype" />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {options3.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={values.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const FromToDateFilter = () => {
  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();
  //   const adminLogin = useSelector((state) => state.adminLogin);
  //   const { adminInfo } = adminLogin;
  //   const [value, setValue] = React.useState(new Date());

  return (
    <>
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="From"
          value={value}
          minDate={new Date()}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => (
            <TextField
              style={{ marginLeft: "50px", width: "150px" }}
              size="small"
              {...params}
            />
          )}
        />
        <DesktopDatePicker
          label="To"
          value={value}
          minDate={new Date()}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => (
            <TextField
              style={{ marginLeft: "5px", width: "150px" }}
              size="small"
              {...params}
            />
          )}
        />
      </LocalizationProvider> */}

      {/* <Button
        sx={{ marginLeft: "5px", bgcolor: "#e75c05" }}
        variant="contained"
      >
        Submit
      </Button> */}
    </>
  );
};

const SearchFilter = () => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);

  const loading = open && options.length === 0;

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  return (
    <>
      {" "}
      <Autocomplete
        freeSolo
        id="asynchronous-demo"
        sx={{ width: 350 }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        getOptionLabel={(option) => option.title}
        options={options}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
            size="small"
          />
        )}
      />
      <Button
        sx={{ marginLeft: "5px", bgcolor: "#e75c05" }}
        variant="contained"
        // startIcon={}
      >
        <SearchIcon />
      </Button>
    </>
  );
};

export {
  CheckDropDown1,
  CheckDropDown2,
  CheckDropDown3,
  FromToDateFilter,
  SearchFilter,
};
