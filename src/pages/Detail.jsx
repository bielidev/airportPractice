import { useAirportDetail } from "@/hooks/useAirportDetail";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Plane, MapPin, Flag, Barcode } from "lucide-react";

export const Detail = () => {
  const { id } = useParams();
  const { getAirportDetail, airport, loading, error } = useAirportDetail();

  useEffect(() => {
    getAirportDetail(id);
  }, [getAirportDetail, id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-full">
        <Skeleton className="w-64 h-64 rounded-xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-full">
        <p className="text-red-500 font-semibold text-lg">Error loading airport details!</p>
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-full py-12 bg-gray-100">
      <h1 className="text-5xl font-bold tracking-tight text-gray-800 mb-6">
        ✈️ Airport Details
      </h1>
      <Card className="w-full max-w-md p-6 shadow-xl rounded-2xl bg-white border border-gray-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-900">
            {airport.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <article className="flex items-center gap-3 text-lg">
            <MapPin className="text-blue-500" />
            <span className="font-semibold">City:</span> {airport.city}
          </article>
          <article className="flex items-center gap-3 text-lg">
            <Flag className="text-green-500" />
            <span className="font-semibold">Country:</span> {airport.country}
          </article>
          <article className="flex items-center gap-3 text-lg">
            <Barcode className="text-purple-500" />
            <span className="font-semibold">IATA Code:</span> {airport.iataCode}
          </article>
        </CardContent>
      </Card>
    </section>
  );
};