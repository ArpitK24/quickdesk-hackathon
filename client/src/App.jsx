import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register';
import AdminPanel from './pages/AdminPanel';
import Navbar from './components/Navbar';
import TicketList from './components/TicketList';
import Dashboard from './pages/Dashboard';

// Helper component to conditionally render Navbar
function Layout({ children }) {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/dashboard" && <Navbar />}
      {children}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<AdminPanel />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
        </Routes>
      </Layout>
    </BrowserRouter>
   
  );
}

export default App;
