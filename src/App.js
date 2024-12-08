import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashBoard from "./screens/admin/AdminDashBoard";
import SubAdminDashboard from "./screens/subAdmin/SubDashboard";
import AdminCustomerList from "./screens/admin/AdminCustomerList";
import LoginPage from "./screens/LoginPage";
import AdminDriverList from "./screens/admin/AdminDriverList";
import AdminPricingList from "./screens/admin/AdminPricings";
import AdminUserBanners from "./screens/admin/AdminUserBanners";
import AdminRentalPricings from "./screens/admin/AdminRentalPricings";
import AdminDriverBanners from "./screens/admin/AdminDriverBanners";
import AdminBookingList from "./screens/admin/AdminBookingList";
import AdminPromoCodes from "./screens/admin/AdminPromoCodes";
import AdminWithdrawals from "./screens/admin/AdminWithdrawals";
import AdminSubAdmins from "./screens/admin/AdminSubAdmins";
import SubAdminDriverList from "./screens/subAdmin/SubAdminDriverList";
import SubAdminCustomerList from "./screens/subAdmin/SubAdminCustomerList";
import DriverVerificationPage from "./components/extraPages/DriverVerificationPage";


function App() {
  return (
    <Router>
      <Routes>
      
        {/* ******************************Admin Routes*********************************** */}
        
        <Route path="/login" element={<LoginPage user="admin" />} />
        <Route path="/" element={<AdminDashBoard />} />
        <Route path='/manage-customers' element={<AdminCustomerList/>} />
        <Route path="/manage-drivers" element={<AdminDriverList />} />
        <Route path="/pricings" element={<AdminPricingList />} />
        <Route path="/user-banners" element={<AdminUserBanners />} />
        <Route path="/rental-pricings" element={<AdminRentalPricings />} />
        <Route path="/driver-banners" element={<AdminDriverBanners />} />
        <Route path="/bookings" element={<AdminBookingList />} />
        <Route path="/promocodes" element={<AdminPromoCodes />} />
        <Route path="/withdrawal-requests" element={<AdminWithdrawals />} />
        <Route path="/manage-sub-admins" element={<AdminSubAdmins />} />
        <Route path="/verify-driver" element={<DriverVerificationPage />} />


        {/* ******************************Sub-Admin Routes*********************************** */}
        <Route path='/sub-admin/login' element={<LoginPage user="subAdmin" />} />
        <Route path="/sub-admin" element={<SubAdminDashboard />} />
        <Route path="/sub-admin/manage-drivers" element={<SubAdminDriverList />} />
        <Route path="/sub-admin/manage-customers" element={<SubAdminCustomerList />} />
      </Routes>
    </Router>
  );
}

export default App;
