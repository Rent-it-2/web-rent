import { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Login, Cadastro, Home, Perfil, ItemDetalhes, Filters, PerfilPublico } from "./pages";
import { AuthProvider, AuthContext } from "./contexts/Auth";
import { ItemProvider } from "./contexts/ItemContext";

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading">carregando...</div>;
    }
    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <ItemProvider>
          <Routes>
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/filtros" element={<Filters/>} />
            <Route path="/item/:id" element={<ItemDetalhes />} />
            <Route path="/locador/:id" element={<PerfilPublico/>} />
            <Route path="/perfil" element={
            // <Private>
            //   <Perfil />
            // </Private>
            <Perfil/>
            } />
          </Routes>
        </ItemProvider>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
