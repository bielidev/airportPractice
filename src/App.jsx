import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { CreateUpdate } from "./pages/CreateUpdate";
import { Sidebar } from "./components/Sidebar"; // Importa el Sidebar
import { Outlet } from "react-router-dom";

const Layout = () => (
  <div className="flex h-screen">
    <Sidebar />
    <div className="flex-1 p-6">
      <Outlet />
    </div>
  </div>
);

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/create" element={<CreateUpdate />} />
        <Route path="/:id/update" element={<CreateUpdate />} />
      </Route>
    </Routes>
  );
}
