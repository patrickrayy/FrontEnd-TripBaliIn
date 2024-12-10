import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import useLocalStorageState from './hooks/useLocalStorage.js';
import { useEffect, useState } from "react";
import LandingPage from './pages/userpage/LandingPage';
import Navbar from './components/Navbar';
import HomePage from './pages/userpage/HomePage';
import AboutPage from './pages/userpage/AboutPage';
import ContactPage from './pages/userpage/ContactPage';
import LoginPage from './pages/userpage/LoginPage';
import RegisterPage from './pages/userpage/RegisterPage';
import ItineraryPage from './pages/userpage/ItineraryPage';
import DestinationPage from "./pages/userpage/DestinationPage";
import AboutAfter from "./pages/userpage/AboutAfter";
import TransportationPage from "./pages/userpage/TransportationPage";
import DetailVehicle from "./components/DetailVehicle";
import ItineraryAfter from "./pages/userpage/ItineraryAfterLog";
import ContactAfter from "./pages/userpage/ContactAfterLog";
import ProfilePage from "./pages/userpage/ProfilPage";
import SideBar from "./components/Sidebar"; 
import HistoryBooking from "./pages/userpage/history"; 
import ItineraryCreator from "./pages/userpage/ItineraryCreator";
import ItineraryPreview from "./pages/userpage/ItineraryPreview";
import AccommodationPage from "./pages/userpage/AccommodationPage.jsx";
import VillaDetailsPage from "./pages/userpage/VillaDetailsPage";
import BookingPage from "./pages/userpage/BokingPage";
import PaymentPage from "./pages/userpage/PaymentPage";
import PaymentCompleted from "./pages/userpage/PaymentCompleted";
// import { AuthProvider } from "./contexts/useAuth";
import AdminPage from "./pages/adminpage/adminpage";


function App() {
  const [token] = useLocalStorageState(null, 'authToken');
  const isToken = token !== null;
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [location]);

  const hideNavbarPaths = ['/login', '/register', '/contact'];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}
        <Routes>
          <Route path='/home' element={isToken ? <HomePage /> : <Navigate to="/" replace/>} />
          <Route path='/about' element={isToken ? <AboutPage />:<Navigate to="/aboutafter" replace/>} />
          <Route path='/home' element={ <HomePage/>} />
          <Route path='/' element={ <LandingPage/>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/itinerary' element={<ItineraryPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/destination' element={<DestinationPage />}/>
          <Route path='/aboutafter' element={<AboutAfter /> }/>
          <Route path="/transportation" element={<TransportationPage />}>
            <Route path=":id" element={<DetailVehicle />}/>
          </Route>
          <Route path='/IteneraryAfter' element={<ItineraryAfter/>} />
          <Route path='/contactafter' element={<ContactAfter/>} />
          <Route path='/profile' element={<ProfilePage />}/>
          <Route path='/history' element={<HistoryBooking />}/>
          <Route path='/Sidebar' element={<SideBar/>} />
          <Route path="/adminpage" element={<AdminPage/>}/>
          <Route path='/accommodation' element={<AccommodationPage />} />
          <Route path='/itinerarycreator' element={
              <ItineraryCreator />
          }/>
          <Route path="/itinerary-preview" element={
              <ItineraryPreview />
          }/>
          <Route path='/accommodation' element={
              <AccommodationPage />
          }/>
          <Route path='/villa-details/:id' element={
              <VillaDetailsPage />
          }/>
          <Route path="/booking" element={
              <BookingPage />
          }/>
          <Route path="/payment" element={
              <PaymentPage />
          }/>
          <Route path="/payment-completed" element={<PaymentCompleted />} />
        </Routes>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
