import { useAirportDetail } from "@/hooks/useAirportDetail";
import { useEffect } from "react";
import { useParams } from "react-router"

export const Detail = () => {
  const {id} = useParams()
  const {getAirportDetail, airport, loading, error} = useAirportDetail();

  useEffect(() => {
    getAirportDetail(id);
  }, [getAirportDetail, id])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error!!</div>
  } 


  return (
    <>
    <div>Airport Detail</div>
    <div>{airport.name}</div>
    <div>{airport.city}</div>
    <div>{airport.country}</div>
    <div>{airport.iataCode}</div>
    </>
  )
}
