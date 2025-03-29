import { useCallback, useState } from "react";

export const useFlights = () => {
  const [departures, setDepartures] = useState([]);
  const [arrivals, setArrivals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getDepartures = useCallback(async (id) => {
    return fetch(`http://localhost:8080/api/flights?origin=${id}`);
  }, []);

  const getArrivals = useCallback(async (id) => {
    return fetch(`http://localhost:8080/api/flights?destination=${id}`);
  }, []);

  const getAllFlights = useCallback(
    async (id) => {
      setLoading(true);
      try {
        const [departures, arrivals] = await Promise.all([
          getDepartures(id),
          getArrivals(id),
        ]);
        if (!arrivals.ok || !departures.ok) {
          setError("Error getting flights");
          setLoading(false);
          return;
        }
        const departuresData = await departures.json();
        const arrivalsData = await arrivals.json();
        setDepartures(departuresData);
        setArrivals(arrivalsData);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [getArrivals, getDepartures]
  );

  return {
    getAllFlights,
    departures,
    arrivals,
    loading,
    error,
  };
};
