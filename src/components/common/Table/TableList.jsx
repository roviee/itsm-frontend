import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { getNestedValue } from "../../../utils/helpers"
import { ChevronDown   } from 'lucide-react';

export default function TableList({ data, columns }) {
  const navigate = useNavigate();
  const { role } = useAuth();

  const handleRowClick = (id) => {
    const basePath =
      role === "ADMIN"
        ? "/admin"
        : role === "SUPPORT_STAFF"
        ? "/staff"
        : "/employee";
    navigate(`${basePath}/tickets/${id}`);
  };

  return (
    <>
      <div className="card-body p-0">
        <div className="table-responsive table-wrapper">
          <table className="table table-striped table-hover align-middle mb-0 custom-table-wrapper">
            <thead className="table-white">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.accessor}
                    className="border-left-0 border-right-0 fw-semibold"
                  >
                    {column.header}
                    {column.sortable && <ChevronDown   size={16} strokeWidth={3} className="text-muted ms-1"/>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border border-end-0">
              {data.length > 0 ? (
                data.map((row) => (
                  <tr key={row.id} onClick={() => handleRowClick(row.id)}>
                    {columns.map((column) => {
                      const rawValue = getNestedValue(row, column.accessor);
                      const displayValue = column.render
                        ? column.render(rawValue)
                        : rawValue;

                      return (
                        <td key={column.accessor} className="py-3">
                          <div className="fw-normal text-dark">
                            {displayValue}
                          </div>
                        </td>
                      );
                    })}
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
}
