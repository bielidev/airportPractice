import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCreateUpdateAirport } from "@/hooks/useCreateUpdateAirport";
import { useEffect } from "react";
import { useAirportDetail } from "@/hooks/useAirportDetail";

const airtportSchema = z.object({
  name: z.string().nonempty(),
  city: z.string().nonempty(),
  country: z.string().nonempty(),
  iataCode: z.string().nonempty(),
});

export const CreateUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { createOrUpdateAirport, airport, loading, error } =
    useCreateUpdateAirport();
  const {
    getAirportDetail,
    airport: airportDetail,
    loading: loadingDetail,
    error: errorDetail,
  } = useAirportDetail();

  const form = useForm({
    resolver: zodResolver(airtportSchema),
    defaultValues: {
      name: "",
      city: "",
      country: "",
      iataCode: "",
    },
  });

  const onSubmit = (values) => {
    createOrUpdateAirport({ airport: values, id });
  };

  useEffect(() => {
    if (!airportDetail.id && id) {
      getAirportDetail(id);
    }

    if (airportDetail.id) {
      form.setValue("name", airportDetail.name);
      form.setValue("city", airportDetail.city);
      form.setValue("country", airportDetail.country);
      form.setValue("iataCode", airportDetail.iataCode);
    }

    if (airport.id) {
      navigate(`/${airport.id}`);
    }
  }, [
    airportDetail,
    airportDetail.id,
    form,
    airport,
    navigate,
    getAirportDetail,
    id,
  ]);

  if (loading || loadingDetail) {
    return <div>Loading...</div>;
  }

  if (error || errorDetail) {
    return <div>Error!!</div>;
  }

  return (
    <>
      <h1 className="text-5xl font-bold tracking-tight text-gray-800 mb-6">
        {id ? "Update Form" : "Create Form"}
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 p-6 bg-white rounded-2xl shadow-md max-w-md mx-auto"
        >
          {[
            { name: "name", label: "Name", placeholder: "Enter your name" },
            { name: "city", label: "City", placeholder: "Enter your city" },
            {
              name: "country",
              label: "Country",
              placeholder: "Enter your country",
            },
            { name: "iataCode", label: "IATA", placeholder: "Enter IATA code" },
          ].map(({ name, label, placeholder }) => (
            <FormField
              key={name}
              control={form.control}
              name={name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">
                    {label}
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-full"
                      placeholder={placeholder}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          ))}
          <Button type="submit" className="w-full">
            {id ? "Update" : "Create"}
          </Button>
        </form>
      </Form>
    </>
  );
};
