import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router"
import { zodResolver } from "@hookform/resolvers/zod"
import {z} from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useCreateUpdateAirport } from "@/hooks/useCreateUpdateAirport"
import { useEffect } from "react"
import { useAirportDetail } from "@/hooks/useAirportDetail"

const airtportSchema =  z.object({
  name: z.string().nonempty(),
  city: z.string().nonempty(),
  country: z.string().nonempty(),
  iataCode: z.string().nonempty()
})


export const CreateUpdate = () => {
  const {id} = useParams() 
  const navigate = useNavigate()
  const {createOrUpdateAirport, airport, loading, error} = useCreateUpdateAirport();
  const {getAirportDetail, airport: airportDetail, loading: loadingDetail, error: errorDetail} = useAirportDetail();

  const form = useForm({
    resolver: zodResolver(airtportSchema),
    defaultValues: {
      name: '',
      city: '',
      country: '',
      iataCode: ''
    }
  })

  const onSubmit = (values) => {
    createOrUpdateAirport({airport: values, id})
  }

  useEffect(() => {
    if (!airportDetail.id && id) {
      getAirportDetail(id)
    }

    if (airportDetail.id) {
      form.setValue('name', airportDetail.name)
      form.setValue('city', airportDetail.city)
      form.setValue('country', airportDetail.country)
      form.setValue('iataCode', airportDetail.iataCode)
    }

    if (airport.id) {
      navigate(`/${airport.id}`)
    }
  }, [airportDetail,airportDetail.id, form, airport, navigate, getAirportDetail, id])

  if (loading || loadingDetail) {
    return <div>Loading...</div>
  }

  if (error || errorDetail) {
    return <div>Error!!</div>
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
      <FormField control={form.control} name="name" render={({field}) => (
        <FormItem>
          <FormLabel>Name</FormLabel>
          <FormControl>
            <Input placeholder="Name" {...field} />
          </FormControl>
        </FormItem>
      )} />
      <FormField control={form.control} name="city" render={({field}) => (
        <FormItem>
          <FormLabel>City</FormLabel>
          <FormControl>
            <Input placeholder="City" {...field} />
          </FormControl>
        </FormItem>
      )} />
      <FormField control={form.control} name="country" render={({field}) => (
        <FormItem>
          <FormLabel>Country</FormLabel>
          <FormControl>
            <Input placeholder="Country" {...field} />
          </FormControl>
        </FormItem>
      )} />
      <FormField control={form.control} name="iataCode" render={({field}) => (
        <FormItem>
          <FormLabel>IATA</FormLabel>
          <FormControl>
            <Input placeholder="IATA" {...field} />
          </FormControl>
        </FormItem>
      )} />
      <Button type="submit">{id ? 'Update' : 'Create'}</Button>
      </form>
    </Form>
  )
}
