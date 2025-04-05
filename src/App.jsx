import { Route, Routes } from "react-router-dom";
import { Airports } from "./pages/Airports";
import { Detail } from "./pages/Detail";
import { CreateUpdate } from "./pages/CreateUpdate";
import { Sidebar } from "./components/Sidebar";
import { FlightBooking } from "./pages/FightBooking";
import { Flights } from "./pages/Flights";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/airports" element={<Airports />} />
          <Route path="/airports/create" element={<CreateUpdate />} />
          <Route path="/airports/:id" element={<Detail />} />
          <Route path="/airports/:id/update" element={<CreateUpdate />} />
          <Route path="/tickets" element={<FlightBooking />} />
          <Route path="/flights" element={<Flights />} />
        </Routes>
      </div>
    </div>
  );
}
