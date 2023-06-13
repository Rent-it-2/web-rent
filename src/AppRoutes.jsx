import { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {
  Login,
  Cadastro,
  Home,
  Perfil,
  ItemDetalhes,
  Filters,
  PerfilPublico,
  Pagamentos,
} from "./pages";
import { AuthProvider, AuthContext } from "./contexts/Auth";
import { ItemProvider } from "./contexts/ItemContext";
import {
  MeusDados,
  Cartoes,
  Favoritos,
  ItensAnunciados,
  Transacoes,
  Chat,
  Header,
} from "./components/index";
import { FilterContext, FilterProvider } from "./contexts/FilterContext";

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

  const Pesquisa = ({ children }) => {
    const { itemNome, itemCategoria, itemList, buscar } =
      useContext(FilterContext);
    if (!itemNome) {
      return <Navigate to="/" />;
    }
    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <FilterProvider>
          <ItemProvider>
            <Routes>
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route exact path="/" element={<Home />} />
              <Route
                path="/filtros"
                element={
                  <Pesquisa>
                    <Filters />
                  </Pesquisa>
                }
              />
              <Route path="/item/:id" element={<ItemDetalhes />} />
              <Route path="/locador/:id" element={<PerfilPublico />} />
              <Route
                path="item/alugar/:id"
                element={
                  <Private>
                    <Pagamentos />
                  </Private>
                }
              />
              <Route
                path="/perfil"
                element={
                  <Private>
                    <Perfil />
                  </Private>
                }
              >
                <Route path="meus-dados" element={<MeusDados />} />
                <Route path="favoritos" element={<Favoritos />} />
                <Route path="meus-itens" element={<ItensAnunciados />} />
                <Route path="transacoes" element={<Transacoes />} />
                <Route path="cartoes" element={<Cartoes />} />
                <Route path="favoritos" element={<Favoritos />} />
                <Route path="chat" element={<Chat />} />
              </Route>
            </Routes>
          </ItemProvider>
        </FilterProvider>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
