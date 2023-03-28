import { BrowserRouter } from "react-router-dom";
import { Login, Cadastro } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className='w-screen h-screen'>
        {/* <Login/> */}
        <Cadastro />
      </div>
    </BrowserRouter>
  );
};

export default App;