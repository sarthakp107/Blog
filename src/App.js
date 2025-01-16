
import './App.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter, Navigate } from 'react-router-dom';
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
import Settings from './pages/settings/Settings.js';

function App() {

  const { user, authIsReady } = useAuthContext();

  return (
    <div className="app">
      {authIsReady && <BrowserRouter>
        <Navbar />
        {/* {user && <RightSidebar/>} */}
        {user && <Groups />}
        <RightSidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/author' element={<Author />} />
          <Route path='/login' element={!user ? <Login /> : <Navigate to="/"/>} />
          <Route path='/signup' element={!user ? <Signup /> : <Navigate to="/"/>} />
          <Route path='/group' element={<Group />} />
          <Route path='/subscribe' element={<Subscribe />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>

      </BrowserRouter>}
    </div>

  );
}

export default App;
