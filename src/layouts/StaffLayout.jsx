import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../context/AuthContext";

export default function StaffLayout() {
  const { role } = useAuth();

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Pass the toggle function to Navbar */}
      <Navbar role={role} />

      <div className="d-flex flex-grow-1">
        <Sidebar />
        {/* Main content area */}
        <div className="main-content flex-grow-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
