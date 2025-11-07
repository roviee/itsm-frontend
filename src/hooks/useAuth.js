
import { API_BASE_URL } from "../config/api";

export const login = async (email, password) => {
   try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
 
    if (!response.ok) {
      const errorData = await response.json();
      throw { status: errorData.status, description: errorData.description || "Login failed" };
    }

    const result  = await response.json();
    return { ok: true, ...result };

  } catch (err) {
    // console.error("Login error:", error);
    return { ok: false, status: err.status, description: err.description };
  }
}
