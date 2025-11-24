import { API_BASE_URL } from "../../../config/api";
import { useParams, useNavigate } from "react-router-dom";
import { useFetchData } from "../../../hooks/useFetchData";
import { Menu, ChevronLeft } from "lucide-react";
import { ticketFields } from "./ticketFields";
import { useAuth } from "../../../context/AuthContext";
import FormField from "./FormField";

export default function TicketDetails() {
  const { role } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: ticket = {},
    setData,
    loading,
    token,
    error,
    refetch,
  } = useFetchData(`/api/v1/tickets/${id}`);


  const {
    data: users = [],
    loading: usersLoading,
    setData: setUsers,
    token: usersToken,
    error: usersError,
  } = useFetchData(role === "ADMIN" ? "/api/v1/admin/users/staff" : null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/v1/tickets/update/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(ticket),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update ticket");
      }
      
      // const updatedTicket = await response.json();
      // setData(updatedTicket);

      await refetch();
      
    } catch (error) {
      console.error("Error updating ticket:", error);
      alert("Error updating ticket. Please try again.");
    }
  };

  const handleAssign = async (ticketId, staffId) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/v1/tickets/${ticketId}/assign/${staffId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) throw new Error("Failed to assign staff");
   
       await refetch();
    } catch (error) {
      console.error("Error assigning ticket:", error);
    }
  };

  const fields = ticketFields(ticket, role, users, handleAssign);

  return (
    <>
      <div className="py-1 bg-secondary-subtle border-bottom">
        <div className="container-fluid px-4">
          <div className="row align-items-center">
            <div className="col">
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-sn-secondary p-1 me-3"
                  onClick={() => navigate(-1)}
                >
                  <ChevronLeft />
                </button>
                <Menu strokeWidth={3} className="me-2" />
                <span className="fw-semibold">
                  Incident &gt; Ticket Details
                </span>
              </div>
            </div>
            {(role === "SUPPORT_STAFF" || role === "ADMIN") && (
              <div className="col-auto">
                <button className="btn-sn-primary me-2" onClick={handleUpdate}>
                  Update
                </button>
                <button className="btn-sn-secondary">Filter</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container p-4">
        <form>
          {fields.map((row, rowIndex) => (
            <div
              className={`row ${
                rowIndex < fields.length - 2 ? "mb-3" : "mb-4"
              }`}
              key={rowIndex}
            >
              {row.map((field, colIndex) => (
                <div
                  key={colIndex}
                  className={row.length === 1 ? "col-md-12" : "col-md-6"}
                >
                  <FormField {...field} onChange={handleChange} />
                </div>
              ))}
            </div>
          ))}
        </form>
      </div>
    </>
  );
}
