
import { Route, Routes } from 'react-router-dom';
import { routeWeb } from "./services/pathRoutes"
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import Admin from './pages/Admin';
import Home from './pages/Home';
import { Private } from './routes/Private';

function AppRoutes() {
  return (
    <Routes>
      <Route path={routeWeb.home} element={<Home />} />
      <Route path={routeWeb.signUp} element={<SignUp />} />
      <Route path={routeWeb.signIn} element={<SignIn />} />
      <Route path={routeWeb.admin} element={<Private><Admin /></Private>} />
    </Routes>
  );
}

export default AppRoutes;
