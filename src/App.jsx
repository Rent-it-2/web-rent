import { BrowserRouter } from "react-router-dom";
import { Buscar, Footer, Header } from "./components";
import { Login, Cadastro } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className='w-screen h-screen'>
        <Header/>
        <Buscar/>
        {/* <Login/> */}
        {/* <Cadastro /> */}
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;