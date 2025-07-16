import React, { useState } from 'react';
import { Users, MessageSquare, Share2, Bell, User, Clock } from 'lucide-react';

export const CollaborationHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState('team');

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Product Manager',
      avatar: '👩‍💼',
      status: 'online',
      assignedSignals: 3,
      lastActive: 'now'
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      role: 'Engineering Lead',
      avatar: '👨‍💻',
      status: 'online',
      assignedSignals: 5,
      lastActive: '2m ago'
    },
    {
      id: 3,
      name: 'Emma Thompson',
      role: 'Data Analyst',
      avatar: '👩‍🔬',
      status: 'away',
      assignedSignals: 2,
      lastActive: '15m ago'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'UX Designer',
      avatar: '👨‍🎨',
      status: 'offline',
      assignedSignals: 1,
      lastActive: '2h ago'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      user: 'Sarah Chen',
      action: 'escalated signal',
      target: 'API Rate Limiting',
      timestamp: '2 mins ago',
      type: 'escalation'
    },
    {
      id: 2,
      user: 'Mike Rodriguez',
      action: 'commented on',
      target: 'Mobile App Crashes',
      timestamp: '5 mins ago',
      type: 'comment'
    },
    {
      id: 3,
      user: 'Emma Thompson',
      action: 'updated risk assessment for',
      target: 'Feature Request Analysis',
      timestamp: '12 mins ago',
      type: 'update'
    },
    {
      id: 4,
      user: 'David Kim',
      action: 'shared report',
      target: 'Q4 Signal Summary',
      timestamp: '1h ago',
      type: 'share'
    }
  ];

  const notifications = [
    {
      id: 1,
      message: 'New critical signal requires immediate attention',
      type: 'urgent',
      timestamp: '1 min ago'
    },
    {
      id: 2,
      message: 'Weekly signal report is ready for review',
      type: 'info',
      timestamp: '30 mins ago'
    },
    {
      id: 3,
      message: 'Workflow automation completed 12 actions',
      type: 'success',
      timestamp: '1h ago'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'escalation': return '🚨';
      case 'comment': return '💬';
      case 'update': return '📝';
      case 'share': return '📤';
      default: return '📊';
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'urgent': return 'border-red-500/50 bg-red-500/10';
      case 'success': return 'border-green-500/50 bg-green-500/10';
      case 'info': return 'border-blue-500/50 bg-blue-500/10';
      default: return 'border-gray-500/50 bg-gray-500/10';
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Users className="w-6 h-6 text-blue-400" />
          <h2 className="text-xl font-semibold text-white">Collaboration Hub</h2>
        </div>
        <div className="flex space-x-2">
          {['team', 'activity', 'notifications'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded text-sm transition-colors capitalize ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      {activeTab === 'team' && (
        <div className="space-y-3">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/80 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <span className="text-2xl">{member.avatar}</span>
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-800 ${getStatusColor(member.status)}`}></div>
                </div>
                <div>
                  <h3 className="font-medium text-white">{member.name}</h3>
                  <p className="text-sm text-gray-400">{member.role}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-blue-400">{member.assignedSignals} signals</p>
                <p className="text-xs text-gray-400">{member.lastActive}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {activeTab === 'activity' && (
        <div className="space-y-3">
          {recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-3 p-3 bg-gray-700/50 rounded-lg"
            >
              <span className="text-lg">{getActivityIcon(activity.type)}</span>
              <div className="flex-1">
                <p className="text-sm text-gray-300">
                  <span className="font-medium text-white">{activity.user}</span>
                  {' '}{activity.action}{' '}
                  <span className="font-medium text-blue-400">{activity.target}</span>
                </p>
                <div className="flex items-center space-x-1 mt-1">
                  <Clock className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-400">{activity.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {activeTab === 'notifications' && (
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-3 rounded-lg border ${getNotificationColor(notification.type)}`}
            >
              <p className="text-sm text-gray-300">{notification.message}</p>
              <div className="flex items-center space-x-1 mt-1">
                <Clock className="w-3 h-3 text-gray-400" />
                <span className="text-xs text-gray-400">{notification.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-6 flex space-x-2">
        <button className="flex items-center space-x-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex-1">
          <MessageSquare className="w-4 h-4" />
          <span className="text-sm">Start Discussion</span>
        </button>
        <button className="flex items-center space-x-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors flex-1">
          <Share2 className="w-4 h-4" />
          <span className="text-sm">Share Report</span>
        </button>
      </div>
    </div>
  );
};