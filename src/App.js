import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Create a theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

// Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AccommodationListPage = lazy(() => import('./pages/AccommodationListPage'));
const AccommodationDetailPage = lazy(() => import('./pages/AccommodationDetailPage'));
const RoommateFinder = lazy(() => import('./pages/RoommateFinder'));
const RoommateProfilePage = lazy(() => import('./pages/RoommateProfilePage')); 
const LegalHelp = lazy(() => import('./pages/LegalHelp'));
const LocationIntelligence = lazy(() => import('./pages/LocationIntelligence'));
const Community = lazy(() => import('./pages/Community'));
const Offers = lazy(() => import('./pages/Offers'));
const Support = lazy(() => import('./pages/Support'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterSelectionPage = lazy(() => import('./pages/RegisterSelectionPage'));
const StudentRegisterPage = lazy(() => import('./pages/StudentRegisterPage'));
const RoomOwnerRegisterPage = lazy(() => import('./pages/RoomOwnerRegisterPage'));
const PropertyRegistrationPage = lazy(() => import('./pages/PropertyRegistrationPage'));
const RentAgreementPage = lazy(() => import('./pages/RentAgreementPage'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/accommodations" element={<AccommodationListPage />} />
              <Route path="/accommodations/:id" element={<AccommodationDetailPage />} />
              <Route path="/roommates" element={<RoommateFinder />} />
              <Route path="/roommates/:id" element={<RoommateProfilePage />} />
              <Route path="/legal-help" element={<LegalHelp />} />
              <Route path="/location" element={<LocationIntelligence />} />
              <Route path="/rent-agreement" element={<RentAgreementPage />} />
              <Route path="/community" element={<Community />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/support" element={<Support />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterSelectionPage />} />
              <Route path="/register/student" element={<StudentRegisterPage />} />
              <Route path="/register/owner" element={<RoomOwnerRegisterPage />} />
              <Route path="/register-property" element={<PropertyRegistrationPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;