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
import DriverVerificationPage from "../../components/extraPages/DriverVerificationPage";
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
  const [ showVerifyPage, setShowVerifyPage] = useState(false)
  const [ _id, set_id] = useState('')
  const [ driverId, setDriverId ] = useState('')
  const [formTypes, setFormTypes ] = useState('')
  const [csNotes, setCsNotes] = useState([])

  const {adminInfo} = useSelector((state) => state.adminLogin);
  const { drivers, loading } = useSelector((state) => state.driversList)
  const { addWallet} = useSelector((state) => state.addDriverWallet)
  const { addComment } = useSelector((state) => state.addDriverComment)
  useEffect(() => {
    if (!adminInfo) {
      navigate("/login");
    }
    dispatch(ListAllDriverAction("admin"))
  }, [
    navigate, 
    adminInfo, 
    dispatch,
    addWallet,
    addComment
  ]);

  const handleDriverForm = (formType, id, driverid, csNote) => {
    if(formType === "driver_add_comment"){
      setCsNotes(csNote)
      setFormTypes(formType)
      setDriverId(driverid)
      setIsOpen(true)
    } else
    if(formType === "verifyPage"){
      set_id(id)
      setShowVerifyPage(true)
    }else{
      set_id(id)
      setFormTypes(formType)
      setDriverId(driverid)
      setIsOpen(true)
    }
   
  }
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar
          activeTab="Driver"
          user="admin"
          title={showVerifyPage ? "DRIVER > VERIFICATION" :"DRIVERS"}
          id={adminInfo && adminInfo._id}
          email={adminInfo && adminInfo.email}
          name={adminInfo && `${adminInfo.firstName} ${adminInfo.lastName}`}
          token={adminInfo && adminInfo.token}
        />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 1 }}
        >
          <Toolbar />
          {
             !loading && drivers ?
            <>
            {
              !showVerifyPage &&
             <TableComponent
              user="admin"
              headings={headings}
              array={drivers}
              handleDriverForm={handleDriverForm}
              screen="DriverList"
            />
            }
            
            {
              showVerifyPage && <DriverVerificationPage id={_id} setShowVerifyPage={setShowVerifyPage}/>
            }
            </>
            : <Loader />
          }
          {/* <pre>{JSON.stringify(drivers, null, 4)}</pre> */}
        </Box>
        <Modal
          open={isOpen}
          handleClose={() => setIsOpen(false)}
          title={`DRIVER ID : ${driverId}`}
          id={_id}
          formType={formTypes}
          driverComments = {csNotes}
        />
      </Box>
    </>
  );
};

export default AdminDriverList;
