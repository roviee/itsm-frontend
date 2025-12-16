import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../context/AuthContext";

export default function AuthorizedLayout() {
  const { role } = useAuth();
  const [isNestedOpen, setIsNestedOpen] = useState(false);

  return (
    <div className="layout-root">
      {/* Pass the toggle function to Navbar */}
      <Navbar role={role} />

      <div
        className="layout-body"
        style={{ marginLeft: isNestedOpen ? "310px" : "50px" }}
      >
        <Sidebar onNestedToggle={setIsNestedOpen} />
        {/* Main content area */}
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
