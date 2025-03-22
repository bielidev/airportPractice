import { Route, Routes} from 'react-router-dom';
import {Navigation} from './components/Navigation';
import {Home} from './pages/Home';
import {Map} from './pages/Map';
import {Flights} from './pages/Flights';

export default function App() {
  return (
    <>
     <Navigation></Navigation>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/map' element={<Map />} />
      <Route path='/flights' element={<Flights />} />
    </Routes>
    </>
  );
}