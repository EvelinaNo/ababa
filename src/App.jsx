import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Movies } from './components/Movies';
import { Home } from './components/Home';
import Navbar from './components/NavBar';
import { Login } from './components/Login';
import { Authentication } from './components/Authentication';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/movies"
          element={
            <Authentication>
              <Movies />
            </Authentication>
          }
        />
      </Routes>
    </>
  );
}

export default App;
