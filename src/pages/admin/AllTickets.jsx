import { Menu, Funnel, Settings } from "lucide-react";
import TableList from "../../components/common/Table/TableList";
import { useFetchData } from "../../hooks/useFetchData";
import { tableData } from "../../components/common/Table/tableData";

export default function AllTickets() {
  const {
    data: tickets,
    loading,
    error,
  } = useFetchData("/api/v1/tickets/admin/get");

  const columns = tableData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading tickets.</p>;

  return (
    <>
      <div className="py-1 bg-secondary-subtle border-bottom">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col">
              <div className="d-flex align-items-center gap-3">
                <Menu size={20} />
                <Funnel size={20} />
                <Settings size={20} />
                <span className="fw-semibold">
                  Incidents
                </span>
                <input type="text" className="form-control w-auto" placeholder="Search" />
              </div>
            </div>
            <div className="col-auto">
              <button className="btn-sn-primary">New</button>
            </div>
          </div>
        </div>
      </div>
      <TableList columns={columns} data={tickets} />
    </>
  );
}
