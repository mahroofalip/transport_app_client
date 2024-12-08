import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Sidebar from "../../components/side-bar/SideBar";
import TableComponent from "../../components/table/Table";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../../components/loader/Loader'
import { ListAllDriverAction } from "../../actions/CommonActions";
import Modal from '../../components/modal/Modal'
// let array = [1, 2, 4, 5, 6];

const headings = [
  {
    id: "driverId",
    label: "Driver_ID",
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

const AdminDriverList = () => {
  const navigate = useNavigate();
  const dispatch= useDispatch()

  const [ isOpen, setIsOpen] = useState(false)
  const [ _id, set_id] = useState('')
  const [ driverId, setDriverId ] = useState('')
  const [formTypes, setFormTypes ] = useState('')

  const {subAdminInfo } = useSelector((state) => state.subAdminLogin);
  const { drivers, loading } = useSelector((state) => state.driversList)
  const { addWallet} = useSelector((state) => state.addDriverWallet)
  useEffect(() => {
    if (!subAdminInfo ) {
      navigate("/sub-admin/login");
    }
    dispatch(ListAllDriverAction("subAdmin"))
  }, [
    navigate, 
    subAdminInfo, 
    dispatch,
    addWallet
  ]);

  const handleDriverForm = (formType, id, driverid) => {
    set_id(id)
    setFormTypes(formType)
    setDriverId(driverid)
    setIsOpen(true)
  }
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar
          activeTab="Driver"
          user="subAdmin"
          title="DRIVERS"
          id={subAdminInfo && subAdminInfo._id}
          email={subAdminInfo && subAdminInfo.email}
          name={subAdminInfo && `${subAdminInfo.firstName} ${subAdminInfo.lastName}`}
          token={subAdminInfo && subAdminInfo.token}
        />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 1 }}
        >
          <Toolbar />
          {
            !loading && drivers ?
            <TableComponent
              user="subAdmin"
              headings={headings}
              array={drivers}
              handleDriverForm={handleDriverForm}
              screen="DriverList"
            /> : <Loader />
          }
          {/* <pre>{JSON.stringify(drivers, null, 4)}</pre> */}
        </Box>
        <Modal
          open={isOpen}
          handleClose={() => setIsOpen(false)}
          title={`DRIVER ID : ${driverId}`}
          id={_id}
          formType={formTypes}
        />
      </Box>
    </>
  );
};

export default AdminDriverList;
