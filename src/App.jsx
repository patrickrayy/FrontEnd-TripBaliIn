<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
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
import HistoryBooking from "./pages/userpage/history"; 
import ItineraryCreator from "./pages/userpage/ItineraryCreator";
import ItineraryPreview from "./pages/userpage/ItineraryPreview";
import AccommodationPage from "./pages/userpage/AccommodationPage.jsx";
import VillaDetailsPage from "./pages/userpage/VillaDetailsPage";
import BookingPage from "./pages/userpage/BokingPage";
import PaymentPage from "./pages/userpage/PaymentPage";
import PaymentCompleted from "./pages/userpage/PaymentCompleted";
import AdminPage from "./pages/adminpage/adminpage";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth, AuthProvider } from "./contexts/AuthContext.jsx";

const App = () => {
  const { token } = useAuth();
  const hideNavbarPaths = ['/login', '/register', '/contact'];

  return (
    <>
      {/* Navbar hanya tampil di halaman tertentu */}
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}

      <Routes>
        {/* Rute Public */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/itinerary" element={<ItineraryPage/>}/>
        <Route path="/login" element={!token ? <LoginPage /> : <Navigate to="/home" />} />
        <Route path="/register" element={!token ? <RegisterPage /> : <Navigate to="/home" />} />

        {/* Rute Terproteksi */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/history" element={<HistoryBooking />} />
          <Route path="/transportation" element={<TransportationPage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/transportation/:id" element={<DetailVehicle />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path='/aboutafter' element={<AboutAfter /> }/>
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/payment-completed" element={<PaymentCompleted />} />
          <Route path='/IteneraryAfter' element={<ItineraryAfter/>} />
          <Route path='/itinerarycreator' element={<ItineraryCreator />}/>
          <Route path='/itinerary-preview' element={<ItineraryPreview />} />
          <Route path='/accommodation' element={<AccommodationPage />} />
          <Route path='/villadetails' element={<VillaDetailsPage />} />
          <Route path='/contactafter' element={<ContactAfter />} />
        </Route>

      </Routes>
    </>
=======
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginPage from './pages/auth/LoginPage.jsx';
import RegisterPage from './pages/auth/RegisterPage.jsx';
import ProfilePage from './pages/dashboard/ProfilePage.jsx';

// Protected Route Component
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
>>>>>>> f5f7df2628560a1b982456fafbff6bfba910e946
  );
};

<<<<<<< HEAD
export default function AppWrapper() {
  return (
    <AuthProvider>
    <Router>
      <App />
    </Router>
    </AuthProvider>
  );
}
=======
export default App;
>>>>>>> f5f7df2628560a1b982456fafbff6bfba910e946
