import { useCallback, useState } from "react";

export const useCreateUpdateAirport = () => {
  const [airport, setAirport] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createOrUpdateAirport = useCallback(async ({ airport, id = null }) => {
    let endpoint = `${import.meta.env.VITE_API_HOST}/api/airports`;
    let method = "POST";
    if (id) {
      endpoint = `${import.meta.env.VITE_API_HOST}/api/airports/${id}`;
      method = "PUT";
    }

    try {
      setLoading(true);
      const response = await fetch(endpoint, {
        method,
        body: JSON.stringify(airport),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.message);
        setLoading(false);
        return;
      }

      setAirport(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    createOrUpdateAirport,
    airport,
    loading,
    error,
  };
};
