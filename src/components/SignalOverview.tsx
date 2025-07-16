import React from 'react';
import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

interface Signal {
  id: number;
  name: string;
  source: string;
  strength: number;
  trend: string;
  confidence: number;
  category: string;
  timeToSpike: string;
}

interface SignalOverviewProps {
  signals: Signal[];
  timeframe: string;
  onTimeframeChange: (timeframe: string) => void;
}

export const SignalOverview: React.FC<SignalOverviewProps> = ({
  signals,
  timeframe,
  onTimeframeChange
}) => {
  const getSignalColor = (strength: number) => {
    if (strength >= 80) return 'text-red-400';
    if (strength >= 60) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getSignalBg = (strength: number) => {
    if (strength >= 80) return 'bg-red-500/20';
    if (strength >= 60) return 'bg-yellow-500/20';
    return 'bg-green-500/20';
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'technical': return '🔧';
      case 'bug': return '🐛';
      case 'feature': return '✨';
      case 'competitive': return '⚔️';
      default: return '📊';
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Signal Overview</h2>
        <div className="flex space-x-2">
          {['7d', '30d', '90d'].map((period) => (
            <button
              key={period}
              onClick={() => onTimeframeChange(period)}
              className={`px-3 py-1 rounded text-sm transition-colors ${
                timeframe === period
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {signals.map((signal) => (
          <div
            key={signal.id}
            className={`p-4 rounded-lg border transition-all hover:scale-105 ${getSignalBg(signal.strength)} border-gray-600`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="text-lg">{getCategoryIcon(signal.category)}</span>
                <h3 className="font-medium text-white text-sm">{signal.name}</h3>
              </div>
              <div className="flex items-center space-x-1">
                {signal.trend === 'rising' ? (
                  <TrendingUp className="w-4 h-4 text-red-400" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-green-400" />
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Signal Strength</span>
                <span className={`font-medium ${getSignalColor(signal.strength)}`}>
                  {signal.strength}%
                </span>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${
                    signal.strength >= 80 ? 'bg-red-500' :
                    signal.strength >= 60 ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${signal.strength}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between text-xs text-gray-400">
                <span>Source: {signal.source}</span>
                <span>Confidence: {signal.confidence}%</span>
              </div>
              
              <div className="flex items-center space-x-1 text-xs">
                <AlertTriangle className="w-3 h-3 text-yellow-400" />
                <span className="text-yellow-400">Time to spike: {signal.timeToSpike}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};