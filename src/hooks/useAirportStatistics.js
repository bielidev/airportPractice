import { useCallback, useState } from "react";

export const useAirportStatistics = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAllStats = useCallback(async (id) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_HOST}/api/stats?airport=${id}`
      );
      const data = await response.json();
      if (!response.ok) {
        setError(data.message);
        setLoading(false);
        return;
      }

      setStats(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    getAllStats,
    stats,
    loading,
    error,
  };
};
