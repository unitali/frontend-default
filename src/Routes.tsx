// Routes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Home from './pages/Home';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<Admin />} />
    </Routes>
  );
}

export default AppRoutes;
