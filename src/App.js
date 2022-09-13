import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Contato from './paginas/Contato';
import Empresa from './paginas/Empresa';
import Home from './paginas/Home';
import Projeto from './paginas/Projeto';
import Container from './componentes/Container';
import Menu from './componentes/Inicial/Menu';
import Footer from './componentes/Inicial/Footer';
import NovoProjeto from './paginas/NovoProjeto';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu/>
        <Container customClass='minheight'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Contato' element={<Contato/>}/>
              <Route path='/Empresa' element={<Empresa/>}/>
              <Route path='/Projeto' element={<Projeto/>}/>
              <Route path='/NovoProjeto' element={<NovoProjeto/>}/>
              
            </Routes>
        </Container>
        <Footer/>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
