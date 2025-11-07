import { useAuth } from "../../context/AuthContext";
import TableList from "../../components/common/Table/TableList";
import { useFetchData } from "../../hooks/useFetchData";

export default function HomePage() {
  const { user } = useAuth();
  const { data: tickets, loading, error } = useFetchData("/api/v1/tickets");
  const columns = [
    { header: "Short Description", accessor: "title" },
    { header: "Caller", accessor: "createdBy.fullname" },
    { header: "Priority", accessor: "priority" },
    { header: "Category", accessor: "category" },
    { header: "State", accessor: "status" },
    { header: "Assigned To", accessor: "assignedTo.fullname" },
    { header: "Created At", accessor: "createdAt" },
  ];


  return (
    <>
      <div className="hero-section position-relative">
        <div className="container-fluid px-4">
          <h1>Welcome back, {user?.username} </h1>
          <p>
            It's Tuesday, November 4, 2025 - Browse services, track your
            tickets, or find answers in our knowledge base
          </p>
        </div>
      </div>
      <div>
        <TableList columns={columns} data={tickets} />
      </div>
    </>
  );
}
