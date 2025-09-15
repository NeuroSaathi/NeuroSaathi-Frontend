import React, { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  Calendar,
  Download,
  Filter,
  PieChart,
  Activity
} from 'lucide-react';

const AdminPanel: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('overview');

  const stats = {
    totalStudents: 1247,
    activeUsers: 89,
    riskAlerts: 5,
    sessionsCompleted: 234,
    resourceViews: 1564,
    peerInteractions: 342
  };

  const riskDistribution = {
    low: 78,
    medium: 15,
    high: 7
  };

  const trendsData = [
    { month: 'Jan', sessions: 45, assessments: 89, resources: 156 },
    { month: 'Feb', sessions: 52, assessments: 96, resources: 178 },
    { month: 'Mar', sessions: 67, assessments: 112, resources: 203 },
    { month: 'Apr', sessions: 71, assessments: 134, resources: 234 },
    { month: 'May', sessions: 83, assessments: 145, resources: 267 },
    { month: 'Jun', sessions: 92, assessments: 167, resources: 298 }
  ];

  const highRiskStudents = [
    { id: 'STU001', riskLevel: 'High', lastAssessment: '2 days ago', score: 19, engaged: true },
    { id: 'STU042', riskLevel: 'High', lastAssessment: '1 day ago', score: 21, engaged: false },
    { id: 'STU089', riskLevel: 'High', lastAssessment: '3 days ago', score: 18, engaged: true },
    { id: 'STU156', riskLevel: 'Moderate', lastAssessment: '1 day ago', score: 14, engaged: true },
    { id: 'STU203', riskLevel: 'Moderate', lastAssessment: '4 days ago', score: 16, engaged: false }
  ];

  const institutionalMetrics = [
    { metric: 'Student Wellbeing Index', value: 85, target: 90, status: 'improving' },
    { metric: 'Resource Utilization', value: 72, target: 80, status: 'stable' },
    { metric: 'Crisis Response Time', value: '< 1 hour', target: '< 30 min', status: 'needs_improvement' },
    { metric: 'Counselor Availability', value: 94, target: 95, status: 'good' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Administrative Dashboard</h2>
        <p className="text-gray-600">Mental Health System Analytics & Management</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Time Period:</span>
            </div>
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
        {[
          { label: 'Total Students', value: stats.totalStudents, icon: Users, color: 'bg-blue-500' },
          { label: 'Active Users', value: stats.activeUsers, icon: Activity, color: 'bg-green-500' },
          { label: 'Risk Alerts', value: stats.riskAlerts, icon: AlertTriangle, color: 'bg-red-500' },
          { label: 'Sessions', value: stats.sessionsCompleted, icon: Calendar, color: 'bg-purple-500' },
          { label: 'Resource Views', value: stats.resourceViews, icon: BarChart3, color: 'bg-orange-500' },
          { label: 'Peer Interactions', value: stats.peerInteractions, icon: Users, color: 'bg-pink-500' }
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value.toLocaleString()}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Risk Distribution */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <PieChart className="h-5 w-5" />
            <span>Risk Level Distribution</span>
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Low Risk</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold text-gray-900">{riskDistribution.low}%</span>
                <div className="w-24 bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: `${riskDistribution.low}%` }}></div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Medium Risk</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold text-gray-900">{riskDistribution.medium}%</span>
                <div className="w-24 bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${riskDistribution.medium * 4}%` }}></div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">High Risk</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold text-gray-900">{riskDistribution.high}%</span>
                <div className="w-24 bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: `${riskDistribution.high * 4}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trends Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>Usage Trends</span>
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-xs text-gray-600">Sessions</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-600">Assessments</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-xs text-gray-600">Resources</span>
              </div>
            </div>
            <div className="h-40 bg-gray-50 rounded-lg flex items-end justify-around p-4">
              {trendsData.map((data, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <div className="flex space-x-1">
                    <div className="bg-blue-500 w-2" style={{ height: `${data.sessions / 2}px` }}></div>
                    <div className="bg-green-500 w-2" style={{ height: `${data.assessments / 3}px` }}></div>
                    <div className="bg-orange-500 w-2" style={{ height: `${data.resources / 5}px` }}></div>
                  </div>
                  <span className="text-xs text-gray-600">{data.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* High Priority Students */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5 text-red-500" />
          <span>Students Requiring Attention</span>
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Student ID</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Risk Level</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Last Assessment</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Score</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {highRiskStudents.map((student) => (
                <tr key={student.id} className="border-b border-gray-100">
                  <td className="py-3 px-4 font-mono text-sm">{student.id}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      student.riskLevel === 'High' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {student.riskLevel}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">{student.lastAssessment}</td>
                  <td className="py-3 px-4 text-sm font-mono">{student.score}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      student.engaged 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {student.engaged ? 'Engaged' : 'Not Engaged'}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Flag for Follow-up
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Institutional Metrics */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <BarChart3 className="h-5 w-5" />
          <span>Institutional Performance Indicators</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {institutionalMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <h4 className="text-sm font-medium text-gray-700 mb-2">{metric.metric}</h4>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {typeof metric.value === 'number' ? `${metric.value}%` : metric.value}
              </div>
              <div className="text-xs text-gray-500 mb-2">
                Target: {typeof metric.target === 'number' ? `${metric.target}%` : metric.target}
              </div>
              <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                metric.status === 'improving' ? 'bg-green-100 text-green-800' :
                metric.status === 'good' ? 'bg-blue-100 text-blue-800' :
                metric.status === 'stable' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {metric.status === 'improving' ? 'Improving' :
                 metric.status === 'good' ? 'Good' :
                 metric.status === 'stable' ? 'Stable' :
                 'Needs Attention'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;