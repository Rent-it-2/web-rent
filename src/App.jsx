import { BrowserRouter } from "react-router-dom";
import { Login, Cadastro, Home } from "./pages";
import AppRoutes from "./AppRoutes"

const App = () => {
  return (
    // <BrowserRouter>
    //   {/* <Login/> */}
    //   {/* <Cadastro /> */}
    //   {/* <Home/> */}
    // </BrowserRouter>
    <>
      <AppRoutes/>
    </>
  );
};

export default App;