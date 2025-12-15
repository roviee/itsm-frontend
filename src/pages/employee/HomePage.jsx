import TableList from "../../components/common/Table/TableList";
import { useFetchData } from "../../hooks/useFetchData";
import Banner from "../../components/Banner";
import { formattedDate } from "../../utils/helpers";
import { tableData } from "../../components/common/Table/tableData";

export default function HomePage() {
  const { data: tickets, loading, error } = useFetchData("/api/v1/tickets");
  const columns = tableData();
 
  return (
    <>
      <Banner
        title="Welcome Back"
        subtitle={`It's ${formattedDate()} - Browse services, track your
            tickets, or find answers in our knowledge base.`}
      />
      <div>
        <TableList columns={columns} data={tickets} />
      </div>
    </>
  );
}
