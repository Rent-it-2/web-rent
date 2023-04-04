import { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Login, Cadastro, Home, Perfil } from "./pages";
import { AuthProvider, AuthContext } from "./contexts/Auth";

const AppRoutes = () => {
  
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);
    
    if (loading) {
      return <div className="loading">carregando...</div>
    }
    if (!authenticated) {
      return <Navigate to="/login"/>;
    }
    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/cadastro" element={<Cadastro />} />
          <Route exact path="/perfil" element={<Perfil/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
