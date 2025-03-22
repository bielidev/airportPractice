import { Route, Routes} from 'react-router-dom';
import {Navigation} from './components/Navigation';
import {Home} from './pages/Home';
import {Detail} from './pages/Detail';
import { CreateUpdate } from './pages/CreateUpdate';

export default function App() {
  return (
    <>
     <Navigation></Navigation>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/:id" element={<Detail />} />
      <Route path="/create" element={<CreateUpdate />} />
      <Route path="/:id/update" element={<CreateUpdate />} />
    </Routes>
    </>
  );
}