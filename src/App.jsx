import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { CreateUpdate } from "./pages/CreateUpdate";
import { Sidebar } from "./components/Sidebar"; 
import { FlightBooking } from "./pages/FightBooking";

export default function App() {
  return (
    <div className="flex h-screen">
    <Sidebar />
    <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="/create" element={<CreateUpdate />} />
          <Route path="/:id/update" element={<CreateUpdate />} />
          <Route path="/flightBooking" element={<FlightBooking />} />
        </Routes>  
    </div>
  </div>
    
  );
}
