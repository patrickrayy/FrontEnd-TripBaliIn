import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
// import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
// import LoginPage from './pages/Login';
// import RegisterPage from './pages/Register';
// import ProfilePage from './pages/Profile';
// import TransportationPage from './pages/TransportationPage';
// import AcomodationPage from './pages/AcomodationPage';
// import DestinationPage from './pages/DestinationPage';
import ItineraryPage from './pages/ItineraryPage';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<AboutPage />} />
        {/* <Route path='/home' element={<HomePage />} /> */}
        {/* <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} /> */}
        <Route path='/itinerary' element={<ItineraryPage />} />
        <Route path='/contact' element={<ContactPage />} />
        {/* <Route path='/acomodation' element={<AcomodationPage />} /> */}
        {/* <Route path='/destination' element={<DestinationPage />} /> */}
        {/* <Route path='/profile' element={<ProfilePage />} /> */}
        {/* <Route path='/transportation' element={<TransportationPage />} /> */}
      </Routes>
    </Router>

  )
}

export default App
