import React from "react";
import './App.css'
import './global.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Home } from './components/pages/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App;
