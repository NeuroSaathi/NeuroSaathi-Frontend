import React, { useState } from 'react';
import { Heart, Lock, User, Shield } from 'lucide-react';

interface LoginProps {
  onLogin: (user: any) => void;
  setUserType: (type: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, setUserType }) => {
  const [selectedUserType, setSelectedUserType] = useState('student');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    institutionId: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock login - in real implementation, this would authenticate with backend
    const user = {
      id: Math.random().toString(36),
      name: selectedUserType === 'student' ? 'Yash' : 
            selectedUserType === 'counselor' ? 'Dr. Sarah Khan' : 'Admin User',
      email: formData.email,
      type: selectedUserType
    };
    
    setUserType(selectedUserType);
    onLogin(user);
  };

  const userTypes = [
    { id: 'student', label: 'Student', icon: User, description: 'Access mental health support and resources' },
    { id: 'counselor', label: 'Counselor', icon: Heart, description: 'Provide professional mental health services' },
    { id: 'admin', label: 'Administrator', icon: Shield, description: 'Manage system and view analytics' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6 text-center">
          <div className="flex justify-center mb-4">
            <Heart className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">NeuroSaathi Portal</h1>
          <p className="text-blue-100 text-sm">Government of Jammu & Kashmir</p>
          <p className="text-blue-100 text-sm">Digital Mental Health Support System</p>
        </div>

        <div className="p-6">
          {/* User Type Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Select Your Role
            </label>
            <div className="grid grid-cols-1 gap-2">
              {userTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedUserType(type.id)}
                    className={`flex items-start space-x-3 p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                      selectedUserType === type.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <Icon className={`h-5 w-5 mt-0.5 ${
                      selectedUserType === type.id ? 'text-blue-600' : 'text-gray-400'
                    }`} />
                    <div className="flex-1">
                      <div className={`font-medium ${
                        selectedUserType === type.id ? 'text-blue-900' : 'text-gray-900'
                      }`}>
                        {type.label}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {type.description}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email / Student ID
              </label>
              <input
                type="text"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email or student ID"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Institution ID
              </label>
              <input
                type="text"
                required
                value={formData.institutionId}
                onChange={(e) => setFormData({...formData, institutionId: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your institution code"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Lock className="h-4 w-4" />
              <span>Sign In Securely</span>
            </button>
          </form>

          <div className="mt-6 text-center">
            <div className="text-xs text-gray-500">
              <div className="flex items-center justify-center space-x-1 mb-2">
                <Shield className="h-3 w-3" />
                <span>Your privacy and confidentiality are protected</span>
              </div>
              <p>For demo: Use any email/password combination</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;