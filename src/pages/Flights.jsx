import { Button } from "@/components/ui/button";
import { useAirports } from "@/hooks/useAirports";
import { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { useFlights } from "@/hooks/useFlights";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export const Flights = () => {
  const [searchedAirport, setSearchedAirport] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedAirport, setSelectedAirport] = useState(null);
  const { getAllAirports, airports, loading, error } = useAirports();
  const {
    getAllFlights,
    arrivals,
    departures,
    loading: loadingFlights,
    error: errorFlights,
  } = useFlights();

  useEffect(() => {
    if (!selectedAirport && (!airports || airports.length === 0)) {
      getAllAirports();
    }

    if (selectedAirport) {
      getAllFlights(selectedAirport);
    }
  }, [getAllAirports, getAllFlights, selectedAirport, airports]);

  if (loading || loadingFlights) {
    return <div>Loading...</div>;
  }

  if (error || errorFlights) {
    return <div>Error!!</div>;
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleTimeString();
  };

  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl text-al text-center">
        Flights
      </h1>

      <section>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              disabled={loadingFlights}
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {searchedAirport
                ? airports
                    .map((airport) => ({
                      label: airport.name,
                      value: airport.id,
                    }))
                    .find((airport) => airport.label === searchedAirport)?.label
                : "Select airport..."}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search airport..." className="h-9" />
              <CommandList>
                <CommandEmpty>No airport found.</CommandEmpty>
                <CommandGroup>
                  {airports.map((airport) => (
                    <CommandItem
                      key={airport.id}
                      value={airport.value}
                      onSelect={(currentValue) => {
                        setSearchedAirport(
                          currentValue === searchedAirport ? "" : currentValue
                        );
                        setSelectedAirport(airport.id);
                        setOpen(false);
                      }}
                    >
                      {airport.name}
                      <Check
                        className={cn(
                          "ml-auto",
                          searchedAirport === airport.name
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </section>

      <section className="flex w-full gap-4">
        <section className="w-full">
          <h2 className="text-2xl my-2">Departures</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Flight Number</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Departure Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {departures.map((departure) => (
                <TableRow key={departure.id}>
                  <TableCell>{departure.flightNumber}</TableCell>
                  <TableCell>{departure.destination.name}</TableCell>
                  <TableCell>{formatDate(departure.departureTime)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
        <section className="w-full">
          <h2 className="text-2xl my-2">Arrivals</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Flight Number</TableHead>
                <TableHead>Origin</TableHead>
                <TableHead>Arrival Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {arrivals.map((arrival) => (
                <TableRow key={arrival.id}>
                  <TableCell>{arrival.flightNumber}</TableCell>
                  <TableCell>{arrival.origin.name}</TableCell>
                  <TableCell>{formatDate(arrival.arrivalTime)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      </section>
    </>
  );
};
