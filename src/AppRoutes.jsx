import { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Login, Cadastro, Home, Perfil, ItemDetalhes } from "./pages";
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
    // <Router>
    //   <AuthProvider>
    //     <Routes>
    //       <Route exact path="/" element={<Home/>}/>

    //       <Route path="/item/:id" component={<ItemProvider><ItemDetalhes/></ItemProvider>} />

    //       <Route exact path="/login" element={<Login/>} />
    //       <Route exact path="/cadastro" element={<Cadastro />} />
    //       <Route exact path="/perfil" element={<Private><Perfil/></Private>}/>
    //     </Routes>
    //   </AuthProvider>
    // </Router>

    <Router>
      <AuthProvider>
        <ItemProvider>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/perfil" element={<Private><Perfil /></Private>} />
            <Route path="/item/:id" element={<ItemProvider><ItemDetalhes /></ItemProvider>} />
          </Routes>
        </ItemProvider>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
