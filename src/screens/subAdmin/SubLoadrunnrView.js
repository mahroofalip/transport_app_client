import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Sidebar from "../../components/side-bar/SideBar";



const SubLoadrunnrView = () => {


  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar
          activeTab="Loadrunnr View"
          user="subAdmin"
          name="killi  vayil nikhil"
          title="Loadrunnr View"
        //   id={adminInfo && adminInfo._id}
        //   email={adminInfo && adminInfo.email}
        //   name={adminInfo && `${adminInfo.firstName} ${adminInfo.lastName}`}
        //   token={adminInfo && adminInfo.token}
        />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 1 }}
        >
          <Toolbar />
          
          
           
            
        </Box>
      </Box>
    </>
  );
};

export default SubLoadrunnrView;
