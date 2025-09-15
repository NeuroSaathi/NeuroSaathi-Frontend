import React, { useState } from 'react';
import { 
  Target, 
  Calendar, 
  Award, 
  TrendingUp, 
  CheckCircle, 
  Plus,
  Flame,
  Star,
  Clock,
  Heart,
  Brain,
  Moon,
  Droplets,
  Book,
  Users,
  Zap,
  Coffee
} from 'lucide-react';

const StreakBuilder: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [newGoalName, setNewGoalName] = useState('');
  const [newGoalCategory, setNewGoalCategory] = useState('wellness');
  const [showAddGoal, setShowAddGoal] = useState(false);

  const streakGoals = [
    {
      id: 1,
      name: 'Daily Meditation',
      category: 'wellness',
      icon: Brain,
      color: 'bg-purple-500',
      currentStreak: 12,
      bestStreak: 18,
      completedToday: true,
      target: 'Daily',
      description: '10 minutes of mindfulness meditation',
      weekProgress: [true, true, false, true, true, true, true]
    },
    {
      id: 2,
      name: 'Gratitude Journal',
      category: 'mental-health',
      icon: Heart,
      color: 'bg-pink-500',
      currentStreak: 8,
      bestStreak: 15,
      completedToday: false,
      target: 'Daily',
      description: 'Write 3 things you\'re grateful for',
      weekProgress: [true, true, true, false, true, true, false]
    },
    {
      id: 3,
      name: 'Quality Sleep',
      category: 'health',
      icon: Moon,
      color: 'bg-indigo-500',
      currentStreak: 5,
      bestStreak: 21,
      completedToday: true,
      target: '8 hours',
      description: 'Get 7-8 hours of quality sleep',
      weekProgress: [false, true, true, true, true, true, false]
    },
    {
      id: 4,
      name: 'Hydration Goal',
      category: 'health',
      icon: Droplets,
      color: 'bg-blue-500',
      currentStreak: 15,
      bestStreak: 25,
      completedToday: true,
      target: '8 glasses',
      description: 'Drink 8 glasses of water daily',
      weekProgress: [true, true, true, true, true, true, true]
    },
    {
      id: 5,
      name: 'Study Session',
      category: 'academic',
      icon: Book,
      color: 'bg-green-500',
      currentStreak: 6,
      bestStreak: 12,
      completedToday: false,
      target: '2 hours',
      description: 'Focused study session',
      weekProgress: [true, false, true, true, true, true, false]
    },
    {
      id: 6,
      name: 'Social Connection',
      category: 'social',
      icon: Users,
      color: 'bg-orange-500',
      currentStreak: 3,
      bestStreak: 8,
      completedToday: true,
      target: 'Daily',
      description: 'Meaningful conversation with someone',
      weekProgress: [false, true, false, true, true, true, false]
    }
  ];

  const categories = [
    { id: 'wellness', label: 'Wellness', icon: Heart, color: 'text-pink-600' },
    { id: 'mental-health', label: 'Mental Health', icon: Brain, color: 'text-purple-600' },
    { id: 'health', label: 'Physical Health', icon: Zap, color: 'text-green-600' },
    { id: 'academic', label: 'Academic', icon: Book, color: 'text-blue-600' },
    { id: 'social', label: 'Social', icon: Users, color: 'text-orange-600' }
  ];

  const motivationalMessages = [
    "Every day you show up is a victory! 🎉",
    "Consistency is the key to transformation 🔑",
    "Small steps lead to big changes 🚀",
    "You're building amazing habits! 💪",
    "Progress over perfection, always ✨"
  ];

  const achievements = [
    { name: 'First Week', description: 'Complete 7 days in a row', icon: Award, unlocked: true },
    { name: 'Habit Builder', description: 'Maintain 3 habits for 30 days', icon: Target, unlocked: true },
    { name: 'Consistency King', description: '50-day streak on any habit', icon: Flame, unlocked: false },
    { name: 'Wellness Warrior', description: 'Complete all wellness goals for a month', icon: Star, unlocked: false },
    { name: 'Streak Master', description: '100-day streak on any habit', icon: TrendingUp, unlocked: false }
  ];

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const handleCompleteGoal = (goalId: number) => {
    // Handle goal completion
    alert('Great job! Goal marked as complete for today! 🎉');
  };

  const handleAddGoal = () => {
    if (newGoalName.trim()) {
      // Handle adding new goal
      alert(`New goal "${newGoalName}" added successfully!`);
      setNewGoalName('');
      setShowAddGoal(false);
    }
  };

  const getTotalActiveStreaks = () => {
    return streakGoals.filter(goal => goal.currentStreak > 0).length;
  };

  const getLongestStreak = () => {
    return Math.max(...streakGoals.map(goal => goal.bestStreak));
  };

  const getCompletionRate = () => {
    const completed = streakGoals.filter(goal => goal.completedToday).length;
    return Math.round((completed / streakGoals.length) * 100);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Consistency & Streak Builder</h2>
        <p className="text-gray-600">Build lasting habits and track your progress with motivational streaks</p>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'overview', label: 'Overview', icon: Target },
              { id: 'habits', label: 'My Habits', icon: CheckCircle },
              { id: 'achievements', label: 'Achievements', icon: Award },
              { id: 'insights', label: 'Progress Insights', icon: TrendingUp }
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
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Daily Motivation */}
              <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl p-6 text-white text-center">
                <div className="flex items-center justify-center mb-3">
                  <Flame className="h-8 w-8 mr-2" />
                  <h3 className="text-xl font-bold">Keep the Fire Burning!</h3>
                </div>
                <p className="text-orange-100 mb-4">
                  {motivationalMessages[new Date().getDate() % motivationalMessages.length]}
                </p>
                <div className="text-2xl font-bold">
                  {getCompletionRate()}% Complete Today
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { label: 'Active Streaks', value: getTotalActiveStreaks(), icon: Flame, color: 'text-orange-600' },
                  { label: 'Longest Streak', value: `${getLongestStreak()} days`, icon: TrendingUp, color: 'text-green-600' },
                  { label: 'Today\'s Progress', value: `${getCompletionRate()}%`, icon: Target, color: 'text-blue-600' },
                  { label: 'Total Habits', value: streakGoals.length, icon: CheckCircle, color: 'text-purple-600' }
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                      <Icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* Today's Goals */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Goals</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {streakGoals.slice(0, 6).map((goal) => {
                    const Icon = goal.icon;
                    return (
                      <div key={goal.id} className={`p-4 rounded-lg border-2 ${
                        goal.completedToday ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'
                      }`}>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <div className={`${goal.color} p-2 rounded-lg`}>
                              <Icon className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-medium text-gray-900">{goal.name}</span>
                          </div>
                          {goal.completedToday ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : (
                            <button
                              onClick={() => handleCompleteGoal(goal.id)}
                              className="w-5 h-5 border-2 border-gray-300 rounded-full hover:border-green-500 transition-colors"
                            />
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{goal.description}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Target: {goal.target}</span>
                          <div className="flex items-center space-x-1">
                            <Flame className="h-4 w-4 text-orange-500" />
                            <span className="font-medium text-gray-900">{goal.currentStreak}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'habits' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">My Habits</h3>
                <button
                  onClick={() => setShowAddGoal(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Habit</span>
                </button>
              </div>

              {/* Add Goal Modal */}
              {showAddGoal && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-blue-900 mb-4">Add New Habit</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Habit name (e.g., Morning Exercise)"
                      value={newGoalName}
                      onChange={(e) => setNewGoalName(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <select
                      value={newGoalCategory}
                      onChange={(e) => setNewGoalCategory(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={handleAddGoal}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Add Habit
                    </button>
                    <button
                      onClick={() => setShowAddGoal(false)}
                      className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              {/* Habits List */}
              <div className="space-y-4">
                {streakGoals.map((goal) => {
                  const Icon = goal.icon;
                  return (
                    <div key={goal.id} className="bg-white border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className={`${goal.color} p-3 rounded-lg`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900">{goal.name}</h4>
                            <p className="text-sm text-gray-600">{goal.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2 mb-1">
                            <Flame className="h-5 w-5 text-orange-500" />
                            <span className="text-xl font-bold text-gray-900">{goal.currentStreak}</span>
                            <span className="text-sm text-gray-600">days</span>
                          </div>
                          <div className="text-xs text-gray-500">Best: {goal.bestStreak} days</div>
                        </div>
                      </div>

                      {/* Week Progress */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">This Week</span>
                          <span className="text-sm text-gray-500">
                            {goal.weekProgress.filter(Boolean).length}/7 days
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          {weekDays.map((day, index) => (
                            <div key={index} className="flex-1 text-center">
                              <div className="text-xs text-gray-500 mb-1">{day}</div>
                              <div className={`w-8 h-8 rounded-full mx-auto flex items-center justify-center ${
                                goal.weekProgress[index] 
                                  ? 'bg-green-500 text-white' 
                                  : 'bg-gray-200 text-gray-400'
                              }`}>
                                {goal.weekProgress[index] ? (
                                  <CheckCircle className="h-4 w-4" />
                                ) : (
                                  <div className="w-2 h-2 bg-gray-400 rounded-full" />
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <button
                        onClick={() => handleCompleteGoal(goal.id)}
                        disabled={goal.completedToday}
                        className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                          goal.completedToday
                            ? 'bg-green-100 text-green-800 cursor-not-allowed'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                      >
                        {goal.completedToday ? 'Completed Today! 🎉' : 'Mark as Complete'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-6 text-white text-center">
                <Award className="h-12 w-12 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Achievement Gallery</h3>
                <p className="text-yellow-100">Celebrate your consistency milestones!</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className={`border-2 rounded-xl p-6 text-center ${
                      achievement.unlocked 
                        ? 'border-yellow-300 bg-yellow-50' 
                        : 'border-gray-200 bg-gray-50'
                    }`}>
                      <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                        achievement.unlocked 
                          ? 'bg-yellow-500 text-white' 
                          : 'bg-gray-300 text-gray-500'
                      }`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <h4 className={`text-lg font-semibold mb-2 ${
                        achievement.unlocked ? 'text-yellow-800' : 'text-gray-600'
                      }`}>
                        {achievement.name}
                      </h4>
                      <p className={`text-sm ${
                        achievement.unlocked ? 'text-yellow-700' : 'text-gray-500'
                      }`}>
                        {achievement.description}
                      </p>
                      {achievement.unlocked && (
                        <div className="mt-3">
                          <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                            Unlocked! 🎉
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'insights' && (
            <div className="space-y-8">
              {/* Progress Overview */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Progress Analytics</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {[
                    { label: 'Weekly Completion Rate', value: '78%', change: '+12%', color: 'text-green-600' },
                    { label: 'Average Streak Length', value: '8.2 days', change: '+2.1', color: 'text-blue-600' },
                    { label: 'Most Consistent Habit', value: 'Hydration', change: '15 days', color: 'text-purple-600' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                      <div className={`text-sm font-medium ${stat.color}`}>
                        {stat.change} from last week
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Habits by Category</h4>
                    <div className="space-y-3">
                      {categories.map((category) => {
                        const categoryGoals = streakGoals.filter(goal => goal.category === category.id);
                        const Icon = category.icon;
                        return (
                          <div key={category.id} className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Icon className={`h-4 w-4 ${category.color}`} />
                              <span className="text-sm text-gray-700">{category.label}</span>
                            </div>
                            <span className="text-sm font-medium text-gray-900">
                              {categoryGoals.length} habits
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Best Performing Habits</h4>
                    <div className="space-y-3">
                      {streakGoals
                        .sort((a, b) => b.currentStreak - a.currentStreak)
                        .slice(0, 5)
                        .map((goal) => {
                          const Icon = goal.icon;
                          return (
                            <div key={goal.id} className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <div className={`${goal.color} p-1 rounded`}>
                                  <Icon className="h-3 w-3 text-white" />
                                </div>
                                <span className="text-sm text-gray-700">{goal.name}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Flame className="h-3 w-3 text-orange-500" />
                                <span className="text-sm font-medium text-gray-900">
                                  {goal.currentStreak}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Motivational Insights */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Insights & Recommendations</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-blue-800 font-medium">Consistency Trend</p>
                      <p className="text-blue-700 text-sm">Your habit completion rate has improved by 15% this month!</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-blue-800 font-medium">Optimal Time</p>
                      <p className="text-blue-700 text-sm">You're most consistent with habits completed in the morning.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-blue-800 font-medium">Next Milestone</p>
                      <p className="text-blue-700 text-sm">You're 3 days away from your longest meditation streak!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StreakBuilder;