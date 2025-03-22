import { useCallback, useState } from 'react';

export const useDeleteAirport = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [deleted, setDeleted] = useState(false);


    const deleteAirport = useCallback(async (id) => {
        try {
            setLoading(true);
          const response = await fetch(`http://localhost:8080/api/airports/${id}`, {method: 'DELETE'});
            if (!response.ok) {
                setError("Error deleting airport");
                setLoading(false);
                return;
            }
            setDeleted(true);
            setLoading(false);
        } catch (error) {
            console.log(error)
          setError(error);
        } finally {
          setLoading(false);
        }
      }, []);



    return {
      deleteAirport,
        loading,
        error,
        deleted
    }

}