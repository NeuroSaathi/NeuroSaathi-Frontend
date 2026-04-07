import React, { useEffect, useState } from 'react';
import {
  AlertCircle,
  Calendar,
  CheckCircle,
  MessageSquare,
  Phone,
  User,
} from 'lucide-react';

interface BookingSystemProps {
  userType: string;
  user: {
    instituteID?: string;
    [key: string]: unknown;
  } | null;
}

interface Counsellor {
  _id: string;
  name: string;
  email: string;
  instituteID: string;
}

interface CounsellorResponse {
  counsellors?: Counsellor[];
  message?: string;
}

interface BookingResponse {
  message?: string;
}

const BookingSystem: React.FC<BookingSystemProps> = ({ userType, user }) => {
  const [counsellors, setCounsellors] = useState<Counsellor[]>([]);
  const [selectedCounsellor, setSelectedCounsellor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [sessionType, setSessionType] = useState('chat');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchCounsellors = async () => {
      if (!user?.instituteID) {
        setCounsellors([]);
        return;
      }

      setIsLoading(true);
      setError('');

      try {
        const token = localStorage.getItem('token');
        const response = await fetch(
          `http://localhost:5000/api/counsellors/institute/${user.instituteID}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data: CounsellorResponse = await response.json();

        if (!response.ok) {
          setError(data.message || 'Failed to load counsellors');
          return;
        }

        setCounsellors(data.counsellors || []);
      } catch {
        setError('Network error while loading counsellors');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCounsellors();
  }, [user?.instituteID]);

  const timeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (!selectedCounsellor || !selectedDate || !selectedTime || !sessionType) {
      setError('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          counsellorId: selectedCounsellor,
          date: selectedDate,
          time: selectedTime,
          type: sessionType,
          description: description.trim() || undefined,
        }),
      });

      const data: BookingResponse = await response.json();

      if (!response.ok) {
        setError(data.message || 'Booking failed');
        return;
      }

      setSuccess(true);
      setSelectedCounsellor('');
      setSelectedDate('');
      setSelectedTime('');
      setSessionType('chat');
      setDescription('');
      setTimeout(() => setSuccess(false), 3000);
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (userType !== 'student') {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
          <AlertCircle className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-yellow-800 mb-2">Access Restricted</h3>
          <p className="text-yellow-700">Only students can book counselling sessions.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Book a Session</h1>
        <p className="text-gray-600">
          Schedule a counselling session with a professional from your institute
        </p>
      </div>

      {success && (
        <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center">
          <CheckCircle className="h-5 w-5 mr-2" />
          Booking request submitted successfully! You will receive a confirmation soon.
        </div>
      )}

      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Counsellor *
              </label>
              {isLoading ? (
                <div className="text-center py-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto" />
                  <p className="text-gray-500 mt-2">Loading counsellors...</p>
                </div>
              ) : counsellors.length === 0 ? (
                <div className="text-center py-4 text-gray-500">
                  No counsellors available for your institute
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {counsellors.map((counsellor) => (
                    <button
                      key={counsellor._id}
                      type="button"
                      onClick={() => setSelectedCounsellor(counsellor._id)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        selectedCounsellor === counsellor._id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <User className="h-8 w-8 text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-900">{counsellor.name}</div>
                          <div className="text-sm text-gray-500">{counsellor.email}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Date *
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Time *
              </label>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`p-2 text-sm rounded-lg border transition-all ${
                      selectedTime === time
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Session Type *
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSessionType('chat')}
                  className={`flex items-center space-x-3 p-3 rounded-lg border-2 transition-all ${
                    sessionType === 'chat'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">Chat Session</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSessionType('phone_call')}
                  className={`flex items-center space-x-3 p-3 rounded-lg border-2 transition-all ${
                    sessionType === 'phone_call'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">Phone Call</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description (Optional)
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Briefly describe what you'd like to discuss..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || counsellors.length === 0}
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Calendar className="h-5 w-5" />
              <span>{isSubmitting ? 'Booking...' : 'Book Session'}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingSystem;
