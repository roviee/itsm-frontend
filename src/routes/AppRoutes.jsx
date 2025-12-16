import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import LoginPage from "../pages/LoginPage";

import AdminDashboard from "../pages/admin/DashboardPage";
import AllTickets from "../pages/admin/AllTickets";

import AuthorizedLayout from "../layouts/AuthorizedLayout"
import StaffDashboard from "../pages/staff/DashboardPage";

import EmployeeLayout from "../layouts/EmployeeLayout";
import HomePage from "../pages/employee/HomePage";
import MyTicket from "../pages/employee/MyTicket";

import TicketDetails from "../components/common/Form/TicketDetails";


import Unauthorized from "../pages/Unauthorized";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/admin/*"
        element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <AuthorizedLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="incidents" element={<AllTickets />} />
        <Route path="tickets/:id" element={<TicketDetails />} />
      </Route>
      
      <Route 
        path="/staff/*"
        element={
          <ProtectedRoute allowedRoles={["SUPPORT_STAFF"]}>
            <AuthorizedLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<StaffDashboard />} />
        <Route path="tickets/:id" element={<TicketDetails />} />
      </Route>

      <Route
        path="/*"
        element={
          <ProtectedRoute allowedRoles={["EMPLOYEE"]}>
            <EmployeeLayout />
          </ProtectedRoute>
        }
      >
        <Route path="portal" element={<HomePage />} />
        <Route path="my-tickets" element={<MyTicket />} />
        <Route path="employee/tickets/:id" element={<TicketDetails />} />
      </Route>

      <Route path="/unauthorized" element={<Unauthorized />} />
    </Routes>
  );
};

export default AppRoutes;
