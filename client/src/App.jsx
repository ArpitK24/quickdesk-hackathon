import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register';
import AdminPanel from './pages/AdminPanel';
import Navbar from './components/Navbar';
import TicketList from './components/TicketList';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<AdminPanel />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        
      </Routes>
    </BrowserRouter>

  );
}

export default App;
