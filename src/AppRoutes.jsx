import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Login, Cadastro, Home } from "./pages";
import { AuthProvider } from "./contexts/Auth";

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/cadastro" element={<Cadastro />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
