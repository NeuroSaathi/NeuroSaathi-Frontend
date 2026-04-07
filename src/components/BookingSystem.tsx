import React, { useState } from 'react';
import { Calendar, Clock, User, MapPin, Video, Phone, MessageSquare, CheckCircle } from 'lucide-react';

interface BookingSystemProps {
  userType: string;
}

const BookingSystem: React.FC<BookingSystemProps> = ({ userType }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedCounselor, setSelectedCounselor] = useState('');
  const [sessionType, setSessionType] = useState('in-person');
  const [reason, setReason] = useState('');
  const [urgency, setUrgency] = useState('normal');

  const counselors = [
    {
      id: '1',
      name: 'Dr. Priya Sharma',
      specialization: 'Anxiety & Depression',
      languages: ['Hindi', 'English', 'Urdu'],
      rating: 4.9,
      experience: '8 years',
      available: true,
      nextSlot: '2:00 PM Today'
    },
    {
      id: '2',
      name: 'Dr. Rajesh Kumar',
      specialization: 'Academic Stress & Career Counseling',
      languages: ['Hindi', 'English', 'Punjabi'],
      rating: 4.7,
      experience: '12 years',
      available: true,
      nextSlot: '4:00 PM Today'
    },
    {
      id: '3',
      name: 'Dr. Fatima Ali',
      specialization: 'Trauma & PTSD',
      languages: ['Urdu', 'English', 'Hindi'],
      rating: 4.8,
      experience: '6 years',
      available: false,
      nextSlot: 'Tomorrow 10:00 AM'
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const sessionTypes = [
    { id: 'in-person', label: 'In-Person', icon: User, description: 'Face-to-face session on campus' },
    { id: 'video', label: 'Video Call', icon: Video, description: 'Online video consultation' },
    { id: 'phone', label: 'Phone Call', icon: Phone, description: 'Audio-only consultation' },
    { id: 'chat', label: 'Text Chat', icon: MessageSquare, description: 'Secure text-based session' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    alert('Booking request submitted successfully! You will receive a confirmation shortly.');
  };

  if (userType === 'counselor') {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Session Management</h2>
          <p className="text-gray-600">Manage your counseling sessions and availability</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Today's Schedule */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Schedule</h3>
            <div className="space-y-4">
              {[
                { time: '10:00 AM', student: 'Anonymous Student #1247', type: 'Video Call', urgent: false },
                { time: '11:30 AM', student: 'Anonymous Student #0823', type: 'In-Person', urgent: true },
                { time: '2:00 PM', student: 'Anonymous Student #1456', type: 'Phone Call', urgent: false },
                { time: '3:30 PM', student: 'Anonymous Student #0934', type: 'Video Call', urgent: false },
              ].map((appointment, index) => (
                <div key={index} className={`flex items-center justify-between p-4 rounded-lg border-2 ${
                  appointment.urgent ? 'border-red-200 bg-red-50' : 'border-gray-200 bg-gray-50'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      appointment.urgent ? 'bg-red-100' : 'bg-blue-100'
                    }`}>
                      <Clock className={`h-6 w-6 ${appointment.urgent ? 'text-red-600' : 'text-blue-600'}`} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{appointment.time}</p>
                      <p className="text-sm text-gray-600">{appointment.student}</p>
                      <p className="text-xs text-gray-500">{appointment.type}</p>
                    </div>
                  </div>
                  {appointment.urgent && (
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                      Urgent
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Update Availability
                </button>
                <button className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Emergency Session
                </button>
                <button className="w-full bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  Session Notes
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pending Requests</h3>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl font-bold text-orange-600">3</span>
                </div>
                <p className="text-sm text-gray-600">New booking requests</p>
                <button className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Review All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Book a Counseling Session</h2>
        <p className="text-gray-600">Schedule a confidential session with our mental health professionals</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 space-y-6">
            {/* Urgency Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                How urgent is this session?
              </label>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { id: 'normal', label: 'Normal', color: 'bg-green-100 text-green-800 border-green-200' },
                  { id: 'urgent', label: 'Urgent', color: 'bg-orange-100 text-orange-800 border-orange-200' },
                  { id: 'emergency', label: 'Emergency', color: 'bg-red-100 text-red-800 border-red-200' }
                ].map((level) => (
                  <button
                    key={level.id}
                    type="button"
                    onClick={() => setUrgency(level.id)}
                    className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                      urgency === level.id ? level.color : 'bg-gray-50 text-gray-700 border-gray-200'
                    }`}
                  >
                    {level.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Session Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Preferred Session Type
              </label>
              <div className="grid grid-cols-2 gap-4">
                {sessionTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSessionType(type.id)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        sessionType === type.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 bg-gray-50 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className={`h-5 w-5 ${
                          sessionType === type.id ? 'text-blue-600' : 'text-gray-400'
                        }`} />
                        <div>
                          <div className={`font-medium ${
                            sessionType === type.id ? 'text-blue-900' : 'text-gray-900'
                          }`}>
                            {type.label}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {type.description}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Counselor Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Choose a Counselor (Optional)
              </label>
              <div className="space-y-3">
                {counselors.map((counselor) => (
                  <button
                    key={counselor.id}
                    type="button"
                    onClick={() => setSelectedCounselor(counselor.id)}
                    disabled={!counselor.available && urgency === 'normal'}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      selectedCounselor === counselor.id
                        ? 'border-blue-500 bg-blue-50'
                        : counselor.available
                        ? 'border-gray-200 bg-gray-50 hover:border-blue-300'
                        : 'border-gray-200 bg-gray-100 opacity-60 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{counselor.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{counselor.specialization}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-xs text-gray-500">
                            Languages: {counselor.languages.join(', ')}
                          </span>
                          <span className="text-xs text-gray-500">
                            {counselor.experience} experience
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-yellow-600">
                          ⭐ {counselor.rating}
                        </div>
                        <div className={`text-xs mt-1 ${
                          counselor.available ? 'text-green-600' : 'text-orange-600'
                        }`}>
                          Next: {counselor.nextSlot}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Reason for Session */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Brief description (Optional)
              </label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={4}
                placeholder="Help us understand what you'd like to discuss (this remains confidential)"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Book Session</span>
            </button>
          </form>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Emergency Support */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-red-800 mb-3">Need Immediate Help?</h3>
            <div className="space-y-3">
              <button className="w-full bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Emergency Helpline</span>
              </button>
              <p className="text-sm text-red-700">
                Available 24/7 for crisis support
              </p>
            </div>
          </div>

          {/* Booking Guidelines */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Guidelines</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>All sessions are completely confidential</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Cancel or reschedule up to 2 hours before</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Emergency sessions available within 1 hour</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Multi-language support available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSystem;