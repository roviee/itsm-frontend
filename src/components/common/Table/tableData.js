import React from "react";
import {
  formatPriority,
  formatStatus,
  formatDate,
} from "../../../utils/helpers";
export const tableData = () => {
  return [
    {
      header: React.createElement("input", { type: "checkbox" }),
      accessor: "checkbox",
      render: () => React.createElement("input", { type: "checkbox" })
    },
    { header: "Number", accessor: "ticketNumber"},
    { header: "Short Description", accessor: "title",  sortable: true },
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
      sortable: true 
    },
  ];
};
