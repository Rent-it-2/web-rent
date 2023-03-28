import { BrowserRouter } from "react-router-dom";
import { Buscar } from "./components";
import { Login, Cadastro } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className='w-screen h-screen'>
        {/* <Login/> */}
        {/* <Cadastro /> */}
        <Buscar/>
      </div>
    </BrowserRouter>
  );
};

export default App;