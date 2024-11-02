import React from "react";
import './App.css'
import './global.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import  { Navbar } from './components/Navbar'
import { Home } from './components/pages/Home'
import { Login } from './components/pages/Login'
import { Community } from './components/pages/Community'
import { Upload } from './components/pages/Upload'

function App() {
  return (
    <div>
      <Routes>
      < Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/community" element={<Community/>}></Route>
        <Route path="/upload" element={<Upload />}></Route>
      </Routes>
    </div>
  )
}

export default App;
