import React from 'react';
import { Brain, Lightbulb, Target, Zap } from 'lucide-react';

interface AIInsightsProps {
  signals: any[];
}

export const AIInsights: React.FC<AIInsightsProps> = ({ signals }) => {
  const insights = [
    {
      id: 1,
      type: 'pattern',
      title: 'Cross-Platform Correlation Detected',
      description: 'API rate limiting complaints on Reddit strongly correlate with mobile app crashes (r=0.87)',
      confidence: 94,
      actionable: true,
      recommendation: 'Investigate shared infrastructure bottlenecks',
      impact: 'high'
    },
    {
      id: 2,
      type: 'anomaly',
      title: 'Unusual Sentiment Shift',
      description: 'Twitter sentiment dropped 23% faster than historical patterns suggest',
      confidence: 89,
      actionable: true,
      recommendation: 'Deploy sentiment monitoring to identify root cause',
      impact: 'medium'
    },
    {
      id: 3,
      type: 'prediction',
      title: 'Feature Request Momentum Building',
      description: 'Dark mode requests following exponential growth pattern similar to previous feature adoptions',
      confidence: 82,
      actionable: false,
      recommendation: 'Consider prioritizing in next sprint planning',
      impact: 'medium'
    },
    {
      id: 4,
      type: 'opportunity',
      title: 'Competitive Advantage Window',
      description: 'Competitor downtime created 15% increase in positive mentions - opportunity to capture users',
      confidence: 91,
      actionable: true,
      recommendation: 'Launch targeted marketing campaign within 48 hours',
      impact: 'high'
    }
  ];

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'pattern': return '🔍';
      case 'anomaly': return '⚠️';
      case 'prediction': return '🔮';
      case 'opportunity': return '💡';
      default: return '🤖';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Brain className="w-6 h-6 text-purple-400" />
          <h2 className="text-xl font-semibold text-white">AI Insights</h2>
        </div>
        <div className="text-sm text-gray-400">GPT-4 Analysis</div>
      </div>
      
      <div className="space-y-4">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className="p-4 bg-gray-700/50 rounded-lg border border-gray-600 hover:bg-gray-700/80 transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className="text-lg">{getInsightIcon(insight.type)}</span>
                <h3 className="font-medium text-white">{insight.title}</h3>
              </div>
              <div className="flex items-center space-x-2">
                {insight.actionable && (
                  <Zap className="w-4 h-4 text-yellow-400" title="Actionable" />
                )}
                <span className={`text-xs px-2 py-1 rounded-full ${getImpactColor(insight.impact)} bg-current/20`}>
                  {insight.impact.toUpperCase()}
                </span>
              </div>
            </div>
            
            <p className="text-sm text-gray-300 mb-3">{insight.description}</p>
            
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Target className="w-3 h-3 text-blue-400" />
                  <span className="text-xs text-blue-400">Confidence: {insight.confidence}%</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-xs text-gray-400 capitalize">Type: {insight.type}</span>
                </div>
              </div>
            </div>
            
            <div className="p-3 bg-purple-900/20 rounded border border-purple-700/50">
              <div className="flex items-center space-x-2 mb-1">
                <Lightbulb className="w-3 h-3 text-purple-400" />
                <span className="text-xs font-medium text-purple-400">AI Recommendation</span>
              </div>
              <p className="text-xs text-gray-300">{insight.recommendation}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-purple-900/20 rounded-lg border border-purple-700/50">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium text-purple-400">AI Processing Status</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-400">Active</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 text-xs">
          <div>
            <p className="text-gray-400">Signals Analyzed</p>
            <p className="text-white font-medium">2,847</p>
          </div>
          <div>
            <p className="text-gray-400">Patterns Found</p>
            <p className="text-white font-medium">23</p>
          </div>
          <div>
            <p className="text-gray-400">Next Analysis</p>
            <p className="text-white font-medium">3 mins</p>
          </div>
        </div>
      </div>
    </div>
  );
};