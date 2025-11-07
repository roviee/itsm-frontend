import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
export default function TableList({ data, columns }) {
 const navigate = useNavigate();
 const { role } = useAuth();

 const handleRowClick = (id) => {
    const basePath = role === "ADMIN" ? "/admin" : role === "SUPPORT_STAFF" ? "/staff" : "/employee";
    navigate(`${basePath}/tickets/${id}`);
  };

  const getNestedValue = (obj, path) => {
    const value = path
      .split(".")
      .reduce((value, key) => (value ? value[key] : undefined), obj);
    return value !== undefined && value !== null ? value : "(empty)";
  };

  return (
    <>
      <div className="card-body p-0 mt-5">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0 custom-table-wrapper border ">
            <thead className="table-white">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.accessor}
                    className="border-left-0 border-right-0 fw-semibold"
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((row) => (
                  <tr key={row.id} onClick={() => handleRowClick(row.id)}>
                    {columns.map((column) => (
                      <td key={column.accessor} className="px-4 py-3">
                        <div className="fw-normal text-dark">
                          {getNestedValue(row, column.accessor)}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length} className="text-center">
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
