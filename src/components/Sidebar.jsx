import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import UsersSidebar from "./sidebar-component/UsersSidebar";
import InventorySidebar from "./sidebar-component/InventorySidebar";
import ServiceDeskSidebar from "./sidebar-component/ServiceDeskSidebar";
import {
  LayoutDashboard,
  Layers,
  Settings,
  ClipboardList,
  Workflow,
  Pin,
  LogOut,
} from "lucide-react";

function Sidebar() {
  const { role, logout } = useAuth();
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const [isContentOpen, setIsContentOpen] = useState(false);

  const handleMenuClick = (id) => {
    if (activeMenu === id && isContentOpen) {
      // clicking same icon closes content
      setIsContentOpen(false);
    } else {
      setActiveMenu(id);
      setIsContentOpen(true);
    }
  };

  const toggleContent = () => setIsContentOpen(!isContentOpen);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  const roleLinks = {
    ADMIN: [
      { id: "dashboard", icon: <LayoutDashboard />, path: "/admin/dashboard" },
      { id: "Service Desk", icon: <Layers /> },
      { id: "inventory", icon: <Workflow /> },
      { id: "Settings", icon: <Settings /> },
    ],
    SUPPORT_STAFF: [
      { id: "dashboard", icon: <LayoutDashboard />, path: "/staff/dashboard" },
      { id: "Service Desk", icon: <Layers /> },
    ],
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar d-flex flex-column align-items-center ">
        {roleLinks[role]?.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            onClick={() => handleMenuClick(item.id)}
            className={`nav-link d-flex align-items-center justify-content-center ${
              activeMenu === item.id && isContentOpen ? "active" : ""
            }`}
            title={item.id}
            style={{
              backgroundColor:
                activeMenu === item.id && isContentOpen
                  ? "rgba(129, 181, 161, 0.2)"
                  : "",
              color:
                activeMenu === item.id && isContentOpen
                  ? "var(--sn-sidebar-hover)"
                  : "",
              borderLeft:
                activeMenu === item.id && isContentOpen
                  ? "3px solid var(--sn-sidebar-hover)"
                  : "none",
            }}
          >
            <span>{item.icon}</span>
          </NavLink>
        ))}

        <div
          className="mt-auto py-3 text-white d-flex justify-content-center w-100"
          style={{ fontSize: "1.3rem", cursor: "pointer" }}
          onClick={handleLogout}
        >
          <LogOut />
        </div>
      </div>

      {/* Nested-sidebar */}
      <div
        className="nested-sidebar "
        style={{
          width: isContentOpen ? "40vh" : "0",
          opacity: isContentOpen ? 1 : 0,
        }}
      >
        <div className="nested-header d-flex align-items-center justify-content-between px-3 pt-2">
          <h4 className="fs-font-sectionTitle fw-semibold m-0 text-uppercase ">
            {activeMenu}
          </h4>

          <Pin
            onClick={toggleContent}
            size={20}
            style={{
              transform: "rotate(45deg)",
              cursor: "pointer",
              color: "white",
              transition: "color 0.2s ease",
            }}
          />
        </div>

        <div className="nested-content px-3">
          {activeMenu === "dashboard" && <h4>Dashboard</h4>}
          {activeMenu === "Service Desk" && <ServiceDeskSidebar />}
          {activeMenu === "Settings" && <UsersSidebar />}
          {activeMenu === "products" && <h4> Product Management</h4>}
          {activeMenu === "categories" && <h3> Category Management</h3>}
          {activeMenu === "warehouse" && <h3> Warehouse</h3>}
          {activeMenu === "inventory" && <InventorySidebar />}
          {activeMenu === "contact" && <h3> Contact Page</h3>}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
