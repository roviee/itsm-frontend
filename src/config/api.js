export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const TOKEN = sessionStorage.getItem('accessToken');

export const API_GET = (token) => ({
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export const fetchData = async (endpoint, token) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, API_GET(token));
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const result = await response.json();
    return result.data;
  } catch (err) {
    console.error("Fetch error:", err);
    return [];
  }
};

export const API_POST = (token) => ({
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
  },
});