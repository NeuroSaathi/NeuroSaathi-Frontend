import { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ChatSupport from './components/ChatSupport';
import BookingSystem from './components/BookingSystem';
import ResourceHub from './components/ResourceHub';
import PeerSupport from './components/PeerSupport';
import Assessment from './components/Assessment';
import AdminPanel from './components/AdminPanel';
import CareerGuidance from './components/CareerGuidance';
import MoodTracker from './components/MoodTracker';
import StreakBuilder from './components/StreakBuilder';
import Login from './components/Login';
import Register from './components/Register';

interface AuthUser {
  role: string;
  instituteID?: string;
  [key: string]: unknown;
}

function App() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [userType, setUserType] = useState('student'); // student, counselor, admin

  // Check for existing token on app load
  useEffect(() => {
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');

    if (token && savedUser) {
      const userData: AuthUser = JSON.parse(savedUser);
      setUser(userData);
      setUserType(userData.role);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setUserType('student');
  };

  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<Login onLogin={setUser} setUserType={setUserType} />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex">
      {/* Sidebar fixed on the left */}
      <Sidebar user={user} userType={userType} onLogout={handleLogout} />

      {/* Main content with left margin */}
      <main className="flex-1 ml-64 p-6">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard userType={userType} />} />
          <Route path="/chat" element={<ChatSupport />} />
          <Route path="/booking" element={<BookingSystem userType={userType} user={user} />} />
          <Route path="/resources" element={<ResourceHub />} />
          <Route path="/peer-support" element={<PeerSupport userType={userType} />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/career" element={<CareerGuidance />} />
          <Route path="/mood" element={<MoodTracker />} />
          <Route path="/streaks" element={<StreakBuilder />} />
          <Route
            path="/admin"
            element={
              userType === 'admin' ? <AdminPanel /> : <Navigate to="/dashboard" replace />
            }
          />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
