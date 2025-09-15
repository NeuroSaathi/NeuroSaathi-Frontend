import React from 'react';
import { 
  Heart, 
  MessageSquare, 
  Calendar, 
  BookOpen, 
  Users, 
  ClipboardList,
  TrendingUp,
  Shield,
  Clock,
  Phone,
  AlertTriangle
} from 'lucide-react';

interface DashboardProps {
  userType: string;
}

const Dashboard: React.FC<DashboardProps> = ({ userType }) => {
  const studentStats = {
    sessionsCompleted: 3,
    resourcesAccessed: 12,
    assessmentScore: 'Moderate',
    nextAppointment: 'Tomorrow, 2:00 PM'
  };

  const counselorStats = {
    todayAppointments: 6,
    pendingRequests: 3,
    studentsHelped: 45,
    avgRating: 4.8
  };

  const adminStats = {
    totalStudents: 1247,
    activeUsers: 89,
    riskAlerts: 5,
    institutionScore: 85
  };

  const quickActions = [
    { id: 'chat', icon: MessageSquare, label: 'Start AI Chat', color: 'bg-blue-500', show: true },
    { id: 'booking', icon: Calendar, label: 'Book Session', color: 'bg-green-500', show: true },
    { id: 'assessment', icon: ClipboardList, label: 'Take Assessment', color: 'bg-purple-500', show: userType !== 'admin' },
    { id: 'resources', icon: BookOpen, label: 'Browse Resources', color: 'bg-orange-500', show: true },
    { id: 'peer-support', icon: Users, label: 'Peer Support', color: 'bg-pink-500', show: userType !== 'admin' },
  ];

  const emergencyContacts = [
    { name: 'Campus Counselor', number: '+91-1234-567-890', available: true },
    { name: 'Mental Health Helpline', number: '1800-123-456', available: true },
    { name: 'Emergency Services', number: '102', available: true },
  ];

  const renderStudentDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back! 👋</h2>
        <p className="text-blue-100">How are you feeling today? Your mental wellness journey matters.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Sessions Completed</p>
              <p className="text-2xl font-bold text-gray-900">{studentStats.sessionsCompleted}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Resources Accessed</p>
              <p className="text-2xl font-bold text-gray-900">{studentStats.resourcesAccessed}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 p-2 rounded-lg">
              <ClipboardList className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Wellness Score</p>
              <p className="text-lg font-bold text-gray-900">{studentStats.assessmentScore}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100">
          <div className="flex items-center space-x-3">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Next Session</p>
              <p className="text-sm font-bold text-gray-900">{studentStats.nextAppointment}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {quickActions.filter(action => action.show).map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                className={`${action.color} text-white p-4 rounded-xl hover:opacity-90 transition-opacity duration-200 flex flex-col items-center space-y-2`}
              >
                <Icon className="h-6 w-6" />
                <span className="text-sm font-medium text-center">{action.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderCounselorDashboard = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Counselor Dashboard</h2>
        <p className="text-green-100">Supporting student mental health and wellness</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Today's Sessions</p>
              <p className="text-2xl font-bold text-gray-900">{counselorStats.todayAppointments}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100">
          <div className="flex items-center space-x-3">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Pending Requests</p>
              <p className="text-2xl font-bold text-gray-900">{counselorStats.pendingRequests}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Students Helped</p>
              <p className="text-2xl font-bold text-gray-900">{counselorStats.studentsHelped}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Average Rating</p>
              <p className="text-2xl font-bold text-gray-900">{counselorStats.avgRating}/5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAdminDashboard = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Administrative Dashboard</h2>
        <p className="text-purple-100">Mental Health System Analytics & Management</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-gray-900">{adminStats.totalStudents}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Active Users</p>
              <p className="text-2xl font-bold text-gray-900">{adminStats.activeUsers}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100">
          <div className="flex items-center space-x-3">
            <div className="bg-red-100 p-2 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Risk Alerts</p>
              <p className="text-2xl font-bold text-gray-900">{adminStats.riskAlerts}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Shield className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Institution Score</p>
              <p className="text-2xl font-bold text-gray-900">{adminStats.institutionScore}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {userType === 'student' && renderStudentDashboard()}
      {userType === 'counselor' && renderCounselorDashboard()}
      {userType === 'admin' && renderAdminDashboard()}

      {/* Emergency Contacts - Show for all users except admin */}
      {userType !== 'admin' && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-red-100 mt-6">
          <div className="flex items-center space-x-2 mb-4">
            <Phone className="h-5 w-5 text-red-600" />
            <h3 className="text-lg font-semibold text-gray-900">Emergency Support</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{contact.name}</p>
                  <p className="text-sm text-red-600">{contact.number}</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${contact.available ? 'bg-green-400' : 'bg-gray-400'}`}></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;