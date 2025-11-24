import TableList from "../../components/common/Table/TableList";
import { useFetchData } from "../../hooks/useFetchData";

export default function StaffDashboard() {
  const { data: tickets, loading, error } = useFetchData("/api/v1/tickets");
  const columns = [
    { header: "Task", accessor: "ticketNumber" },
    { header: "Short Description", accessor: "title" },
    { header: "State", accessor: "status" },
    { header: "Assigned To", accessor: "assignedTo.fullname" },
    { header: "Priority", accessor: "priority" },
    { header: "Caller", accessor: "createdBy.fullname" },
    { header: "Category", accessor: "category" },
    { header: "Created At", accessor: "createdAt" },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading tickets.</p>;
  
  return (
    <>
      <h1>Hello staff</h1>
      <TableList columns={columns} data={tickets} />
    </>
  );
}
