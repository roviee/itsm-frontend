import { NavLink } from "react-router-dom";
import { Menu, Bell } from "lucide-react";
import { useAuth } from "../context/AuthContext";
function Navbar({ role }) {
  const { user } = useAuth();

  function getInitials(name) {
    const names = name.trim().split(" ");
    const firstInitial = names[0]?.charAt(0).toUpperCase() || "";
    const lastInitial =
      names.length > 1 ? names[names.length - 1].charAt(0).toUpperCase() : "";
    const initials = firstInitial + lastInitial;
    return initials;
  }

  const roleLinks = {
    ADMIN: [
      { to: "/admin/incidents", label: "Incidents" },
      { to: "/admin/problem", label: "Problem" },
      { to: "/admin/change", label: "Change" },
      { to: "/admin/service-catalog", label: "Service Catalog" },
      { to: "/admin/knowledge-base", label: "Knowledge Base" },
    ],
    EMPLOYEE: [
      { to: "/portal", label: "Home" },
      { to: "/service-catalog", label: "Service Catalog" },
      { to: "/my-tickets", label: "My Ticket" },
      { to: "/knowledge-base", label: "Knowledge Base" },
    ],
    SUPPORT_STAFF: [{ to: "/staff/dashboard", label: "Dashboard" }],
  };
  return (
    <>
      <nav className="navbar top-header p-0">
        <div className="container-fluid px-0">
          <div className="d-flex align-items-center w-100">
            <a className="navbar-brand ms-3" href="#">
              {/* <img src={navLogo} alt="Your Brand" width="200" height="50" className="d-inline-block align-text-top" /> */}
              SpringNow
            </a>
            <ul className="nav flex-row ms-3">
              {roleLinks[role]?.map((link) => (
                <li key={link.to} className="nav-item">
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      "nav-link" + (isActive ? " active" : "")
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="ms-auto d-flex align-items-center gap-3 pe-3">
              <input
                type="text"
                className="form-control search-box"
                placeholder="Search"
              />
              <div className="header-icon" title="Notifications">
                <Bell />
                <span className="notification-badge">3</span>
              </div>
              <div className="user-avatar" title={user?.username || "User"}>
                {getInitials(user?.username)}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
