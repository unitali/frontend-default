// Routes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Register from './pages/Register';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AppRoutes;
