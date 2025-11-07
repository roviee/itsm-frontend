import React from "react";
import { NavLink } from "react-router-dom";

export default function NestedSidebar({ sections, tab, setTab }) {
  return (
    <div className="mt-2">
      <ul className="nav flex-column">
        {sections.map((section, i) => (
          <React.Fragment key={i}>
            <li className="nav-header mb-1 mtext-uppercase fw-semibold fs-font-mainItem">
              {section.title}
            </li>
            {section.items.map((item, j) => (
              <NavLink to={item.path} key={j} className={`text-decoration-none`}>
                <li className="nav-item mb-1 ps-3" key={j}>
                  <button
                    className={`nav-link fs-font-subItem fw-medium py-1  ${
                      tab === item.key ? "active" : ""
                    }`}
                    onClick={() => setTab(item.key)}
                  >
                    {/* Only render the icon if item.icon exists */}
                    {item.icon && <item.icon className="me-2" />}
                    {item.label}
                  </button>
                </li>
              </NavLink>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
