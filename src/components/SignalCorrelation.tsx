import React from 'react';
import { GitBranch, Link, TrendingUp, AlertTriangle } from 'lucide-react';

interface SignalCorrelationProps {
  signals: any[];
}

export const SignalCorrelation: React.FC<SignalCorrelationProps> = ({ signals }) => {
  const correlations = [
    {
      id: 1,
      primarySignal: 'API Rate Limiting Complaints',
      secondarySignal: 'Mobile App Crashes',
      correlation: 0.87,
      strength: 'strong',
      direction: 'positive',
      confidence: 94,
      timeDelay: '2-4 hours',
      description: 'API issues typically precede mobile crashes due to shared infrastructure'
    },
    {
      id: 2,
      primarySignal: 'Support Ticket Volume',
      secondarySignal: 'Social Media Sentiment',
      correlation: -0.73,
      strength: 'strong',
      direction: 'negative',
      confidence: 89,
      timeDelay: '6-12 hours',
      description: 'Increased support tickets correlate with declining social sentiment'
    },
    {
      id: 3,
      primarySignal: 'Feature Request Mentions',
      secondarySignal: 'Competitor Analysis',
      correlation: 0.65,
      strength: 'moderate',
      direction: 'positive',
      confidence: 82,
      timeDelay: '1-2 days',
      description: 'Feature requests often spike after competitor feature releases'
    },
    {
      id: 4,
      primarySignal: 'Performance Complaints',
      secondarySignal: 'User Churn Indicators',
      correlation: 0.71,
      strength: 'strong',
      direction: 'positive',
      confidence: 91,
      timeDelay: '3-7 days',
      description: 'Performance issues lead to increased churn with typical delay'
    }
  ];

  const getCorrelationColor = (correlation: number) => {
    const abs = Math.abs(correlation);
    if (abs >= 0.8) return 'text-red-400';
    if (abs >= 0.6) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getStrengthColor = (strength: string) => {
    switch (strength) {
      case 'strong': return 'bg-red-500/20 text-red-400';
      case 'moderate': return 'bg-yellow-500/20 text-yellow-400';
      case 'weak': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getDirectionIcon = (direction: string) => {
    return direction === 'positive' ? '↗️' : '↘️';
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <GitBranch className="w-6 h-6 text-cyan-400" />
          <h2 className="text-xl font-semibold text-white">Signal Correlation Analysis</h2>
        </div>
        <div className="text-sm text-gray-400">ML-Powered Insights</div>
      </div>
      
      <div className="space-y-4">
        {correlations.map((correlation) => (
          <div
            key={correlation.id}
            className="p-4 bg-gray-700/50 rounded-lg border border-gray-600 hover:bg-gray-700/80 transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Link className="w-4 h-4 text-cyan-400" />
                <div>
                  <h3 className="font-medium text-white text-sm">
                    {correlation.primarySignal} ↔ {correlation.secondarySignal}
                  </h3>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg">{getDirectionIcon(correlation.direction)}</span>
                <span className={`text-sm font-medium ${getCorrelationColor(correlation.correlation)}`}>
                  r = {correlation.correlation.toFixed(2)}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-3">
              <div>
                <p className="text-xs text-gray-400">Strength</p>
                <span className={`text-xs px-2 py-1 rounded-full ${getStrengthColor(correlation.strength)}`}>
                  {correlation.strength.toUpperCase()}
                </span>
              </div>
              <div>
                <p className="text-xs text-gray-400">Confidence</p>
                <p className="text-sm font-medium text-blue-400">{correlation.confidence}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Time Delay</p>
                <p className="text-sm font-medium text-gray-300">{correlation.timeDelay}</p>
              </div>
            </div>
            
            <div className="mb-3">
              <div className="w-full bg-gray-600 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    Math.abs(correlation.correlation) >= 0.8 ? 'bg-red-500' :
                    Math.abs(correlation.correlation) >= 0.6 ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${Math.abs(correlation.correlation) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="p-3 bg-cyan-900/20 rounded border border-cyan-700/50">
              <div className="flex items-center space-x-2 mb-1">
                <TrendingUp className="w-3 h-3 text-cyan-400" />
                <span className="text-xs font-medium text-cyan-400">Analysis</span>
              </div>
              <p className="text-xs text-gray-300">{correlation.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="p-4 bg-cyan-900/20 rounded-lg border border-cyan-700/50">
          <div className="flex items-center space-x-2 mb-2">
            <GitBranch className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">Strong Correlations</span>
          </div>
          <p className="text-2xl font-bold text-white">4</p>
          <p className="text-xs text-gray-400">Above 0.7 threshold</p>
        </div>
        
        <div className="p-4 bg-yellow-900/20 rounded-lg border border-yellow-700/50">
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">Predictive Power</span>
          </div>
          <p className="text-2xl font-bold text-white">89%</p>
          <p className="text-xs text-gray-400">Average accuracy</p>
        </div>
      </div>
    </div>
  );
};