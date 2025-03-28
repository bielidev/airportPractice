import { useCallback, useState } from "react";

export const useFlights = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAllFlights = useCallback(async (id) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8080/api/flights?airport=${id}`
      );
      const data = await response.json();
      if (!response.ok) {
        setError(data.message);
        setLoading(false);
        return;
      }

      setFlights(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    getAllFlights,
    flights,
    loading,
    error,
  };
};
