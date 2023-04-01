import { BrowserRouter } from "react-router-dom";
import { Login, Cadastro, Home } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Login/> */}
      {/* <Cadastro /> */}
      <Home/>
    </BrowserRouter>
  );
};

export default App;