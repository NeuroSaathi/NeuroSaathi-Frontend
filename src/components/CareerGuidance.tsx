import React, { useState } from 'react';
import { 
  Briefcase, 
  TrendingUp, 
  Target, 
  BookOpen, 
  Award, 
  Users, 
  Brain,
  Lightbulb,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';

const CareerGuidance: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTest, setSelectedTest] = useState('');
  const [testResults, setTestResults] = useState(null);

  const psychometricTests = [
    {
      id: 'mbti',
      name: 'Myers-Briggs Type Indicator (MBTI)',
      description: 'Discover your personality type and ideal career matches',
      duration: '15-20 minutes',
      categories: ['Personality', 'Work Style'],
      icon: Brain,
      color: 'bg-purple-500'
    },
    {
      id: 'big5',
      name: 'Big Five Personality Test',
      description: 'Understand your core personality traits for career alignment',
      duration: '10-15 minutes',
      categories: ['Personality', 'Behavior'],
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      id: 'holland',
      name: 'Holland Code Career Test',
      description: 'Find careers that match your interests and work environment preferences',
      duration: '12-18 minutes',
      categories: ['Interests', 'Environment'],
      icon: Target,
      color: 'bg-green-500'
    },
    {
      id: 'strengths',
      name: 'StrengthsFinder Assessment',
      description: 'Identify your top strengths and how to leverage them professionally',
      duration: '20-25 minutes',
      categories: ['Strengths', 'Skills'],
      icon: Award,
      color: 'bg-orange-500'
    }
  ];

  const careerPaths = [
    {
      title: 'Technology & Engineering',
      description: 'Software development, AI, cybersecurity, and engineering roles',
      growth: '+15%',
      avgSalary: '₹8-25 LPA',
      skills: ['Programming', 'Problem Solving', 'Analytics'],
      mentalHealthFit: 'Good for analytical minds, structured thinking',
      opportunities: 1247,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      title: 'Healthcare & Psychology',
      description: 'Mental health counseling, clinical psychology, healthcare administration',
      growth: '+12%',
      avgSalary: '₹6-20 LPA',
      skills: ['Empathy', 'Communication', 'Research'],
      mentalHealthFit: 'Perfect for those passionate about helping others',
      opportunities: 892,
      image: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      title: 'Creative & Design',
      description: 'Graphic design, content creation, digital marketing, UX/UI design',
      growth: '+8%',
      avgSalary: '₹5-18 LPA',
      skills: ['Creativity', 'Visual Design', 'Communication'],
      mentalHealthFit: 'Great for expressive personalities, flexible schedules',
      opportunities: 634,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      title: 'Business & Management',
      description: 'Project management, consulting, entrepreneurship, finance',
      growth: '+10%',
      avgSalary: '₹7-30 LPA',
      skills: ['Leadership', 'Strategy', 'Communication'],
      mentalHealthFit: 'Suitable for goal-oriented, social personalities',
      opportunities: 1156,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  const skillRecommendations = [
    {
      category: 'Technical Skills',
      skills: [
        { name: 'Python Programming', demand: 'High', difficulty: 'Medium', timeToLearn: '3-6 months' },
        { name: 'Data Analysis', demand: 'High', difficulty: 'Medium', timeToLearn: '2-4 months' },
        { name: 'Digital Marketing', demand: 'High', difficulty: 'Low', timeToLearn: '1-3 months' },
        { name: 'UI/UX Design', demand: 'Medium', difficulty: 'Medium', timeToLearn: '4-8 months' }
      ]
    },
    {
      category: 'Soft Skills',
      skills: [
        { name: 'Communication', demand: 'High', difficulty: 'Low', timeToLearn: 'Ongoing' },
        { name: 'Leadership', demand: 'High', difficulty: 'Medium', timeToLearn: 'Ongoing' },
        { name: 'Critical Thinking', demand: 'High', difficulty: 'Medium', timeToLearn: 'Ongoing' },
        { name: 'Emotional Intelligence', demand: 'Medium', difficulty: 'Medium', timeToLearn: 'Ongoing' }
      ]
    }
  ];

  const mentalHealthCareerTips = [
    {
      title: 'Align Career with Values',
      description: 'Choose careers that match your personal values and mental health needs',
      icon: Target,
      tips: [
        'Consider work-life balance requirements',
        'Evaluate stress levels of different roles',
        'Think about social interaction preferences',
        'Assess creativity and autonomy needs'
      ]
    },
    {
      title: 'Manage Career Anxiety',
      description: 'Strategies to reduce career-related stress and uncertainty',
      icon: Brain,
      tips: [
        'Break career goals into smaller steps',
        'Practice informational interviews',
        'Build a support network in your field',
        'Develop coping strategies for rejection'
      ]
    },
    {
      title: 'Build Resilience',
      description: 'Develop mental strength for career challenges',
      icon: Award,
      tips: [
        'Learn from setbacks and failures',
        'Maintain growth mindset',
        'Seek mentorship and guidance',
        'Practice self-compassion'
      ]
    }
  ];

  const handleTestStart = (testId: string) => {
    setSelectedTest(testId);
    // Simulate test completion
    setTimeout(() => {
      setTestResults({
        testId,
        personalityType: 'ENFP - The Campaigner',
        careerMatches: ['Psychology', 'Marketing', 'Teaching', 'Counseling'],
        strengths: ['Creativity', 'Empathy', 'Communication', 'Innovation'],
        recommendations: 'Focus on people-oriented careers with creative freedom'
      });
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Career Guidance & Development</h2>
        <p className="text-gray-600">Discover your ideal career path through psychometric assessments and personalized guidance</p>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'overview', label: 'Career Overview', icon: Briefcase },
              { id: 'tests', label: 'Psychometric Tests', icon: Brain },
              { id: 'paths', label: 'Career Paths', icon: TrendingUp },
              { id: 'skills', label: 'Skill Development', icon: BookOpen },
              { id: 'wellness', label: 'Career Wellness', icon: Target }
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
              {/* Career Readiness Score */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Career Readiness Score</h3>
                    <p className="text-blue-100">Based on your assessments and profile</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold">78%</div>
                    <div className="text-blue-100 text-sm">Good Progress</div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { label: 'Tests Completed', value: '3/5', icon: CheckCircle, color: 'text-green-600' },
                  { label: 'Career Matches', value: '12', icon: Target, color: 'text-blue-600' },
                  { label: 'Skills Identified', value: '8', icon: Award, color: 'text-purple-600' },
                  { label: 'Action Items', value: '5', icon: ArrowRight, color: 'text-orange-600' }
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

              {/* Recommended Actions */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Next Steps</h3>
                <div className="space-y-4">
                  {[
                    { action: 'Complete Holland Code Career Test', priority: 'High', time: '15 min' },
                    { action: 'Explore Healthcare & Psychology career path', priority: 'Medium', time: '10 min' },
                    { action: 'Develop Communication skills', priority: 'Medium', time: 'Ongoing' },
                    { action: 'Connect with career mentor', priority: 'Low', time: '30 min' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{item.action}</p>
                        <p className="text-sm text-gray-600">Estimated time: {item.time}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.priority === 'High' ? 'bg-red-100 text-red-800' :
                          item.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {item.priority}
                        </span>
                        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                          Start
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tests' && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Psychometric Assessments</h3>
                <p className="text-blue-800 text-sm">
                  Take scientifically-validated tests to understand your personality, interests, and career preferences
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {psychometricTests.map((test) => {
                  const Icon = test.icon;
                  return (
                    <div key={test.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className={`${test.color} p-3 rounded-lg`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{test.name}</h4>
                          <p className="text-gray-600 text-sm mb-3">{test.description}</p>
                          
                          <div className="flex items-center space-x-4 mb-4">
                            <span className="text-xs text-gray-500">Duration: {test.duration}</span>
                            <div className="flex space-x-1">
                              {test.categories.map((category, index) => (
                                <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                                  {category}
                                </span>
                              ))}
                            </div>
                          </div>

                          <button
                            onClick={() => handleTestStart(test.id)}
                            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Start Assessment
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {testResults && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-4">Assessment Results</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Personality Type</h4>
                      <p className="text-green-800 font-semibold">{testResults.personalityType}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Top Career Matches</h4>
                      <div className="flex flex-wrap gap-2">
                        {testResults.careerMatches.map((career, index) => (
                          <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                            {career}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'paths' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {careerPaths.map((path, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                    <img src={path.image} alt={path.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{path.title}</h3>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                          {path.growth} growth
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{path.description}</p>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Average Salary:</span>
                          <span className="font-medium text-gray-900">{path.avgSalary}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Open Positions:</span>
                          <span className="font-medium text-gray-900">{path.opportunities.toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Key Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {path.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-4">
                        <h4 className="text-sm font-medium text-purple-900 mb-1">Mental Health Fit:</h4>
                        <p className="text-purple-800 text-xs">{path.mentalHealthFit}</p>
                      </div>

                      <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Explore Career Path
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-6">
              {skillRecommendations.map((category, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{skill.name}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            skill.demand === 'High' ? 'bg-green-100 text-green-800' :
                            skill.demand === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {skill.demand} Demand
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                          <span>Difficulty: {skill.difficulty}</span>
                          <span>Time: {skill.timeToLearn}</span>
                        </div>
                        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                          Start Learning
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'wellness' && (
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Career & Mental Health Integration</h3>
                <p className="text-green-800 text-sm">
                  Learn how to align your career choices with your mental health needs and build resilience for professional success
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {mentalHealthCareerTips.map((tip, index) => {
                  const Icon = tip.icon;
                  return (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-900">{tip.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{tip.description}</p>
                      <ul className="space-y-2">
                        {tip.tips.map((tipItem, tipIndex) => (
                          <li key={tipIndex} className="flex items-start space-x-2">
                            <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{tipItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerGuidance;