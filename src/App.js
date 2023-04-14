
import React from 'react'
import DashBoard from "./components/DashBoard";
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Test from './components/Test';
import Test2 from './components/Test2';

function App() {

  return (
    <>
    <Header />
    <Routes>
        <Route path='/' element={ <DashBoard />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/:id' element={ <DashBoard />} />
        <Route path='/test/' element={ <Test />} />
        <Route path='/test2/' element={ <Test2 />} />
    </Routes>
    </>
    
  );
}

export default App;
