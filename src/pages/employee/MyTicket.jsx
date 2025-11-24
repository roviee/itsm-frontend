import { useState } from "react";
import { API_BASE_URL } from "../../config/api";
import { useAuth } from "../../context/AuthContext";

export default function MyTicket() {
  const { token } = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    priority: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = `${API_BASE_URL}/api/v1/tickets`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const result = await response.json();
        console.log("Ticket submitted:", result);
        alert("Ticket successfully submit")
      } else {
        console.error("Failed to submit ticket");
      }
    } catch (error) {
      console.error("Error submitting ticket:", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="form-card">
              <div className="form-header">
                <h2>Create New Ticket</h2>
                <p>
                  Fill out the form below to submit a new support request. Our
                  team will respond as soon as possible.
                </p>
              </div>
              <form>
                <div className="mb-4">
                  <label htmlFor="ticketTitle" className="form-label">
                    Short Description<span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ticketTitle"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Brief summary of your issue"
                    required
                  />
                  <div className="form-text">
                    Provide a clear, concise summary of your request or issue
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="ticketCategory" className="form-label">
                    Category<span className="required">*</span>
                  </label>
                  <select
                    className="form-select"
                    id="ticketCategory"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled hidden>
                      Select a category
                    </option>
                    <option value="IT Equipment">IT Equipment</option>
                    <option value="Account Access">Account Access</option>
                    <option value="Software">Software & Applications</option>
                    <option value="Network">Network & Connectivity</option>
                    <option value="Email">Email & Communication</option>
                    <option value="Hardware">Hardware Issues</option>
                    <option value="HR">HR Assistance</option>
                    <option value="Facilities">Facilities</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="form-text">
                    Choose the category that best matches your request
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">
                    Priority<span className="required">*</span>
                  </label>
                  <select
                    className="form-select"
                    id="ticketPriority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled hidden>
                      Select a Priority
                    </option>
                    <option value="CRITICAL">Critical</option>
                    <option value="HIGH">High</option>
                    <option value="MODERATE">Moderate</option>
                    <option value="LOW">Low</option>
                  </select>
                  <div className="form-text mt-3">
                    Select the urgency level of your request
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="ticketDescription" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="ticketDescription"
                    rows="6"
                    placeholder="Provide detailed information about your issue or request..."
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                  ></textarea>
                  <div className="form-text">
                    Include any relevant details, error messages, or steps to
                    reproduce the issue
                  </div>
                </div>
                <div className="form-actions">
                  <button type="button" className="btn btn-secondary-custom">
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary-custom"
                    onClick={handleFormSubmit}
                  >
                    Submit Ticket
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
