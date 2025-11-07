import React, { useState } from "react";
import NestedSidebar from "../NestedSidebar";
const UsersSidebar = () => {
    const [tab, setTab] = useState("profile");

  const sections = [
    {
      title: "Account",
      items: [
        { key: "profile", label: "Profile", path: "/admin/dashboard"},
        { key: "changePassword", label: "Change Password"},
      ],
    },
    {
      title: "Administration",
      items: [
        { key: "permissionMgmt", label: "Permission Mgmt."},
        { key: "userMgmt", label: "User Mgmt."},
        { key: "partnerMgmt", label: "Partner Mgmt."},
      ],
    },
    {
      title: "Partner Admin",
      items: [
        { key: "permissionMgmt", label: "Permission Mgmt."},
        { key: "userMgmt", label: "User Mgmt."},
        { key: "partnerMgmt", label: "Partner Mgmt."},
      ],
    },
  ];

  return (
    <div>
      <NestedSidebar sections={sections} tab={tab} setTab={setTab} />
    </div>
  );
};

export default UsersSidebar;
