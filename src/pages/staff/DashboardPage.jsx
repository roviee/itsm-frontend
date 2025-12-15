import Banner from "../../components/Banner";
import TableList from "../../components/common/Table/TableList";
import { useFetchData } from "../../hooks/useFetchData";
import { formattedDate } from "../../utils/helpers";
import { tableData } from "../../components/common/Table/tableData";

export default function StaffDashboard() {
  const { data: tickets, loading, error } = useFetchData("/api/v1/tickets");
  const columns = tableData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading tickets.</p>;
  
  return (
    <>
      <Banner title="Hello" subtitle= {`It's, ${formattedDate()} `} />
      <TableList columns={columns} data={tickets} />
    </>
  );
}
