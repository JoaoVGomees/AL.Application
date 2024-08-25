import './App.css';
import Cadastro from './pages/SignUp';
import Home from './pages/Home'

import { Routes, BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './pages/Login';

function App() {
  return (
    <body>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Cadastro />} path='/cadastro' />
        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;
