
import React from 'react'
import DashBoard from "./components/DashBoard";
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Header from './components/Header';

function App() {

  return (
    <>
    <Header />
    <Routes>
        <Route path='/' element={ <DashBoard />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/:id' element={ <DashBoard />} />
    </Routes>
    </>
    
  );
}

export default App;
