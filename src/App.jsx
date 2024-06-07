import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import { Routes,Route } from 'react-router-dom';

function App() {


  return (
    
    <>

    <Routes>


      <Route path='/' element={<Login/>}/>




    </Routes>
    
    
    
    
    
    </>


     
  )
}

export default App
