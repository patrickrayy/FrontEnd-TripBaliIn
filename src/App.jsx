import { BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
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
import AccommodationPage from "./pages/userpage/AcomodationPage";
import VillaDetailsPage from "./pages/userpage/VillaDetailsPage";
import BookingPage from "./pages/userpage/BokingPage";
import PaymentPage from "./pages/userpage/PaymentPage";
import PaymentCompleted from "./pages/userpage/PaymentCompleted";


function ProtectedRoute({element}){
  const isLoggedIn = localStorage.getItem('authToken');
  return isLoggedIn ? element : <Navigate to="/login"/>;
}

function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const hideNavbarPaths = ['/login', '/register', '/contact'];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/home' element={<ProtectedRoute element={<HomePage />} />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/itinerary' element={<ItineraryPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/destination' element={<ProtectedRoute element={<DestinationPage />}/>}/>
        <Route path='/aboutafter' element={<AboutAfter />} />
        <Route path="/transportation" element={<ProtectedRoute element={<TransportationPage />}/>}>
          <Route path=":id" element={<DetailVehicle />} />
        </Route>
        <Route path='/IteneraryAfter' element={<ItineraryAfter/>} />
        <Route path='/contactafter' element={<ContactAfter/>} />
        <Route path='/profile' element={<ProtectedRoute element={<ProfilePage />} />} />
        <Route path='/history' element={<ProtectedRoute element={<HistoryBooking />}/>}/>
        <Route path='/Sidebar' element={<SideBar/>} />
        
        {/* <Route path='/acomodation' element={<AcomodationPage />} /> */}
        <Route path='/itinerarycreator' element={<ProtectedRoute element={<ItineraryCreator />}/>}/>
        <Route path="/itinerary-preview" element={<ProtectedRoute element={<ItineraryPreview />}/>}/>
        <Route path='/accommodation' element={<ProtectedRoute element={<AccommodationPage />}/>}/>
        <Route path='/villa-details/:id' element={<ProtectedRoute element={<VillaDetailsPage />}/>}/>
        <Route path="/booking" element={<ProtectedRoute element={<BookingPage />}/>}/>
        <Route path="/payment" element= {<ProtectedRoute element={<PaymentPage />}/>}/>
        <Route path="/payment-completed" element={<PaymentCompleted />} />
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
