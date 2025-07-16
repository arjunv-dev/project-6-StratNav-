import React from 'react';
import { TrendingUp, Brain, Calendar, Target } from 'lucide-react';

interface PredictiveAnalyticsProps {
  signals: any[];
  timeframe: string;
}

export const PredictiveAnalytics: React.FC<PredictiveAnalyticsProps> = ({ signals, timeframe }) => {
  const predictions = [
    {
      id: 1,
      title: 'API Rate Limiting Crisis',
      probability: 92,
      timeframe: '30-45 days',
      impact: 'High',
      confidence: 94,
      trend: 'accelerating',
      factors: ['User growth', 'API usage patterns', 'Infrastructure limits'],
      recommendation: 'Implement rate limiting improvements and scale infrastructure'
    },
    {
      id: 2,
      title: 'Mobile App Abandonment Spike',
      probability: 78,
      timeframe: '25-35 days',
      impact: 'Medium',
      confidence: 86,
      trend: 'steady',
      factors: ['Crash reports', 'Performance metrics', 'User feedback'],
      recommendation: 'Prioritize mobile stability fixes and performance optimization'
    },
    {
      id: 3,
      title: 'Feature Request Momentum',
      probability: 68,
      timeframe: '45-60 days',
      impact: 'Medium',
      confidence: 82,
      trend: 'building',
      factors: ['Social mentions', 'Support tickets', 'Competitor analysis'],
      recommendation: 'Evaluate dark mode implementation timeline'
    },
    {
      id: 4,
      title: 'Competitive Threat Escalation',
      probability: 65,
      timeframe: '20-40 days',
      impact: 'High',
      confidence: 79,
      trend: 'emerging',
      factors: ['Market analysis', 'User migration patterns', 'Feature gaps'],
      recommendation: 'Develop competitive response strategy'
    }
  ];

  const getProbabilityColor = (probability: number) => {
    if (probability >= 80) return 'text-red-400';
    if (probability >= 60) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'accelerating': return '🚀';
      case 'steady': return '📈';
      case 'building': return '⚡';
      case 'emerging': return '🌱';
      default: return '📊';
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Brain className="w-6 h-6 text-purple-400" />
          <h2 className="text-xl font-semibold text-white">Predictive Analytics</h2>
        </div>
        <div className="text-sm text-gray-400">AI-Powered Forecasting</div>
      </div>
      
      <div className="space-y-4">
        {predictions.map((prediction) => (
          <div
            key={prediction.id}
            className="p-4 bg-gray-700/50 rounded-lg border border-gray-600 hover:bg-gray-700/80 transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className="text-lg">{getTrendIcon(prediction.trend)}</span>
                <h3 className="font-medium text-white">{prediction.title}</h3>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-400">{prediction.timeframe}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-3">
              <div>
                <p className="text-xs text-gray-400">Probability</p>
                <p className={`font-medium ${getProbabilityColor(prediction.probability)}`}>
                  {prediction.probability}%
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Impact</p>
                <p className={`font-medium ${
                  prediction.impact === 'High' ? 'text-red-400' : 
                  prediction.impact === 'Medium' ? 'text-yellow-400' : 'text-green-400'
                }`}>
                  {prediction.impact}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Confidence</p>
                <p className="font-medium text-blue-400">{prediction.confidence}%</p>
              </div>
            </div>
            
            <div className="mb-3">
              <div className="w-full bg-gray-600 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    prediction.probability >= 80 ? 'bg-red-500' :
                    prediction.probability >= 60 ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${prediction.probability}%` }}
                ></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div>
                <p className="text-xs text-gray-400 font-medium">Key Factors:</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {prediction.factors.map((factor, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-purple-900/30 text-purple-300 rounded"
                    >
                      {factor}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-xs text-gray-400 font-medium">AI Recommendation:</p>
                <p className="text-xs text-gray-300 mt-1">{prediction.recommendation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-purple-900/20 rounded-lg border border-purple-700/50">
        <div className="flex items-center space-x-2 mb-2">
          <Target className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium text-purple-400">Prediction Accuracy</span>
        </div>
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <p className="text-gray-400">30-day accuracy</p>
            <p className="text-white font-medium">87.3%</p>
          </div>
          <div>
            <p className="text-gray-400">60-day accuracy</p>
            <p className="text-white font-medium">82.1%</p>
          </div>
        </div>
      </div>
    </div>
  );
};