import React from 'react';
import { Heart, Frown, Meh, Smile, TrendingDown, TrendingUp } from 'lucide-react';

interface SentimentAnalysisProps {
  signals: any[];
}

export const SentimentAnalysis: React.FC<SentimentAnalysisProps> = ({ signals }) => {
  const sentimentData = [
    {
      source: 'Reddit',
      current: -0.3,
      previous: -0.1,
      trend: 'declining',
      volume: 1247,
      breakdown: { positive: 25, neutral: 45, negative: 30 }
    },
    {
      source: 'Twitter',
      current: 0.2,
      previous: 0.4,
      trend: 'declining',
      volume: 2156,
      breakdown: { positive: 45, neutral: 35, negative: 20 }
    },
    {
      source: 'Hacker News',
      current: -0.1,
      previous: 0.1,
      trend: 'declining',
      volume: 432,
      breakdown: { positive: 30, neutral: 50, negative: 20 }
    },
    {
      source: 'Support Tickets',
      current: -0.6,
      previous: -0.4,
      trend: 'declining',
      volume: 856,
      breakdown: { positive: 15, neutral: 25, negative: 60 }
    }
  ];

  const overallSentiment = {
    score: -0.2,
    trend: 'declining',
    change: -0.15,
    weeklyTrend: [-0.1, -0.05, 0.1, 0.05, -0.1, -0.15, -0.2]
  };

  const getSentimentColor = (score: number) => {
    if (score > 0.3) return 'text-green-400';
    if (score > 0) return 'text-yellow-400';
    if (score > -0.3) return 'text-orange-400';
    return 'text-red-400';
  };

  const getSentimentIcon = (score: number) => {
    if (score > 0.3) return <Smile className="w-4 h-4" />;
    if (score > 0) return <Meh className="w-4 h-4" />;
    return <Frown className="w-4 h-4" />;
  };

  const getSentimentLabel = (score: number) => {
    if (score > 0.3) return 'Positive';
    if (score > 0) return 'Neutral';
    if (score > -0.3) return 'Negative';
    return 'Very Negative';
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Heart className="w-6 h-6 text-pink-400" />
          <h2 className="text-xl font-semibold text-white">Sentiment Analysis</h2>
        </div>
        <div className="text-sm text-gray-400">Real-time Monitoring</div>
      </div>
      
      {/* Overall Sentiment */}
      <div className="mb-6 p-4 bg-gray-700/50 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium text-white">Overall Product Sentiment</h3>
          <div className="flex items-center space-x-2">
            {overallSentiment.trend === 'declining' ? (
              <TrendingDown className="w-4 h-4 text-red-400" />
            ) : (
              <TrendingUp className="w-4 h-4 text-green-400" />
            )}
            <span className={`text-sm ${getSentimentColor(overallSentiment.change)}`}>
              {overallSentiment.change > 0 ? '+' : ''}{(overallSentiment.change * 100).toFixed(1)}%
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {getSentimentIcon(overallSentiment.score)}
            <span className={`font-medium ${getSentimentColor(overallSentiment.score)}`}>
              {getSentimentLabel(overallSentiment.score)}
            </span>
          </div>
          <div className="text-sm text-gray-400">
            Score: {overallSentiment.score.toFixed(2)}
          </div>
        </div>
        
        {/* Weekly Trend Mini Chart */}
        <div className="mt-3 flex items-end space-x-1 h-8">
          {overallSentiment.weeklyTrend.map((value, i) => (
            <div
              key={i}
              className={`w-4 rounded-t ${
                value > 0 ? 'bg-green-500' : value < -0.1 ? 'bg-red-500' : 'bg-yellow-500'
              }`}
              style={{ height: `${Math.abs(value) * 100 + 10}%` }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Source Breakdown */}
      <div className="space-y-4">
        {sentimentData.map((source, index) => (
          <div
            key={index}
            className="p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-white text-sm">{source.source}</h4>
              <div className="flex items-center space-x-2">
                {getSentimentIcon(source.current)}
                <span className={`text-sm ${getSentimentColor(source.current)}`}>
                  {source.current.toFixed(2)}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 mb-2">
              <div className="text-center">
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-green-500"
                    style={{ width: `${source.breakdown.positive}%` }}
                  ></div>
                </div>
                <p className="text-xs text-green-400 mt-1">{source.breakdown.positive}% Positive</p>
              </div>
              <div className="text-center">
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-yellow-500"
                    style={{ width: `${source.breakdown.neutral}%` }}
                  ></div>
                </div>
                <p className="text-xs text-yellow-400 mt-1">{source.breakdown.neutral}% Neutral</p>
              </div>
              <div className="text-center">
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-red-500"
                    style={{ width: `${source.breakdown.negative}%` }}
                  ></div>
                </div>
                <p className="text-xs text-red-400 mt-1">{source.breakdown.negative}% Negative</p>
              </div>
            </div>
            
            <div className="flex justify-between text-xs text-gray-400">
              <span>{source.volume.toLocaleString()} mentions</span>
              <span>
                {source.trend === 'declining' ? '↓' : '↑'} 
                {Math.abs((source.current - source.previous) * 100).toFixed(1)}%
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-pink-900/20 rounded-lg border border-pink-700/50">
        <h3 className="font-medium text-pink-400 mb-2">Sentiment Alerts</h3>
        <div className="space-y-2 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-gray-300">Support ticket sentiment declined 25% this week</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-gray-300">Reddit discussions showing increased negativity</span>
          </div>
        </div>
      </div>
    </div>
  );
};