import React from "react";
import {
  formatPriority,
  formatStatus,
  formatDate,
  PRIVILEGED_ROLES
} from "../../../utils/helpers";
import { useAuth } from "../../../context/AuthContext";

export const tableData = () => {
  const { role } = useAuth();
  if (PRIVILEGED_ROLES.includes(role)) {
    return [
      {
        header: React.createElement("input", { type: "checkbox" }),
        accessor: "checkbox",
        render: () => React.createElement("input", { type: "checkbox" }),
      },
      { header: "Number", accessor: "ticketNumber"},
      { header: "Short Description", accessor: "title", sortable: true },
      { header: "Caller", accessor: "createdBy.fullname" },
      {
        header: "Priority",
        accessor: "priority",
        render: (value) => formatPriority(value),
      },
      { header: "Category", accessor: "category" },
      {
        header: "State",
        accessor: "status",
        render: (value) => formatStatus(value),
      },
      { header: "Assigned To", accessor: "assignedTo.fullname" },
      {
        header: "Created At",
        accessor: "createdAt",
        render: (value) => formatDate(value),
        sortable: true,
      },
    ];
  }

  return [
    { header: "Number", accessor: "ticketNumber" },
    { header: "Short Description", accessor: "title", sortable: true },
    {
      header: "State",
      accessor: "status",
      render: (value) => formatStatus(value),
    },
    { header: "Assigned To", accessor: "assignedTo.fullname" },
    {
      header: "Priority",
      accessor: "priority",
      render: (value) => formatPriority(value),
    },
    { header: "Caller", accessor: "createdBy.fullname" },
   
    { header: "Category", accessor: "category" },
  
    {
      header: "Created At",
      accessor: "createdAt",
      render: (value) => formatDate(value),
      sortable: true,
    },
  ];

};
