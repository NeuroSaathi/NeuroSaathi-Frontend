import React, { useState } from 'react';
import { MessageCircle, Users, Heart, Shield, Clock, AlertTriangle, ThumbsUp } from 'lucide-react';

interface PeerSupportProps {
  userType: string;
}

const PeerSupport: React.FC<PeerSupportProps> = ({ userType }) => {
  const [activeTab, setActiveTab] = useState('forum');
  const [newPostContent, setNewPostContent] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('general');



  const topics = [
    { id: 'general', label: 'General Support', color: 'bg-blue-100 text-blue-800' },
    { id: 'anxiety', label: 'Anxiety', color: 'bg-purple-100 text-purple-800' },
    { id: 'depression', label: 'Depression', color: 'bg-indigo-100 text-indigo-800' },
    { id: 'academic', label: 'Academic Stress', color: 'bg-orange-100 text-orange-800' },
    { id: 'relationships', label: 'Relationships', color: 'bg-pink-100 text-pink-800' },
    { id: 'sleep', label: 'Sleep Issues', color: 'bg-green-100 text-green-800' }
  ];

  const posts = [
    {
      id: 1,
      author: 'Anonymous Eagle',
      topic: 'anxiety',
      title: 'Feeling overwhelmed with upcoming exams',
      content: 'Hey everyone, I\'ve been having trouble sleeping and focusing on my studies. The pressure is getting to me. Any tips on managing exam anxiety?',
      timestamp: '2 hours ago',
      replies: 8,
      likes: 12,
      isSupported: false
    },
    {
      id: 2,
      author: 'Student Helper',
      topic: 'general',
      title: 'Small wins celebration thread',
      content: 'Let\'s celebrate our small victories! I finally attended all my classes this week after struggling with motivation. What\'s your small win?',
      timestamp: '5 hours ago',
      replies: 15,
      likes: 24,
      isSupported: true,
      badge: 'Peer Volunteer'
    },
    {
      id: 3,
      author: 'Anonymous Sparrow',
      topic: 'relationships',
      title: 'Homesickness affecting friendships',
      content: 'I\'m finding it hard to make friends because I keep comparing everyone to my friends back home. Anyone else experienced this?',
      timestamp: '1 day ago',
      replies: 6,
      likes: 9,
      isSupported: false
    },
    {
      id: 4,
      author: 'Wellness Buddy',
      topic: 'sleep',
      title: 'Creating a healthy sleep routine',
      content: 'Sharing some tips that helped me fix my sleep schedule as a student. Early to bed, early to rise really works!',
      timestamp: '2 days ago',
      replies: 12,
      likes: 18,
      isSupported: true,
      badge: 'Peer Volunteer'
    }
  ];

  const volunteers = [
    {
      id: 1,
      name: 'Rahul K.',
      specialties: ['Academic Stress', 'Time Management'],
      experience: '2 years',
      languages: ['Hindi', 'English'],
      isOnline: true,
      responses: 142,
      rating: 4.8
    },
    {
      id: 2,
      name: 'Priya S.',
      specialties: ['Anxiety', 'Social Support'],
      experience: '1.5 years',
      languages: ['English', 'Punjabi'],
      isOnline: false,
      responses: 98,
      rating: 4.9
    },
    {
      id: 3,
      name: 'Ahmad M.',
      specialties: ['Depression', 'Life Transitions'],
      experience: '3 years',
      languages: ['Urdu', 'English', 'Hindi'],
      isOnline: true,
      responses: 203,
      rating: 4.7
    }
  ];

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;
    
    // Handle post submission
    setNewPostContent('');
    alert('Your post has been submitted for moderation and will appear shortly.');
  };

  const getTopicColor = (topicId: string) => {
    const topic = topics.find(t => t.id === topicId);
    return topic?.color || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Peer Support Community</h2>
        <p className="text-gray-600">Connect with fellow students in a safe, moderated environment</p>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'forum', label: 'Discussion Forum', icon: MessageCircle },
              { id: 'volunteers', label: 'Peer Volunteers', icon: Users },
              { id: 'guidelines', label: 'Community Guidelines', icon: Shield }
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
          {activeTab === 'forum' && (
            <div className="space-y-6">
              {/* Topic Filters */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-sm font-medium text-gray-700 mr-3 py-2">Topics:</span>
                {topics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedTopic(topic.id)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                      selectedTopic === topic.id ? topic.color : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {topic.label}
                  </button>
                ))}
              </div>

              {/* New Post Form */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Share Your Thoughts</h3>
                <form onSubmit={handlePostSubmit} className="space-y-4">
                  <div>
                    <select
                      value={selectedTopic}
                      onChange={(e) => setSelectedTopic(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {topics.map((topic) => (
                        <option key={topic.id} value={topic.id}>{topic.label}</option>
                      ))}
                    </select>
                  </div>
                  <textarea
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    rows={4}
                    placeholder="Share your experience, ask for support, or offer encouragement to others..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Shield className="h-4 w-4" />
                      <span>Your identity remains anonymous</span>
                    </div>
                    <button
                      type="submit"
                      disabled={!newPostContent.trim()}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Post Anonymously
                    </button>
                  </div>
                </form>
              </div>

              {/* Posts */}
              <div className="space-y-4">
                {posts.map((post) => (
                  <div key={post.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                          {post.author.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-gray-900">{post.author}</span>
                            {post.badge && (
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                                {post.badge}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTopicColor(post.topic)}`}>
                              {topics.find(t => t.id === post.topic)?.label}
                            </span>
                            <span className="text-xs text-gray-500">{post.timestamp}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h4 className="font-semibold text-gray-900 mb-2">{post.title}</h4>
                    <p className="text-gray-700 mb-4">{post.content}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors">
                          <ThumbsUp className="h-4 w-4" />
                          <span className="text-sm">{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors">
                          <MessageCircle className="h-4 w-4" />
                          <span className="text-sm">{post.replies} replies</span>
                        </button>
                      </div>
                      {post.isSupported && (
                        <div className="flex items-center space-x-1 text-green-600">
                          <Heart className="h-4 w-4" />
                          <span className="text-sm">Volunteer supported</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'volunteers' && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Meet Our Peer Volunteers</h3>
                <p className="text-blue-800 text-sm">
                  Trained student volunteers who provide peer support and guidance
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {volunteers.map((volunteer) => (
                  <div key={volunteer.id} className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                          {volunteer.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{volunteer.name}</h4>
                          <p className="text-sm text-gray-600">{volunteer.experience}</p>
                        </div>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${volunteer.isOnline ? 'bg-green-400' : 'bg-gray-300'}`}></div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-700">Specialties:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {volunteer.specialties.map((specialty, index) => (
                            <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-sm font-medium text-gray-700">Languages:</span>
                        <p className="text-sm text-gray-600">{volunteer.languages.join(', ')}</p>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{volunteer.responses} responses</span>
                        <div className="flex items-center space-x-1">
                          <span>⭐</span>
                          <span>{volunteer.rating}</span>
                        </div>
                      </div>

                      <button
                        disabled={!volunteer.isOnline}
                        className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>{volunteer.isOnline ? 'Connect Now' : 'Currently Offline'}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'guidelines' && (
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Shield className="h-6 w-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-green-900">Community Guidelines</h3>
                </div>
                <p className="text-green-800">
                  Our peer support community is built on trust, respect, and mutual support. 
                  Please read these guidelines to ensure a safe space for everyone.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    <span>Do's</span>
                  </h4>
                  <ul className="space-y-3">
                    {[
                      'Be kind and supportive to all community members',
                      'Share your experiences to help others feel less alone',
                      'Respect privacy and maintain anonymity',
                      'Use appropriate language and tone',
                      'Report concerning posts to moderators',
                      'Celebrate others\' progress and achievements'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    <span>Don'ts</span>
                  </h4>
                  <ul className="space-y-3">
                    {[
                      'Share personal contact information',
                      'Provide medical or professional advice',
                      'Use discriminatory or offensive language',
                      'Share others\' personal information',
                      'Promote self-harm or dangerous behaviors',
                      'Spam or post irrelevant content'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-2">Crisis Support</h4>
                    <p className="text-yellow-800 mb-4">
                      If you or someone you know is in immediate danger or having thoughts of self-harm, 
                      please reach out for professional help immediately:
                    </p>
                    <ul className="space-y-2 text-yellow-800">
                      <li>• Campus Emergency: Extension 911</li>
                      <li>• Mental Health Helpline: 1800-123-456 (24/7)</li>
                      <li>• Crisis Text Line: Text HOME to 741741</li>
                    </ul>
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

export default PeerSupport;