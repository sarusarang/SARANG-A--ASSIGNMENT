import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import { Routes,Route } from 'react-router-dom';
import Dash from './Pages/Dash';

function App() {


  return (
    
    <>

    <Routes>


      <Route path='/' element={<Login/>}/>
      <Route path='/dash' element={<Dash/>}/>
      




    </Routes>
    
    
    
    
    
    </>


     
  )
}

export default App
