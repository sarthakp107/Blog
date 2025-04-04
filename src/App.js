
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
import Footer from './components/Footer.js';
import OnlineUsers from './components/OnlineUsers.js';
import QnsSurvey from './pages/signup/QnsSurvey.js';
import Profile from './pages/Profile/Profile.js';
import { useCollection } from './hooks/useCollection.js';
import { projectFirestore } from './firebase/config.js';
import ExploreUnits from './pages/explore units/ExploreUnits.js';
import Mentorship from './pages/Mentorship/Mentorship.js';
import UnitBuddy from './pages/Unit Buddy/UnitBuddy.js';
import OOP from './Units/OOP/OOP.js';
import NetAd from './Units/Network Administration/NetAd.js';
import Itp from './Units/ITP/Itp.js';
import NetSwitch from './Units/NetworkSwitching/NetSwitch.js';




function App() {

  const { user, authIsReady } = useAuthContext();
 


  return (
    <div className="app flex flex-col min-h-screen">
      {authIsReady && <BrowserRouter>
        <Navbar />
        {/* {user && <RightSidebar/>} */}
        <div className='flex-grow'>

       
        {/* {user && <Groups />} */}
        {user && <OnlineUsers />}
        {/* <RightSidebar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/exploreUnits' element={<ExploreUnits />} />
          <Route path='/mentorship' element={<Mentorship />} />
          <Route path='/unitBuddy' element={<UnitBuddy />} />
          <Route path='/author' element={<Author />} />
          <Route path='/login' element={!user ? <Login /> : <Navigate to="/"/>} />
          <Route path='/signup' element={!user ? <Signup /> : <Navigate to="/"/>} />
          <Route path='/group' element={<Group />} />
          <Route path='/subscribe' element={<Subscribe />} />
          <Route path='/settings' element={<Settings />} />
          {<Route path='/qns' element={ <QnsSurvey />} />}

          {/* Units route*/}
          <Route path='/oop' element={<OOP/>}/> 
          <Route path='/itp' element={<Itp/>}/> 
          <Route path='/network-administration' element={<NetAd/>}/> 
          <Route path='/network-switching' element={<NetSwitch/>}/> 
          {/* <Route
  path="/qns"
  element={
    user?.surveryIsDone === false ? <QnsSurvey /> : <Navigate to="/profile" />
  }
/> */}

          <Route path='/profile' element={<Profile />} />
        </Routes>
        </div>
      <Footer />

      </BrowserRouter>}
    </div>

  );
}

export default App;
