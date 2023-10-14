
import { Route, Routes } from 'react-router-dom';
import { routesWeb } from "./services/routes"
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import Admin from './pages/Admin';
import Home from './pages/Home';

function AppRoutes() {
  return (
    <Routes>
      <Route path={routesWeb.home} element={<Home />} />
      <Route path={routesWeb.signUp} element={<SignUp />} />
      <Route path={routesWeb.signIn} element={<SignIn />} />
      <Route path={routesWeb.admin} element={<Admin />} />
    </Routes>
  );
}

export default AppRoutes;
