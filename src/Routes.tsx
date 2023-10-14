// Routes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Home from './pages/Home';

export const routes = {
  home: "/",
  signIn: "/sign-in",
  signUp: "/sign-up",
  admin: "/admin",
}

function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.signUp} element={<Register />} />
      <Route path={routes.signIn} element={<Login />} />
      <Route path={routes.admin} element={<Admin />} />
    </Routes>
  );
}

export default AppRoutes;
