import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CustomerLayout from "./layouts/customer/CustomerLayout";
import StaffLayout from "./layouts/StaffLayout";
import Login from "./pages/customer/Login";
import SignUp from "./pages/customer/SignUp";
import ForgotPassword from "./pages/customer/ForgotPassword";

// customer
import Home from "./pages/customer/Home";
import Profile from "./pages/customer/Profile";
import ResetPassword from "./pages/customer/ResetPassword";
import ContractCustomer from "./pages/customer/Contracts";
import ViewTeamContract from "./pages/customer/ViewTeamContract";
import ViewProfileGuardContract from "./pages/customer/ViewProfileGuardContract";


// staff
import Dashboard from "./pages/staff/Dashboard";
import ManageServiceRequests from "./pages/staff/ManageServiceRequests";

import NotFound from "./components/NotFound"; // Thêm component 404
import ProtectedCustomerLayout from './layouts/customer/ProtectedCustomerLayout';
import ServiceRequiment from './pages/customer/ServiceRequiment';
import Contract from './pages/staff/Contract';

function App() {
  return (
    <Router>
      <Routes>
        {/* Customer */}
        <Route path="/customer" element={<CustomerLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="contracts" element={<ContractCustomer />} />
          <Route path="ViewTeamContract" element={<ViewTeamContract/>} 
          <Route path="ViewProfileGuardContract" element={<ViewProfileGuardContract/>} />
          <Route path="service-requiment" element={<ServiceRequiment />} />
        </Route>

        <Route path='' element={<ProtectedCustomerLayout />}>
          <Route path="" element={<Home />} />

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>

        {/* Staff */}
        <Route path="/staff" element={<StaffLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="contracts" element={<Contract />} />
          <Route
            path="manageServiceRequests"
            element={<ManageServiceRequests />}
          />
          {/* Thêm các route khác cho staff ở đây */}
        </Route>

        {/* Catch-All */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
