import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LandingPage from './pages/userpage/LandingPage.jsx';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/userpage/HomePage.jsx';
import AboutPage from './pages/userpage/AboutPage.jsx';
import ContactPage from './pages/userpage/ContactPage.jsx';
import LoginPage from './pages/userpage/LoginPage.jsx';
import RegisterPage from './pages/userpage/RegisterPage.jsx';
import ItineraryPage from './pages/userpage/ItineraryPage.jsx';
import DestinationPage from "./pages/userpage/DestinationPage.jsx";
import AboutAfter from "./pages/userpage/AboutAfter.jsx";
import TransportationPage from "./pages/userpage/TransportationPage.jsx";
import DetailVehicle from "./components/DetailVehicle";
import ItineraryAfter from "./pages/userpage/ItineraryAfterLog.jsx";
import ContactAfter from "./pages/userpage/ContactAfterLog.jsx";
import ProfilePage from "./pages/userpage/ProfilPage.jsx";
import HistoryBooking from "./pages/userpage/history.jsx"; 
import ItineraryCreator from "./pages/userpage/ItineraryCreator.jsx";
import ItineraryPreview from "./pages/userpage/ItineraryPreview.jsx";
import AccommodationPage from "./pages/userpage/AccommodationPage.jsx";
import VillaDetailsPage from "./pages/userpage/VillaDetailsPage.jsx";
import BookingPage from "./pages/userpage/BokingPage.jsx";
import PaymentPage from "./pages/userpage/PaymentPage.jsx";
import PaymentCompleted from "./pages/userpage/PaymentCompleted.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth, AuthProvider } from "./contexts/AuthContext.jsx";
import AdminPage from "./pages/adminpage/adminPage.jsx"

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
  );
};

export default function AppWrapper() {
  return (
    <AuthProvider>
    <Router>
      <App />
    </Router>
    </AuthProvider>
  );
}