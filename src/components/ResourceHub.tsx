import React, { useState } from 'react';
import { Play, Download, BookOpen, Headphones, Video, FileText, Search, Filter } from 'lucide-react';

const ResourceHub: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Resources', count: 48 },
    { id: 'anxiety', label: 'Anxiety Management', count: 12 },
    { id: 'depression', label: 'Depression Support', count: 8 },
    { id: 'stress', label: 'Stress Relief', count: 15 },
    { id: 'sleep', label: 'Sleep Health', count: 6 },
    { id: 'relationships', label: 'Relationships', count: 7 }
  ];

  const languages = [
    { id: 'all', label: 'All Languages' },
    { id: 'english', label: 'English' },
    { id: 'hindi', label: 'हिंदी' },
    { id: 'urdu', label: 'اردو' },
    { id: 'punjabi', label: 'ਪੰਜਾਬੀ' },
    { id: 'kashmiri', label: 'कॉशुर' }
  ];

  const resources = [
    {
      id: 1,
      title: 'Understanding Anxiety: A Student\'s Guide',
      type: 'video',
      category: 'anxiety',
      language: 'english',
      duration: '15 min',
      description: 'Learn about anxiety symptoms and practical coping strategies',
      thumbnail: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      views: 1247,
      rating: 4.8
    },
    {
      id: 2,
      title: 'तनाव प्रबंधन तकनीकें',
      type: 'audio',
      category: 'stress',
      language: 'hindi',
      duration: '20 min',
      description: 'Stress management techniques explained in Hindi',
      thumbnail: 'https://images.pexels.com/photos/3779448/pexels-photo-3779448.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      views: 823,
      rating: 4.6
    },
    {
      id: 3,
      title: 'Sleep Hygiene for Better Mental Health',
      type: 'pdf',
      category: 'sleep',
      language: 'english',
      duration: '5 min read',
      description: 'Evidence-based tips for improving sleep quality',
      thumbnail: 'https://images.pexels.com/photos/935777/pexels-photo-935777.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      views: 945,
      rating: 4.7
    },
    {
      id: 4,
      title: 'Depression Ke Sath Jeevan Jeena',
      type: 'video',
      category: 'depression',
      language: 'urdu',
      duration: '25 min',
      description: 'Living with depression - guidance in Urdu',
      thumbnail: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      views: 567,
      rating: 4.9
    },
    {
      id: 5,
      title: 'Mindful Breathing Exercises',
      type: 'audio',
      category: 'stress',
      language: 'english',
      duration: '12 min',
      description: 'Guided breathing exercises for immediate stress relief',
      thumbnail: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      views: 1456,
      rating: 4.8
    },
    {
      id: 6,
      title: 'Building Healthy Relationships',
      type: 'pdf',
      category: 'relationships',
      language: 'english',
      duration: '8 min read',
      description: 'Guide to maintaining healthy relationships in college',
      thumbnail: 'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      views: 734,
      rating: 4.5
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'audio': return Headphones;
      case 'pdf': return FileText;
      default: return BookOpen;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-red-100 text-red-600';
      case 'audio': return 'bg-green-100 text-green-600';
      case 'pdf': return 'bg-blue-100 text-blue-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesLanguage = selectedLanguage === 'all' || resource.language === selectedLanguage;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLanguage && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Mental Health Resources</h2>
        <p className="text-gray-600">Access evidence-based materials in your preferred language</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="lg:w-64">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.label} ({category.count})
                </option>
              ))}
            </select>
          </div>

          {/* Language Filter */}
          <div className="lg:w-48">
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {languages.map(language => (
                <option key={language.id} value={language.id}>
                  {language.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => {
          const TypeIcon = getTypeIcon(resource.type);
          return (
            <div key={resource.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              {/* Thumbnail */}
              <div className="relative h-48">
                <img
                  src={resource.thumbnail}
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                    <TypeIcon className="h-3 w-3" />
                    <span>{resource.type.toUpperCase()}</span>
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {resource.duration}
                </div>
                {resource.type === 'video' && (
                  <button className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group">
                    <div className="bg-white rounded-full p-3 group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 text-gray-900 ml-1" />
                    </div>
                  </button>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{resource.views.toLocaleString()} views</span>
                  <div className="flex items-center space-x-1">
                    <span>⭐</span>
                    <span>{resource.rating}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  {resource.type === 'pdf' ? (
                    <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  ) : (
                    <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                      <Play className="h-4 w-4" />
                      <span>{resource.type === 'audio' ? 'Listen' : 'Watch'}</span>
                    </button>
                  )}
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <BookOpen className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
          <p className="text-gray-600">Try adjusting your search criteria or filters</p>
        </div>
      )}

      {/* Featured Collections */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Collections</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Exam Stress Relief',
              description: 'Resources to help manage academic pressure',
              count: 8,
              image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop'
            },
            {
              title: 'Cultural Wellness',
              description: 'Mental health resources respecting local culture',
              count: 12,
              image: 'https://images.pexels.com/photos/8148622/pexels-photo-8148622.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop'
            },
            {
              title: 'Crisis Support',
              description: 'Immediate help resources for difficult times',
              count: 6,
              image: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop'
            }
          ].map((collection, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-1">{collection.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{collection.description}</p>
                <span className="text-xs text-blue-600 font-medium">{collection.count} resources</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceHub;