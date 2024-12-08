import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Sidebar from "../../components/side-bar/SideBar";
import TableComponent from "../../components/table/Table";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
let array = [1, 2, 4, 5, 6];


const headings = [
    {
        id: "no",
        label: "No",
      },
      {
        id: "availability",
        label: "Availability",
    
      },
        {
          id: "Status",
          label: "Driver_Status",
         
        },
        {
          id: "city",
          label: "City",
         
        },
        {
          id: "locality",
          label: "Locality",
         
        },
        {
          id: "driverId",
          label: "Driver_ID",
         
        },
        {
          id: "DriverName",
          label: "DriverName",
         
        },
        {
          id: "DriverMobile",
          label: "Driver_Mobile",
         
        },
        {
          id: "vehicleType",
          label: "Vehicle_Type",
         
        },
        {
          id: "subType",
          label: "Sub_Type",
         
        },
        {
          id: "wallet",
          label: "Wallet",
         
        },
        {
          id: "actions",
          label: "Actions",
         
        },
        {
          id: "orders",
          label: "Orders",
         
        },
        {
          id: "reviews",
          label: "Reviews",
         
        },
        {
          id: "refferedBy",
          label: "Reffered_By",
         
        },
        {
          id: "registeredAt",
          label: "Registered_At",
         
        },
        {
          id: "csNotes",
          label: "Cs_Notes",
         
        },
  ];


const AdminUserBanners = () => {
  const navigate = useNavigate()

  const adminInfo = useSelector(state => state.adminLogin)
  useEffect(() => {
    if(!adminInfo){
      navigate('/login')
    }
  }, [navigate, adminInfo])
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar
          activeTab="User Banner"
          user="admin"
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
          <h5
            style={{
              display: "inline-block",
              marginTop: "12px",
              color: "green",
            }}
          >
            User Banners
          </h5>
          <TableComponent headings = {headings} array={array} screen="UserBannerList" />
          <pre>{JSON.stringify(adminInfo, null, 4)}</pre>
        </Box>
      </Box>
    </>
  );
};

export default AdminUserBanners;
