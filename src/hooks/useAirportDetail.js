import { useCallback, useState } from 'react';

export const useAirportDetail = () => {
    const [airport, setAirport] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const getAirportDetail = useCallback(async (id) => {
        setLoading(true);
        try {
          const response = await fetch(`http://localhost:8080/api/airports/${id}`);
          const data = await response.json();
            if (!response.ok) {
                setError(data.message);
                setLoading(false);
                return;
            }
    
            setAirport(data);
            setLoading(false);
        } catch (error) {
            console.log(error)
          setError(error);
        } finally {
          setLoading(false);
        }
      }, []);



    return {
      getAirportDetail,
        airport,
        loading,
        error
    }

}