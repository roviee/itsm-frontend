import { useParams, useNavigate, data } from "react-router-dom";
import { useFetchData } from "../../../hooks/useFetchData";
import { Menu, ChevronLeft } from "lucide-react";

export default function IncidentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: ticket = {},
    setData,
    loading,
    token,
    error,
  } = useFetchData(`/api/v1/tickets/${id}`);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const updateData = async () => {
    // try {
    //   const response = await fetch(`http://localhost:8080/api/v1/tickets/${id}/assign/${staffId}`, {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //     body: JSON.stringify(ticket),
    //   });
    //   if (!response.ok) {
    //     throw new Error("Failed to update ticket");
    //   }
    //   const updatedTicket = await response.json();
    //   setData(updatedTicket);
    //   alert("Ticket updated successfully!");
    // } catch (error) {
    //   console.error("Error updating ticket:", error);
    //   alert("Error updating ticket. Please try again.");
    // }
  };

  
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
            <div className="col-auto">
              <button className="btn-sn-primary me-2 " onClick={updateData}>Update</button>
              <button className="btn-sn-secondary">Resolve</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-4">
        <form>
          {/* Row 1 */}
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="mb-3 row">
                <label
                  htmlFor="number"
                  className="col-sm-3 col-form-label text-end fw-bold"
                >
                  Number
                </label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    id="number"
                    className="form-control"
                    defaultValue="CHG0030004"
                    disabled
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3 row">
                <label
                  htmlFor="state"
                  className="col-sm-3 col-form-label text-end fw-bold"
                >
                  State
                </label>
                <div className="col-sm-7">
                  <select
                    id="state"
                    name="status"
                    className="form-select"
                    value={ticket.status}
                    onChange={handleChange}
                  >
                    <option value="OPEN">Open</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="RESOLVED">Resolved</option>
                    <option value="CLOSED">Closed</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="mb-3 row">
                <label
                  htmlFor="requestedBy"
                  className="col-sm-3 col-form-label text-end fw-bold"
                >
                  Caller
                </label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    id="createdBy"
                    className="form-control fw-medium"
                    value={ticket.createdBy?.fullname || ""}
                    disabled
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3 row">
                <label
                  htmlFor="category"
                  className="col-sm-3 col-form-label text-end fw-bold"
                >
                  Category
                </label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    id="category"
                    className="form-control fw-medium"
                    value={ticket.category || ""}
                    disabled
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="mb-3 row">
                <label
                  htmlFor="priority"
                  className="col-sm-3 col-form-label text-end fw-bold"
                >
                  Priority
                </label>
                <div className="col-sm-7">
                  <select
                    id="priority"
                    name="priority"
                    className="form-select"
                    value={ticket.priority}
                    onChange={handleChange}
                  >
                    <option value="CRITICAL">1 - Critical</option>
                    <option value="HIGH">2 - High</option>
                    <option value="MODERATE">3 - Moderate</option>
                    <option value="LOW">4 - Low</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3 row">
                <label
                  htmlFor="assignedTo"
                  className="col-sm-3 col-form-label text-end fw-bold"
                >
                  Assigned to
                </label>
                <div className="col-sm-7">
                    <input
                    type="text"
                    id="createdBy"
                    className="form-control fw-medium"
                    value={ticket.assignedTo?.fullname || ""}
                    disabled
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Short Description */}
          <div className="row mb-3">
            <label
              htmlFor="shortDesc"
              className="col-sm-2 col-form-label text-end fw-bold"
            >
              Short description
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                id="shortDesc"
                className="form-control"
                value={ticket.title || ""}
                disabled
                readOnly
              />
            </div>
          </div>

          {/* Description */}
          <div className="row mb-4">
            <label
              htmlFor="desc"
              className="col-sm-2 col-form-label text-end fw-bold"
            >
              Description
            </label>
            <div className="col-sm-9">
              <textarea
                id="desc"
                className="form-control"
                rows="3"
                value={ticket.description}
                disabled
                readOnly
              />
            </div>
          </div>

          {/* Submit Button */}
          {/* <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button type="button" className="btn btn-primary px-4">
              Submit
            </button>
          </div>
        </div> */}
        </form>
      </div>
    </>
  );
}
