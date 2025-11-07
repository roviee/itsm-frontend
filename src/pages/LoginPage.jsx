import React from "react";
import LoginForm from "../components/forms/LoginForm";
const LoginPage = () => {
  return (
    <>
      <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-login p-0">
        <div
          className="row g-0 shadow-lg rounded overflow-hidden"
          style={{ maxWidth: "1000px", width: "100%" }}
        >
          {/* Left Section - Branding */}
          <div className="col-12 col-md-6 text-bg-primary d-flex align-items-center justify-content-center position-relative">
            <div className="col-10 col-md-9 text-center text-md-start">
              <div className="bg-white rounded p-3 mb-4 d-inline-block">
                <div className="text-dark fw-semibold">SpringNow</div>
              </div>
              <h2 className="mb-4 fw-bold ">ITSM Login Portal</h2>
              <p className="mb-4 opacity-90">
                Please use your credentials to access the Information Technology Service Management.
              </p>

              {/* Feature List */}
              <div className="mt-5"></div>
            </div>
          </div>

          {/* Right Section - Login Form */}
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center bg-white">
            <div className="p-4 w-100" style={{ maxWidth: "480px" }}>
              {/* Header */}
              <div className="mb-4">
                <p className="text-muted medium mb-0">
                  Please enter your details.
                </p>
              </div>

              {/* Login Form */}
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
