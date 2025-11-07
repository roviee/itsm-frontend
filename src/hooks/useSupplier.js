import { API_BASE_URL, API_GET } from "../config/api";
export const fetchSuppliers = async (token) => { 
    try {
        const endpoint = `${API_BASE_URL}/api/v1/suppliers`;
        const response = await fetch(endpoint, API_GET(token)); 
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (err) {
        console.error("Fetch error:", err);
    } 
};