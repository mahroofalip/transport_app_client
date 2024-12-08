import { useNavigate } from "react-router-dom";
import * as React from "react";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import { useDispatch } from "react-redux";
import { AdminLogout, subAdminLogout } from "../../actions/CommonActions";
import Modal from "../modal/Modal";
// import { useState } from "react";

const drawerWidth = 240;

export default function Navbar(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open,setOpen] =React.useState(false)
  // const [id,setId]=useState("")
  const resetAdminData = (id) => {
    setOpen(true)
  };

  const handleLogout = () => {
    if (props.user === "admin") {
      dispatch(AdminLogout());
      navigate("/login");
    } else {
      dispatch(subAdminLogout());
      navigate("/sub-admin/login");
    }
  };

  return (
    <>
      <AppBar
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "#fff",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h5
            style={{
              display: "inline-block",
              marginLeft: "20px",
              color: "green",
            }}
          >
            
            {props.title}
          </h5>

          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              <Chip
                avatar={
                  <Avatar
                    alt="Admin_icon"
                    src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                  />
                }
                size="medium"
                sx={{
                  border: "solid 1px #e75c05",
                  mr: 2,
                  fontSize: "16px",
                  fontWeight: "bold",
                  fontFamily: "cursive",
                  color: "#e75c05",
                }}
                label={
                  props.user === "admin"
                    ? props.AdminName
                    : props.user === "subAdmin"
                    ? props.SubAdminName
                    : ""
                }
                onClick={() => {
                  props.user === "admin" && resetAdminData(props.Admin_id);
                }}
                variant="outlined"
              />

              <Button
                onClick={handleLogout}
                variant="contained"
                sx={{ backgroundColor: "#e75c05" }}
                startIcon={<LogoutIcon />}
              >
                Logout
              </Button>
            </Typography>
          </Toolbar>
        </div>
      </AppBar>
      <Modal open={open}></Modal>
      {/* <EditAdmin
          // subAdminId={subAdminId}
          // emailForUpdate={emailForUpdate}
          // firstNameForUpdate={firstNameForUpdate}
          // lastNameForUpdate={lastNameForUpdate}
          // passwordForUpdate={passwordForUpdate}
          id={id}
          open={open}
          handleClose={()=>{
            setOpen(false)
          }}
        /> */}
    </>
  );
}
