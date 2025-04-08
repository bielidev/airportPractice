import { useCallback, useState } from "react";

export const useAirports = () => {
  const [airports, setAirports] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAllAirports = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_HOST}/api/airports`
      );
      const data = await response.json();
      if (!response.ok) {
        setError(data.message);
        setLoading(false);
        return;
      }

      setAirports(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    getAllAirports,
    airports,
    loading,
    error,
  };
};
