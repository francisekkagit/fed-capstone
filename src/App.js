import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Layout from './Layout';
import Home from './Home';
import TableReservation from './TableReservation';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path='/table-reservation' element={<TableReservation/>} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
