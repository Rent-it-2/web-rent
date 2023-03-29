import { BrowserRouter } from "react-router-dom";
import { Buscar, Footer, Header } from "./components";
import { Login, Cadastro } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className=''>
        <Header/>
        <main className="pt-36 pb-28">
          <Buscar/>
          {/* <Login/> */}
          {/* <Cadastro /> */}
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;