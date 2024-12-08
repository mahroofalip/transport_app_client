import React from "react";
import Box from "@mui/material/Box";

import Sidebar from "../../components/side-bar/SideBar";
import Loader from "../../components/loader/Loader";
const AdminDashBoard = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar
          activeTab="Dashboard"
          user="admin"
          name="hai"
          title=" ANALYTICS DASHBOARD"
          //   id={adminInfo && adminInfo._id}
          //   email={adminInfo && adminInfo.email}
           // name={adminInfo && `${adminInfo.firstName} ${adminInfo.lastName}`}
          //   token={adminInfo && adminInfo.token}
        />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 1 }}
        >
         
         
          <Loader />
        </Box>
      </Box>
    </>
  );
};

export default AdminDashBoard;
