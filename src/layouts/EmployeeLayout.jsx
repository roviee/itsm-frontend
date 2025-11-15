import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

export default function EmployeeLayout() {
  const { role } = useAuth();

  return (
    <div className="layout-root">
      {/* Pass the toggle function to Navbar */}
      <Navbar role={role} />

      <div className="layout-body">
        {/* Main content area */}
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
