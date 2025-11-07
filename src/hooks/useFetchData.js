import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { fetchData } from "../config/api";

export const useFetchData = (endpoint) => {
  const { token } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) return;

    const getData = async () => {
      try {
        const result = await fetchData(endpoint, token);
        setData(result || []);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [token, endpoint]);

  return { data, setData, token, loading, error };
};