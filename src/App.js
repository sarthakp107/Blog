
import './App.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login.js';
import Signup from './pages/signup/Signup.js';
import Home from './pages/home/Home.js';
import Subscribe from './pages/subscirbe/Subscribe.js';
import About from './pages/about/About.js';
import Author from './pages/author/Author.js';
import { useAuthContext } from './hooks/useAuthContext.js';
import RightSidebar from './components/RightSidebar.js';
import Groups from './components/Groups.js';
import Group from './pages/groups/Group.js';

function App() {

  const {user, authIsReady} =useAuthContext();

  return (
   <div className="app">
    {authIsReady && <BrowserRouter>
    <Navbar />
   {/* {user && <RightSidebar/>} */}
<Groups/>
   <RightSidebar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/author' element={<Author/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/group' element={<Group/>}/>
      <Route path='/subscribe' element={<Subscribe/>}/>
    </Routes>

    </BrowserRouter>}
   </div>

  );
}

export default App;
