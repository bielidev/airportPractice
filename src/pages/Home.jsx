import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAirports } from "@/hooks/useAirports";
import { useDeleteAirport } from "@/hooks/useDeleteAirport";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();
  const {getAllAirports, airports, loading, error} = useAirports();
  const {deleteAirport, loading: loadingDelete, error: deleteError, deleted} = useDeleteAirport();


  const handleDelete = (e, id) => {
    e.stopPropagation();
    deleteAirport(id);
  }

  const handleEdit = (e, id) => {
    e.stopPropagation();
    navigate(`/${id}/update`);
  }


  useEffect(() => {
    getAllAirports();
  }
  ,[getAllAirports, deleted])

  if (loading || loadingDelete) {
    return <div>Loading...</div>
  }

  if (error || deleteError) {
    return <div>Error!!</div>
  }

  return (
    <>
    <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl text-al text-center">Our Airports</h1>
    <Button onClick={() => navigate('/create')}>Create</Button>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>City</TableHead>
          <TableHead>Country</TableHead>
          <TableHead>IATA</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {airports.map((airport) => (
          <TableRow key={airport.id} onClick={() => navigate(`/${airport.id}`)}>
            <TableCell>{airport.id}</TableCell>
            <TableCell>{airport.name}</TableCell>
            <TableCell>{airport.city}</TableCell>
            <TableCell>{airport.country}</TableCell>
            <TableCell>{airport.iataCode}</TableCell>
            <TableCell>
              <Button onClick={(e) => handleEdit(e, airport.id)}>Edit</Button>
              <Button variant="destructive" onClick={(e) => handleDelete(e, airport.id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </>
  )
}
