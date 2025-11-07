import React, { useState } from "react";
import NestedSidebar from "../NestedSidebar";
const ServiceDeskSidebar = () => {
  const [tab, setTab] = useState("all-incidents");
  const sections = [
    {
      title: "Incidents",
      items: [
        { key: "all-incidents", label: "All Incidents" },
        { key: "create", label: "Create" },
        { key: "sla-configuration", label: "SLA Configuration" },
      ],
    },
    {
      title: "Service Requests",
      items: [
        { key: "request-records", label: "Request Records" },
        { key: "request-templates", label: "Request Templates" },
        { key: "approval-rules", label: "Approval Rules" },
      ],
    },
    {
      title: "Knowledge Base",
      items: [
        { key: "manage-articles", label: "Manage Articles" },
        { key: "category-setup", label: "Category Setup" },
        { key: "review-queue", label: "Review Queue" },
      ],
    },
    {
      title: "Service Catalog",
      items: [
        { key: "service-offerings", label: "Service Offerings" },
        { key: "catalog-categories", label: "Catalog Categories" },
        { key: "request-forms", label: "Request Forms" },
      ],
    },
  ];

  return (
    <div>
      <NestedSidebar sections={sections} tab={tab} setTab={setTab} />
    </div>
  );
};

export default ServiceDeskSidebar;
