import { useEffect, useState, useCallback } from "react";
import { useAuth } from "../context/AuthContext";
import { fetchData } from "../config/api";

export const useFetchData = (endpoint) => {
  const { token } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = useCallback(async () => {
    
     if (!token || !endpoint) {
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const result = await fetchData(endpoint, token);
      setData(result || []);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [endpoint, token]);

  useEffect(() => {
    getData();
  }, [getData]);
  
  return { data, setData, token, loading, error, refetch: getData };
};
