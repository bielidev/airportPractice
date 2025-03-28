import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { columns } from "@/lib/config/airports/columns";
import { useAirports } from "@/hooks/useAirports";
import { useDeleteAirport } from "@/hooks/useDeleteAirport";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Input } from "@/components/ui/input";
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
import { useFlights } from "@/hooks/useFilights";
export const Flights = () => {
  const [searchedAirport, setSearchedAirport] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedAirport, setSelectedAirport] = useState(null);
  const navigate = useNavigate();
  const { getAllAirports, airports, loading, error } = useAirports();
  const {
    getAllFlights,
    flights,
    loading: loadingFlights,
    error: errorFlights,
  } = useFlights();

  // useGetFlights

  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState([]);

  const handleSearchAirport = (value) => {};

  //   const table = useReactTable({
  //     data: airports,
  //     columns: columns.map((column) => {
  //       if (column.id !== "actions") return column;
  //       return {
  //         ...column,
  //         cell: ({ row }) => {
  //           const airport = row.original;

  //           return (
  //             <div className="flex gap-2">
  //               <Button onClick={(e) => handleEdit(e, airport.id)}>Edit</Button>
  //               <Button
  //                 variant="destructive"
  //                 onClick={(e) => handleDelete(e, airport.id)}
  //               >
  //                 Delete
  //               </Button>
  //             </div>
  //           );
  //         },
  //       };
  //     }),
  //     getCoreRowModel: getCoreRowModel(),
  //     getPaginationRowModel: getPaginationRowModel(),
  //     onSortingChange: setSorting,
  //     getSortedRowModel: getSortedRowModel(),
  //     onGlobalFilterChange: setGlobalFilter,
  //     getFilteredRowModel: getFilteredRowModel(),
  //     globalFilterFn: "includesString",
  //     state: {
  //       sorting,
  //       globalFilter,
  //     },
  //   });

  //   const handleDelete = (e, id) => {
  //     e.stopPropagation();
  //     deleteAirport(id);
  //   };

  //   const handleEdit = (e, id) => {
  //     e.stopPropagation();
  //     navigate(`/${id}/update`);
  //   };

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

      {JSON.stringify(flights)}

      {/* <section className="flex place-items-center justify-between py-4">
        <Button onClick={() => navigate("/create")}>Create Airport</Button>
        <Input
          placeholder="Search"
          value={globalFilter ?? ""}
          onChange={(event) =>
            table.setGlobalFilter(String(event.target.value))
          }
          className="max-w-sm"
        />
      </section>
      <section className="rounded-md border mt-4">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={() => navigate(`/${row.original.id}`)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>
      <section className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </section> */}
    </>
  );
};
