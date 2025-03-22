import { useCallback, useState } from 'react';

export const useAirports = () => {
    const [airports, setAirports] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const getAllAirports = useCallback(async () => {
        try {
          const response = await fetch('http://localhost:8080/api/airports');
          const data = await response.json();
            if (!response.ok) {
                setError(data.message);
                setLoading(false);
                return;
            }
    
            setAirports(data);
            setLoading(false);
        } catch (error) {
            console.log(error)
          setError(error);
        } finally {
          setLoading(false);
        }
      }, []);



    return {
      getAllAirports,
        airports,
        loading,
        error
    }

}