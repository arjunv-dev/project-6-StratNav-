import React from 'react';
import { Database, Wifi, WifiOff, Activity } from 'lucide-react';

export const DataSources: React.FC = () => {
  const sources = [
    {
      name: 'Internal Telemetry',
      type: 'internal',
      status: 'connected',
      lastUpdate: '2 mins ago',
      signals: 156,
      icon: '📊'
    },
    {
      name: 'Reddit API',
      type: 'external',
      status: 'connected',
      lastUpdate: '1 min ago',
      signals: 89,
      icon: '🔶'
    },
    {
      name: 'Twitter API',
      type: 'external',
      status: 'connected',
      lastUpdate: '30 secs ago',
      signals: 234,
      icon: '🐦'
    },
    {
      name: 'Hacker News',
      type: 'external',
      status: 'connected',
      lastUpdate: '5 mins ago',
      signals: 42,
      icon: '🔶'
    },
    {
      name: 'Bug Reports',
      type: 'internal',
      status: 'connected',
      lastUpdate: '1 min ago',
      signals: 67,
      icon: '🐛'
    },
    {
      name: 'Support Tickets',
      type: 'internal',
      status: 'warning',
      lastUpdate: '15 mins ago',
      signals: 123,
      icon: '🎧'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'error': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected': return <Wifi className="w-4 h-4" />;
      case 'warning': return <Activity className="w-4 h-4" />;
      case 'error': return <WifiOff className="w-4 h-4" />;
      default: return <Database className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <h2 className="text-xl font-semibold text-white mb-6">Data Sources</h2>
      
      <div className="space-y-4">
        {sources.map((source, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/80 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <span className="text-lg">{source.icon}</span>
              <div>
                <h3 className="font-medium text-white text-sm">{source.name}</h3>
                <p className="text-xs text-gray-400">
                  {source.type === 'internal' ? 'Internal' : 'External'} • {source.signals} signals
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="text-right">
                <div className={`flex items-center space-x-1 ${getStatusColor(source.status)}`}>
                  {getStatusIcon(source.status)}
                  <span className="text-xs capitalize">{source.status}</span>
                </div>
                <p className="text-xs text-gray-400">{source.lastUpdate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-700/50">
        <div className="flex items-center space-x-2 mb-2">
          <Activity className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-medium text-blue-400">AI Processing Status</span>
        </div>
        <p className="text-xs text-gray-300">
          Processing 711 signals across 6 sources • Next analysis in 2 minutes
        </p>
      </div>
    </div>
  );
};