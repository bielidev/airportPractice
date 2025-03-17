import { Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './pages/Home';
import Map from './pages/Map';
import Flights from './pages/Flights';

export default function App() {
  return (
    <ThemeProvider storageKey="vite-ui-theme">
     <Navigation></Navigation>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/weather' element={<Weather />} />
      <Route path='/map' element={<Map />} />
      <Route path='/flights' element={<Flights />} />
   
    </Routes>
    </ThemeProvider>
  );
}