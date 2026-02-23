import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import SportTutorial from './pages/SportTutorial';
import Quiz from './pages/Quiz';
import Leaderboard from './pages/Leaderboard';
import GoalTracker from './pages/GoalTracker';
import GrowthGarden from './pages/GrowthGarden/GrowthGarden';
import './styles/index.css';

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <div className="app">
              <Navbar />
              <main className="main-content">
                <Home />
              </main>
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/sport/:sportId"
        element={
          <ProtectedRoute>
            <div className="app">
              <Navbar />
              <main className="main-content">
                <SportTutorial />
              </main>
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/quiz"
        element={
          <ProtectedRoute>
            <div className="app">
              <Navbar />
              <main className="main-content">
                <Quiz />
              </main>
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/leaderboard"
        element={
          <ProtectedRoute>
            <div className="app">
              <Navbar />
              <main className="main-content">
                <Leaderboard />
              </main>
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/goals"
        element={
          <ProtectedRoute>
            <div className="app">
              <Navbar />
              <main className="main-content">
                <GoalTracker />
              </main>
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/grow"
        element={
          <ProtectedRoute>
            <div className="app">
              <Navbar />
              <main className="main-content">
                <GrowthGarden />
              </main>
            </div>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <Router basename="/sportlearning">
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
