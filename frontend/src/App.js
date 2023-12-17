import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Timeline from './components/AdminPanel/Timeline';
import Youtube from './components/AdminPanel/Youtube';
import Project from './components/AdminPanel/Project';
import user from "./data/user.json";

function App() {
  const isAuthenticated = true;

  return <Router>
    {!user && <div> Loading</div>}
    {user && user.skills && user.youtube && user.timeline && (
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Home youtubes={user?.youtube} timelines={user?.timeline} skills={user?.skills} />} />
          <Route path='/about' element={<About about={user?.about} />} />
          <Route path='/projects' element={<Projects projects={user?.projects} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/account' element={isAuthenticated ? <AdminPanel /> : <Login />} />
          <Route path='/admin/timeline' element={isAuthenticated ? <Timeline /> : <Login />} />
          <Route path='/admin/youtube' element={isAuthenticated ? <Youtube /> : <Login />} />
          <Route path='/admin/project' element={isAuthenticated ? <Project /> : <Login />} />
        </Routes>
        <Footer />
      </>
    )}
  </Router>
}

export default App;
