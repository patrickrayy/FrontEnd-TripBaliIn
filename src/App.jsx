import { BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import { useState } from "react";
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
// import ProfilePage from './pages/Profile';
// import TransportationPage from './pages/TransportationPage';
// import AcomodationPage from './pages/AcomodationPage';
// import DestinationPage from './pages/DestinationPage';
import ItineraryPage from './pages/ItineraryPage';

function App() {
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Paths where Navbar should not be displayed
  const hideNavbarPaths = ['/login', '/register', '/contact'];
  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/itinerary' element={<ItineraryPage />} />
        <Route path='/contact' element={<ContactPage />} />
        {/* <Route path='/acomodation' element={<AcomodationPage />} /> */}
        {/* <Route path='/destination' element={<DestinationPage />} /> */}
        {/* <Route path='/profile' element={<ProfilePage />} /> */}
        {/* <Route path='/transportation' element={<TransportationPage />} /> */}
      </Routes>
    
    </>


  )
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
