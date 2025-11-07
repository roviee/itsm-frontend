import { Plus, Funnel } from "lucide-react";
export default function AdminDashboard() {
  return (
    <>
      <div className="breadcrumb-section">
        <div className="container-fluid px-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Incident Management</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="page-header">
        <div className="container-fluid px-4">
          <div className="row align-items-center">
            <div className="col">
              <h1>Incident Dashboard</h1>
            </div>
            <div className="col-auto">
              <button className="btn-sn-primary me-2">
                <Plus /> New Incident
              </button>
              <button className="btn-sn-secondary">
                <Funnel /> Filter
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-4 pb-4">
        <div className="row g-3 mb-4">
          <div className="col-xl-3 col-md-6">
            <div className="stat-card">
              <div className="stat-label">Open Incidents</div>
              <div className="stat-number">47</div>
              <div className="stat-change text-danger">
                <i className="bi bi-arrow-up"></i> 8% from last week
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="stat-card">
              <div className="stat-label">In Progress</div>
              <div className="stat-number">23</div>
              <div className="stat-change text-warning">
                <i className="bi bi-dash"></i> No change
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="stat-card">
              <div className="stat-label">Resolved Today</div>
              <div className="stat-number">15</div>
              <div className="stat-change text-success">
                <i className="bi bi-arrow-up"></i> 12% increase
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="stat-card">
              <div className="stat-label">Avg Resolution Time</div>
              <div className="stat-number">4.2h</div>
              <div className="stat-change text-success">
                <i className="bi bi-arrow-down"></i> 15% faster
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}
