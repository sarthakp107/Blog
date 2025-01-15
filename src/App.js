
import './App.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login.js';
import Signup from './pages/signup/Signup.js';
import Home from './pages/home/Home.js';
import Subscribe from './pages/subscirbe/Subscribe.js';

function App() {
  return (
   <div className="app">
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/subscribe' element={<Subscribe/>}/>
    </Routes>

    </BrowserRouter>
   </div>

  );
}

export default App;
