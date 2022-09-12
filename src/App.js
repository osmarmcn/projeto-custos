import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Contato from './paginas/Contato';
import Empresa from './paginas/Empresa';
import Home from './paginas/Home';
import Projeto from './paginas/Projeto';

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/Contato'>Contato</Link>
            </li>
            <li>
            <Link to='/Empresa'>Empresa</Link>
            </li>
            <li>
            <Link to='/Projeto'>Projeto</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Contato' element={<Contato/>}/>
          <Route path='/Empresa' element={<Empresa/>}/>
          <Route path='/Projeto' element={<Projeto/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
