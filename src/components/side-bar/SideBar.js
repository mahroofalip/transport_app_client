import * as React from "react";
import Box from "@mui/material/Box";
import { Drawer } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Navbar from "./NavBar";
import { useNavigate } from "react-router-dom";
import FlagIcon from "@mui/icons-material/Flag";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MyLocationSharpIcon from "@mui/icons-material/MyLocationSharp";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import NotificationsIcon from "@mui/icons-material/Notifications";

const drawerWidth = 240;

export default function Sidebar(props) {
  const navigate = useNavigate();

  const handleSideBar = (element, user) => {
    // admin navigations
    if (element === "Dashboard" && user === "admin") {
      navigate("/");
    } else if (element === "Customer" && user === "admin") {
      navigate("/manage-customers");
    } else if (element === "Pricing" && user === "admin") {
      navigate("/pricings");
    } else if (element === "Rental Pricing" && user === "admin") {
      navigate("/rental-pricings");
    } else if (element === "Driver Banner" && user === "admin") {
      navigate("/driver-banner");
    } else if (element === "User Banner" && user === "admin") {
      navigate("/user-banners");
    } else if (element === "Booking" && user === "admin") {
      navigate("/bookings");
    } else if (element === "Driver" && user === "admin") {
      navigate("/manage-drivers");
    } else if (element === "Promo Code" && user === "admin") {
      navigate("/create-promo");
    } else if (element === "Customers list" && user === "admin") {
      navigate("/admin/customer-list");
    } else if (element === "Loadrunnr View" && user === "admin") {
      navigate("/loadrunnr-view");
    } else if (element === "Withdrawal" && user === "admin") {
      navigate("/withdrawal-requests");
    } else if (element === "Driver Notification" && user === "admin") {
      navigate("/driver-Notification");
    } else if (element === "User Notification" && user === "admin") {
      navigate("/user-Notification");
    } else if (element === "Sub Admin" && user === "admin") {
      navigate("/sub-admin-management");
    }
    // sub admin navigations
    else if (element === "Dashboard" && user === "subAdmin") {
      navigate("/sub-admin");
    } else if (element === "Customer" && user === "subAdmin") {
      navigate("/sub-admin/manage-customers");
    } else if (element === "Driver" && user === "subAdmin") {
      navigate("/sub-admin/manage-drivers");
    } else if (element === "Booking" && user === "subAdmin") {
      navigate("/sub-admin/bookings");
    } else if (element === "Loadrunnr View" && user === "subAdmin") {
      navigate("/sub-admin/loadrunnr-view");
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {props.user === "admin" ? (
        <Navbar
          title={props.title}
          DashBoard={props.activeTab === "Dashboard" ? true : false}
          versions={props.versions}
          user="admin"
          AdminName={props.name}
          Admin_id={props.id}
        />
      ) : props.user === "subAdmin" ? (
        <Navbar
          title={props.title}
          DashBoard={props.activeTab === "Dashboard" ? true : false}
          versions={props.versions}
          SubAdminName={props.name}
          user="subAdmin"
          Admin_id={props.id}
        />
      ) : (
        ""
      )}

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <img
            height={40}
            src="https://loadrunnr.in/images/614abccd6d626logoorange.png"
            alt="logo"
          />
          <Typography
            sx={{ fontWeight: "bold", marginLeft: "5px", color: "#e75c05" }}
          >
            {props.user === "admin" ? "Admin Panel" : "Sub Admin"}
          </Typography>
        </Toolbar>
        <Divider />
        {props.user === "admin" ? (
          <List>
            {[
              "Dashboard",
              "Pricing",
              "Rental Pricing",
              "Promo Code",
              "Booking",
              "Customer",
              "Driver",
              "Withdrawal",
              "Loadrunnr View",
              "Driver Notification",
              "User Notification",
              "Driver Banner",
              "User Banner",
              "Sub Admin",
            ].map((text, index) => (
              <ListItem
                style={
                  text === props.activeTab
                    ? { backgroundColor: "#e75c05", color: "#fff" }
                    : {}
                }
                button
                onClick={() => {
                  handleSideBar(text, props.user);
                }}
                key={index}
              >
                {/*  Admin List */}

                <ListItemIcon>
                  {index === 0 ? (
                    <DashboardIcon
                      sx={text === props.activeTab ? { color: "#fff" } : {}}
                    />
                  ) : (
                    ""
                  )}
                  {index === 5 ? (
                    <AccountCircleIcon
                      sx={text === props.activeTab ? { color: "#fff" } : {}}
                    />
                  ) : (
                    ""
                  )}
                  {index === 1 ? (
                    <MonetizationOnIcon
                      sx={text === props.activeTab ? { color: "#fff" } : {}}
                    />
                  ) : (
                    ""
                  )}
                  {index === 2 ? (
                    <PriceChangeIcon
                      sx={text === props.activeTab ? { color: "#fff" } : {}}
                    />
                  ) : (
                    ""
                  )}
                  {index === 4  ? (
                    <BookmarkBorderIcon
                      sx={text === props.activeTab ? { color: "#fff" } : {}}
                    />
                  ) : (
                    ""
                  )}
                  {index === 12 ? (
                    <FlagIcon
                      sx={text === props.activeTab ? { color: "#fff" } : {}}
                    />
                  ) : (
                    ""
                  )}
                  {index === 11 ? (
                    <FlagCircleIcon
                      sx={text === props.activeTab ? { color: "#fff" } : {}}
                    />
                  ) : (
                    ""
                  )}
                  {index === 6 ? (
                    <AirlineSeatReclineNormalIcon
                      sx={text === props.activeTab ? { color: "#fff" } : {}}
                    />
                  ) : (
                    ""
                  )}
                  {index === 3 ? (
                    <LocalOfferIcon
                      sx={text === props.activeTab ? { color: "#fff" } : {}}
                    />
                  ) : (
                    ""
                  )}
                  {index === 8 ? (
                    <MyLocationSharpIcon
                      sx={text === props.activeTab ? { color: "#fff" } : {}}
                    />
                  ) : (
                    ""
                  )}
                  {index === 7 ? (
                    <RequestPageIcon
                      sx={text === props.activeTab ? { color: "#fff" } : {}}
                    />
                  ) : (
                    ""
                  )}

                  {index === 9 ? (
                    <CircleNotificationsIcon
                      sx={text === props.activeTab ? { color: "#fff" } : {}}
                    />
                  ) : (
                    ""
                  )}
                  {index === 10 ? (
                    <NotificationsIcon
                      sx={text === props.activeTab ? { color: "#fff" } : {}}
                    />
                  ) : (
                    ""
                  )}
                  {index === 13 ? (
                    <SupervisorAccountIcon
                      sx={text === props.activeTab ? { color: "#fff" } : {}}
                    />
                  ) : (
                    ""
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        ) : (
          //  This is sub admin list
          <List>
            {[
              "Dashboard",
              "Booking",
              "Customer",
              "Driver",
              "Loadrunnr View",
            ].map((text, index) => (
              <ListItem
                style={
                  text === props.activeTab
                    ? { backgroundColor: "#e75c05", color: "#fff" }
                    : {}
                }
                button
                onClick={() => {
                  handleSideBar(text, props.user);
                }}
                key={index}
              >
                <ListItemIcon>
                  {index === 0 ? (
                    <DashboardIcon
                      sx={text === props.activeTab ? { color: "#fff" } : {}}
                    />
                  ) : (
                    ""
                  )}
                  {index === 2 ? (
                    <AccountCircleIcon
                      sx={text === props.activeTab ? { color: "#fff" } : {}}
                    />
                  ) : (
                    ""
                  )}

                  {index === 3 ? (
                    <AirlineSeatReclineNormalIcon
                      sx={text === props.activeTab ? { color: "#fff" } : {}}
                    />
                  ) : (
                    ""
                  )}
                  {index === 1 ? (
                    <BookmarkBorderIcon
                      sx={text === props.activeTab ? { color: "#fff" } : {}}
                    />
                  ) : (
                    ""
                  )}

                  {index === 4 ? (
                    <MyLocationSharpIcon
                      sx={text === props.activeTab ? { color: "#fff" } : {}}
                    />
                  ) : (
                    ""
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        )}
      </Drawer>
    </Box>
  );
}
