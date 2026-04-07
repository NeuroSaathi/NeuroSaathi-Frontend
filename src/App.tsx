import { useState } from 'react';
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

function App() {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState('student'); // student, counselor, admin

  if (!user) {
    return <Login onLogin={setUser} setUserType={setUserType} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex">
      {/* Sidebar fixed on the left */}
      <Sidebar user={user} userType={userType} onLogout={() => setUser(null)} />

      {/* Main content with left margin */}
      <main className="flex-1 ml-64 p-6">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard userType={userType} />} />
          <Route path="/chat" element={<ChatSupport />} />
          <Route path="/booking" element={<BookingSystem userType={userType} />} />
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
