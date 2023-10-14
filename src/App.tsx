// App.tsx
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from "./contexts/AuthContext"
import AppRoutes from './Routes';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Router>
          <AppRoutes />
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
