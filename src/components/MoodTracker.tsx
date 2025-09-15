import React, { useState } from 'react';
import { 
  TrendingUp, 
  Calendar, 
  Heart, 
  Brain, 
  Sun, 
  Cloud, 
  CloudRain, 
  Zap,
  BookOpen,
  Target,
  Award,
  BarChart3,
  PlusCircle,
  Edit3,
  Smile,
  Meh,
  Frown
} from 'lucide-react';

const MoodTracker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [currentMood, setCurrentMood] = useState(7);
  const [journalEntry, setJournalEntry] = useState('');
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('today');

  const moodEmojis = [
    { value: 1, emoji: '😢', label: 'Very Sad', color: 'text-red-600' },
    { value: 2, emoji: '😞', label: 'Sad', color: 'text-red-500' },
    { value: 3, emoji: '😕', label: 'Down', color: 'text-orange-500' },
    { value: 4, emoji: '😐', label: 'Neutral', color: 'text-yellow-500' },
    { value: 5, emoji: '🙂', label: 'Okay', color: 'text-yellow-400' },
    { value: 6, emoji: '😊', label: 'Good', color: 'text-green-400' },
    { value: 7, emoji: '😄', label: 'Happy', color: 'text-green-500' },
    { value: 8, emoji: '😁', label: 'Very Happy', color: 'text-green-600' },
    { value: 9, emoji: '🤩', label: 'Excited', color: 'text-blue-500' },
    { value: 10, emoji: '🥳', label: 'Euphoric', color: 'text-purple-500' }
  ];

  const emotions = [
    'Grateful', 'Anxious', 'Excited', 'Stressed', 'Calm', 'Frustrated',
    'Hopeful', 'Overwhelmed', 'Confident', 'Lonely', 'Energetic', 'Tired',
    'Proud', 'Worried', 'Content', 'Angry', 'Peaceful', 'Restless'
  ];

  const weeklyMoodData = [
    { day: 'Mon', mood: 6, energy: 7, stress: 4 },
    { day: 'Tue', mood: 7, energy: 8, stress: 3 },
    { day: 'Wed', mood: 5, energy: 6, stress: 6 },
    { day: 'Thu', mood: 8, energy: 9, stress: 2 },
    { day: 'Fri', mood: 9, energy: 8, stress: 3 },
    { day: 'Sat', mood: 8, energy: 7, stress: 2 },
    { day: 'Sun', mood: 7, energy: 6, stress: 4 }
  ];

  const journalEntries = [
    {
      date: '2024-01-15',
      mood: 8,
      entry: 'Had a great day today! Completed my assignment early and spent time with friends. Feeling grateful for the support system I have.',
      emotions: ['Grateful', 'Happy', 'Energetic'],
      insights: 'Social connections boost your mood significantly'
    },
    {
      date: '2024-01-14',
      mood: 5,
      entry: 'Feeling a bit overwhelmed with upcoming exams. Need to work on time management and stress reduction techniques.',
      emotions: ['Stressed', 'Overwhelmed', 'Worried'],
      insights: 'Consider breaking large tasks into smaller, manageable steps'
    },
    {
      date: '2024-01-13',
      mood: 7,
      entry: 'Good progress on my project today. The meditation session this morning really helped me focus better.',
      emotions: ['Focused', 'Calm', 'Productive'],
      insights: 'Morning meditation correlates with better focus throughout the day'
    }
  ];

  const motivationalQuotes = [
    "Every day is a new beginning. Take a deep breath, smile, and start again.",
    "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.",
    "Progress, not perfection. Every small step counts towards your wellbeing.",
    "You are stronger than you think and more resilient than you know.",
    "It's okay to have bad days. What matters is how you bounce back."
  ];

  const moodRecommendations = {
    low: [
      { activity: 'Take a 10-minute walk outside', icon: Sun, color: 'text-yellow-500' },
      { activity: 'Practice deep breathing exercises', icon: Brain, color: 'text-blue-500' },
      { activity: 'Listen to uplifting music', icon: Heart, color: 'text-pink-500' },
      { activity: 'Call a friend or family member', icon: Target, color: 'text-green-500' }
    ],
    medium: [
      { activity: 'Write in your gratitude journal', icon: BookOpen, color: 'text-purple-500' },
      { activity: 'Do a quick workout or yoga', icon: Zap, color: 'text-orange-500' },
      { activity: 'Organize your study space', icon: Target, color: 'text-blue-500' },
      { activity: 'Plan something fun for later', icon: Calendar, color: 'text-green-500' }
    ],
    high: [
      { activity: 'Share your positive energy with others', icon: Heart, color: 'text-pink-500' },
      { activity: 'Work on a creative project', icon: Award, color: 'text-purple-500' },
      { activity: 'Set new goals for tomorrow', icon: Target, color: 'text-blue-500' },
      { activity: 'Celebrate your achievements', icon: Award, color: 'text-yellow-500' }
    ]
  };

  const handleEmotionToggle = (emotion: string) => {
    setSelectedEmotions(prev => 
      prev.includes(emotion) 
        ? prev.filter(e => e !== emotion)
        : [...prev, emotion]
    );
  };

  const handleJournalSubmit = () => {
    // Handle journal entry submission
    alert('Journal entry saved successfully!');
    setJournalEntry('');
    setSelectedEmotions([]);
  };

  const getMoodCategory = (mood: number) => {
    if (mood <= 4) return 'low';
    if (mood <= 7) return 'medium';
    return 'high';
  };

  const getCurrentMoodEmoji = () => {
    return moodEmojis.find(m => m.value === currentMood) || moodEmojis[6];
  };

  const getTodaysQuote = () => {
    const today = new Date().getDate();
    return motivationalQuotes[today % motivationalQuotes.length];
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">AI-Powered Mood Tracker & Journal</h2>
        <p className="text-gray-600">Track your emotional wellbeing and gain insights into your mental health patterns</p>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'today', label: 'Today\'s Entry', icon: Calendar },
              { id: 'insights', label: 'Insights & Trends', icon: BarChart3 },
              { id: 'journal', label: 'Journal History', icon: BookOpen },
              { id: 'recommendations', label: 'Mood Boosters', icon: Heart }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'today' && (
            <div className="space-y-8">
              {/* Daily Quote */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white text-center">
                <h3 className="text-lg font-semibold mb-3">Today's Inspiration</h3>
                <p className="text-purple-100 italic">"{getTodaysQuote()}"</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Mood Rating */}
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">How are you feeling today?</h3>
                  
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-2">{getCurrentMoodEmoji().emoji}</div>
                    <div className={`text-lg font-medium ${getCurrentMoodEmoji().color}`}>
                      {getCurrentMoodEmoji().label}
                    </div>
                  </div>

                  <div className="mb-6">
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={currentMood}
                      onChange={(e) => setCurrentMood(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>Very Sad</span>
                      <span>Neutral</span>
                      <span>Euphoric</span>
                    </div>
                  </div>

                  {/* Emotions Selection */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">What emotions are you experiencing?</h4>
                    <div className="flex flex-wrap gap-2">
                      {emotions.map((emotion) => (
                        <button
                          key={emotion}
                          onClick={() => handleEmotionToggle(emotion)}
                          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                            selectedEmotions.includes(emotion)
                              ? 'bg-blue-100 text-blue-800 border-2 border-blue-300'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {emotion}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Journal Entry */}
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Journal Entry</h3>
                  
                  <textarea
                    value={journalEntry}
                    onChange={(e) => setJournalEntry(e.target.value)}
                    rows={8}
                    placeholder="Write about your day, thoughts, feelings, or anything on your mind..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />

                  <div className="flex items-center justify-between mt-4">
                    <div className="text-sm text-gray-500">
                      {journalEntry.length} characters
                    </div>
                    <button
                      onClick={handleJournalSubmit}
                      disabled={!journalEntry.trim()}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
                    >
                      <Edit3 className="h-4 w-4" />
                      <span>Save Entry</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Recommendations */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Activities</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {moodRecommendations[getMoodCategory(currentMood)].map((rec, index) => {
                    const Icon = rec.icon;
                    return (
                      <button
                        key={index}
                        className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center"
                      >
                        <Icon className={`h-8 w-8 mx-auto mb-2 ${rec.color}`} />
                        <p className="text-sm font-medium text-gray-900">{rec.activity}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'insights' && (
            <div className="space-y-8">
              {/* Weekly Overview */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Weekly Mood Trends</h3>
                
                <div className="grid grid-cols-7 gap-4 mb-6">
                  {weeklyMoodData.map((day, index) => (
                    <div key={index} className="text-center">
                      <div className="text-sm font-medium text-gray-600 mb-2">{day.day}</div>
                      <div className="bg-gray-100 rounded-lg p-4">
                        <div className="text-2xl mb-1">
                          {moodEmojis.find(m => m.value === day.mood)?.emoji}
                        </div>
                        <div className="text-xs text-gray-500">Mood: {day.mood}/10</div>
                        <div className="text-xs text-gray-500">Energy: {day.energy}/10</div>
                        <div className="text-xs text-gray-500">Stress: {day.stress}/10</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress Charts */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { label: 'Average Mood', value: 7.1, change: '+0.3', color: 'text-green-600' },
                    { label: 'Energy Level', value: 7.3, change: '+0.5', color: 'text-green-600' },
                    { label: 'Stress Level', value: 3.4, change: '-0.8', color: 'text-green-600' }
                  ].map((metric, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                      <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                      <div className={`text-sm font-medium ${metric.color}`}>
                        {metric.change} from last week
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Insights */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">AI-Generated Insights</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Brain className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-blue-800 font-medium">Pattern Recognition</p>
                      <p className="text-blue-700 text-sm">Your mood tends to be higher on days when you exercise or spend time outdoors.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-blue-800 font-medium">Improvement Trend</p>
                      <p className="text-blue-700 text-sm">Your overall wellbeing has improved by 15% over the past month.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-blue-800 font-medium">Recommendation</p>
                      <p className="text-blue-700 text-sm">Consider maintaining your current sleep schedule as it correlates with better mood stability.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'journal' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Journal History</h3>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                  <PlusCircle className="h-4 w-4" />
                  <span>New Entry</span>
                </button>
              </div>

              <div className="space-y-4">
                {journalEntries.map((entry, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">
                          {moodEmojis.find(m => m.value === entry.mood)?.emoji}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{entry.date}</div>
                          <div className="text-sm text-gray-600">Mood: {entry.mood}/10</div>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Edit3 className="h-4 w-4" />
                      </button>
                    </div>

                    <p className="text-gray-700 mb-4">{entry.entry}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {entry.emotions.map((emotion, emotionIndex) => (
                        <span key={emotionIndex} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                          {emotion}
                        </span>
                      ))}
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <Lightbulb className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium text-green-900">AI Insight:</span>
                      </div>
                      <p className="text-green-800 text-sm mt-1">{entry.insights}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'recommendations' && (
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 text-white text-center">
                <h3 className="text-xl font-bold mb-2">Personalized Mood Boosters</h3>
                <p className="text-green-100">Activities tailored to your current emotional state and preferences</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(moodRecommendations).map(([category, recommendations]) => (
                  <div key={category} className="bg-white border border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
                      {category === 'low' ? 'Feeling Down?' : 
                       category === 'medium' ? 'Feeling Okay?' : 'Feeling Great?'}
                    </h4>
                    <div className="space-y-3">
                      {recommendations.map((rec, index) => {
                        const Icon = rec.icon;
                        return (
                          <button
                            key={index}
                            className="w-full p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3 text-left"
                          >
                            <Icon className={`h-5 w-5 ${rec.color}`} />
                            <span className="text-sm font-medium text-gray-900">{rec.activity}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Support */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-4">Need Immediate Support?</h3>
                <p className="text-red-800 mb-4">
                  If you're experiencing severe distress or having thoughts of self-harm, please reach out for help immediately.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                    <Heart className="h-4 w-4" />
                    <span>Crisis Helpline</span>
                  </button>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Emergency Counseling</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoodTracker;