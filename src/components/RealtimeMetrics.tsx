import React, { useState, useEffect } from 'react';
import { Activity, TrendingUp, Users, Zap, Eye, AlertCircle } from 'lucide-react';

export const RealtimeMetrics: React.FC = () => {
  const [metrics, setMetrics] = useState({
    signalsProcessed: 2847,
    activeAlerts: 12,
    teamMembers: 8,
    automationActions: 156,
    dataPoints: 45623,
    systemHealth: 98.7
  });

  const [realtimeData, setRealtimeData] = useState([
    { time: '10:00', signals: 45, alerts: 2 },
    { time: '10:05', signals: 52, alerts: 1 },
    { time: '10:10', signals: 48, alerts: 3 },
    { time: '10:15', signals: 61, alerts: 2 },
    { time: '10:20', signals: 58, alerts: 4 },
    { time: '10:25', signals: 67, alerts: 1 },
    { time: '10:30', signals: 73, alerts: 2 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        signalsProcessed: prev.signalsProcessed + Math.floor(Math.random() * 5),
        activeAlerts: Math.max(0, prev.activeAlerts + (Math.random() > 0.7 ? 1 : -1)),
        automationActions: prev.automationActions + Math.floor(Math.random() * 3),
        dataPoints: prev.dataPoints + Math.floor(Math.random() * 20),
        systemHealth: Math.max(95, Math.min(100, prev.systemHealth + (Math.random() - 0.5) * 2))
      }));

      setRealtimeData(prev => {
        const newData = [...prev.slice(1)];
        const now = new Date();
        const timeStr = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
        newData.push({
          time: timeStr,
          signals: Math.floor(Math.random() * 30) + 40,
          alerts: Math.floor(Math.random() * 5)
        });
        return newData;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const metricCards = [
    {
      title: 'Signals Processed',
      value: metrics.signalsProcessed.toLocaleString(),
      change: '+12%',
      icon: Activity,
      color: 'text-blue-400'
    },
    {
      title: 'Active Alerts',
      value: metrics.activeAlerts,
      change: '-3%',
      icon: AlertCircle,
      color: 'text-red-400'
    },
    {
      title: 'Team Members',
      value: metrics.teamMembers,
      change: '+2',
      icon: Users,
      color: 'text-green-400'
    },
    {
      title: 'Automation Actions',
      value: metrics.automationActions,
      change: '+28%',
      icon: Zap,
      color: 'text-yellow-400'
    },
    {
      title: 'Data Points',
      value: metrics.dataPoints.toLocaleString(),
      change: '+5%',
      icon: Eye,
      color: 'text-purple-400'
    },
    {
      title: 'System Health',
      value: `${metrics.systemHealth.toFixed(1)}%`,
      change: '+0.2%',
      icon: TrendingUp,
      color: 'text-green-400'
    }
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Activity className="w-6 h-6 text-green-400" />
          <h2 className="text-xl font-semibold text-white">Real-time Metrics</h2>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-green-400">Live</span>
        </div>
      </div>
      
      {/* Metric Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {metricCards.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={index}
              className="p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/80 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={`w-4 h-4 ${metric.color}`} />
                <span className="text-xs text-green-400">{metric.change}</span>
              </div>
              <p className="text-lg font-bold text-white">{metric.value}</p>
              <p className="text-xs text-gray-400">{metric.title}</p>
            </div>
          );
        })}
      </div>
      
      {/* Real-time Chart */}
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-300 mb-3">Signal Processing (Last 30 mins)</h3>
        <div className="flex items-end space-x-1 h-20">
          {realtimeData.map((data, i) => (
            <div key={i} className="flex-1 flex flex-col items-center">
              <div
                className="w-full bg-blue-500 rounded-t transition-all duration-500"
                style={{ height: `${(data.signals / 80) * 100}%` }}
              ></div>
              <span className="text-xs text-gray-400 mt-1">{data.time}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* System Status */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-3 bg-green-900/20 rounded-lg border border-green-700/50">
          <div className="flex items-center space-x-2 mb-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-green-400">All Systems Operational</span>
          </div>
          <p className="text-xs text-gray-300">6 data sources connected</p>
        </div>
        
        <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-700/50">
          <div className="flex items-center space-x-2 mb-1">
            <Activity className="w-3 h-3 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Processing Rate</span>
          </div>
          <p className="text-xs text-gray-300">847 signals/hour</p>
        </div>
      </div>
    </div>
  );
};