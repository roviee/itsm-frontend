export const ticketFields = (ticket, role, userStaffList = [], updateData) => {
  const isAdmin = role === "ADMIN";
  const isStaff = role === "SUPPORT_STAFF";
  // Row 1
    const fields = [
    [
      { label: "Number", id: "number", value: ticket.ticketNumber},
      {
        label: "State",
        id: "state",
        name: "status",
        value: ticket.status,
        isSelect: isStaff || isAdmin, // dropdown only for staff
        disabled: !(isStaff || isAdmin),
        options: [
          { label: "Open", value: "OPEN" },
          { label: "In Progress", value: "IN_PROGRESS" },
          { label: "Resolved", value: "RESOLVED" },
          { label: "Closed", value: "CLOSED" },
        ],
      },
    ],
    // Row 2
    [
      { label: "Caller", id: "createdBy", value: ticket.createdBy?.fullname },
      { label: "Category", id: "category", value: ticket.category },
    ],
    // Row 3
    [
      {
        label: "Priority",
        id: "priority",
        name: "priority",
        value: ticket.priority,
        isSelect: isAdmin,
        disabled: !isAdmin,
        options: [
          { label: "1 - Critical", value: "CRITICAL" },
          { label: "2 - High", value: "HIGH" },
          { label: "3 - Moderate", value: "MODERATE" },
          { label: "4 - Low", value: "LOW" },
        ],
      },
      {
        label: "Assigned To",
        id: "assignedTo",
        name: "assignedTo",
        value: isAdmin
          ? ticket.assignedTo?.id || ticket.assignedTo || ""
          : ticket.assignedTo?.fullname || "(empty)",
        isSelect: isAdmin,
        disabled: !isAdmin,
        options: [
          { label: "-- None --", value: "" },
          ...userStaffList.map((user) => ({
            label: user.email,
            value: user.id,
          })),
        ],
        button: isAdmin ? {
          label: "Assign",
          onClick: () =>  updateData(ticket.id, ticket.assignedTo),
        }
        : null,
      },
    ],
    // Single fields
    [
      {
        label: "Short Description",
        id: "shortDesc",
        value: ticket.title,
        labelCols: 2,
        inputCols: 9,
      },
    ],
    [
      {
        label: "Description",
        id: "desc",
        value: ticket.description,
        isTextArea: true,
        labelCols: 2,
        inputCols: 9,
      },
    ],
  ];
  if (isAdmin) {
    fields.splice(
      3, // index after Row 3
      0, // don’t remove any existing rows
      [
        {
          label: "Created Date",
          id: "createdDate",
          value: new Date(ticket.createdAt).toLocaleString(),
        },
        {
          label: "Last Updated",
          id: "updatedDate",
          value: new Date(ticket.updatedAt).toLocaleString(),
        },
      ]
    );
  }
  
  return fields;
};
