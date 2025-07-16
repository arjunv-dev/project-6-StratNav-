import React from 'react';
import { BarChart3, TrendingUp, Eye } from 'lucide-react';

interface TrendAnalysisProps {
  timeframe: string;
}

export const TrendAnalysis: React.FC<TrendAnalysisProps> = ({ timeframe }) => {
  const trends = [
    {
      category: 'Technical Issues',
      current: 85,
      previous: 72,
      change: '+18%',
      trend: 'up',
      predictions: '📈 Expected to spike in 30-45 days'
    },
    {
      category: 'Feature Requests',
      current: 68,
      previous: 61,
      change: '+11%',
      trend: 'up',
      predictions: '📊 Moderate growth expected'
    },
    {
      category: 'Bug Reports',
      current: 74,
      previous: 89,
      change: '-17%',
      trend: 'down',
      predictions: '📉 Declining trend confirmed'
    },
    {
      category: 'Competitive Mentions',
      current: 56,
      previous: 45,
      change: '+24%',
      trend: 'up',
      predictions: '⚠️ Monitor closely for escalation'
    }
  ];

  const getChangeColor = (trend: string) => {
    return trend === 'up' ? 'text-red-400' : 'text-green-400';
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Trend Analysis</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <BarChart3 className="w-4 h-4" />
          <span>Last {timeframe}</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {trends.map((trend, index) => (
          <div
            key={index}
            className="p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700/80 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-white text-sm">{trend.category}</h3>
              <div className="flex items-center space-x-2">
                <TrendingUp className={`w-4 h-4 ${trend.trend === 'up' ? 'text-red-400' : 'text-green-400 rotate-180'}`} />
                <span className={`text-sm font-medium ${getChangeColor(trend.trend)}`}>
                  {trend.change}
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 mb-2">
              <div className="flex-1">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Previous</span>
                  <span>{trend.previous}</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2 mb-1">
                  <div
                    className="h-2 rounded-full bg-gray-400"
                    style={{ width: `${trend.previous}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Current</span>
                  <span>{trend.current}</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2 mb-1">
                  <div
                    className={`h-2 rounded-full ${
                      trend.trend === 'up' ? 'bg-red-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${trend.current}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Eye className="w-3 h-3 text-blue-400" />
              <p className="text-xs text-blue-400">{trend.predictions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};