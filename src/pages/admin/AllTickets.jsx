import TableList from "../../components/common/Table/TableList";
import { useFetchData } from "../../hooks/useFetchData";

export default function AllTickets() {
  const { data: tickets, loading, error } = useFetchData("/api/v1/tickets/admin/get");

  const columns = [
    { header: "Short Description", accessor: "title" },
    { header: "Caller", accessor: "createdBy.fullname" },
    { header: "Priority", accessor: "priority" },
    { header: "Category", accessor: "category" },
    { header: "State", accessor: "status" },
    { header: "Assigned To", accessor: "assignedTo.fullname" },
    { header: "Created At", accessor: "createdAt" },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading tickets.</p>;

  return (
    <>
      <TableList columns={columns} data={tickets} />
    </>
  );
}
