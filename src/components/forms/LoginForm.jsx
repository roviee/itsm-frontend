import React, { useEffect, useState } from "react";
import { login } from "../../hooks/useAuth";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import LoaderScreen from "./LoadingScreen";
import { jwtDecode } from "jwt-decode";

const LoginForm = () => {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const [authForm, setAuthForm] = useState({
    email: "",
    password: "",
  });

  const { login: authLogin } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthForm((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Clear API error when user makes changes
    if (apiError) {
      setApiError("");
    }
  };
  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!authForm.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(authForm.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!authForm.password) {
      newErrors.password = "Password is required";
    } else if (authForm.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setApiError("");
    // Validate form
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    try {
      const auth = await login(authForm.email, authForm.password);
      // console.log("Auth response:", auth);
      if (!auth.ok) {
        // Handle specific error codes
        switch (auth.status) {
          case 401:
            setApiError(auth.description);
            break;
          case 404:
            setApiError(auth.message);
            break;
          default:
            setApiError(data.message || "Login failed. Please try again.");
        }
        return;
      }

      const token = auth.token;
      authLogin(token);
      const decoded = jwtDecode(token);

      switch (decoded.role) {
        case "ADMIN":
          navigate("/admin/dashboard");
          break;
        case "SUPPORT_STAFF":
          navigate("/staff/dashboard");
          break;
        default:
          navigate("/portal");
      }
    } catch (error) {
      if (error.name === "TypeError" && error.message.includes("fetch")) {
        setApiError(
          "Unable to connect to server. Please check your internet connection."
        );
      } else {
        setApiError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {isLoading && <LoaderScreen />}
      {apiError && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <div className="d-flex align-items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="me-2 flex-shrink-0"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
            <span>{apiError}</span>
          </div>
          <button
            type="button"
            className="btn-close"
            onClick={() => setApiError("")}
            aria-label="Close"
          ></button>
        </div>
      )}
      <form onSubmit={handleLogin}>
        <div className="row gy-3">
          {/* Email Field */}
          <div className="col-12">
            <label htmlFor="email" className="form-label fw-semibold">
              Email <span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-muted"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </span>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-control border-start-0 ${
                  errors.email ? "is-invalid" : ""
                }`}
                value={authForm.email}
                onChange={handleChange}
                placeholder="name@example.com"
                autoComplete="email"
                disabled={isLoading}
              />
              {errors.email && (
                <div className="invalid-feedback d-block">{errors.email}</div>
              )}
            </div>
          </div>

          {/* Password Field */}
          <div className="col-12">
            <label htmlFor="password" className="form-label fw-semibold">
              Password <span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-muted"
                >
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                </svg>
              </span>
              <input
                type="password"
                id="password"
                name="password"
                className={`form-control border-start-0 ${
                  errors.password ? "is-invalid" : ""
                }`}
                value={authForm.password}
                onChange={handleChange}
                placeholder="Password"
                autoComplete="current-password"
                disabled={isLoading}
              />
            </div>
          </div>
          {errors.password && (
            <div className="invalid-feedback d-block">{errors.password}</div>
          )}
          
          {/* Remember Me & Forgot Password */}
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="remember"
                />
                <label className="form-check-label small" htmlFor="remember">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-decoration-none small fw-semibold">
                Forgot password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-12">
            <div className="d-grid">
              <button
                className="btn btn-sn-primary py-2 fw-semibold"
                type="submit"
                disabled={isLoading}
              >
                Log In
              </button>
            </div>
          </div>

          {/* Support Link */}
          <div className="col-12">
            <p className="text-center text-muted small mb-0">
              Need help?{" "}
              <a href="#" className="text-decoration-none fw-semibold">
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </form>
    </>
  );
};
export default LoginForm;
