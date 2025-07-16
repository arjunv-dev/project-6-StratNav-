import React from 'react';
import { Target, TrendingUp, Eye, ExternalLink } from 'lucide-react';

export const CompetitorIntel: React.FC = () => {
  const competitors = [
    {
      name: 'TechCorp',
      recentActivity: 'Major API update released',
      sentiment: 'positive',
      mentions: 234,
      change: '+18%',
      lastUpdate: '2h ago',
      keySignals: ['API improvements', 'New pricing model', 'Mobile app update']
    },
    {
      name: 'DataFlow',
      recentActivity: 'User complaints about downtime',
      sentiment: 'negative',
      mentions: 156,
      change: '-8%',
      lastUpdate: '4h ago',
      keySignals: ['Service outages', 'Support issues', 'Performance complaints']
    },
    {
      name: 'CloudSync',
      recentActivity: 'New feature announcement',
      sentiment: 'neutral',
      mentions: 89,
      change: '+5%',
      lastUpdate: '1h ago',
      keySignals: ['Feature launch', 'User feedback', 'Market positioning']
    }
  ];

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-green-400';
      case 'negative': return 'text-red-400';
      case 'neutral': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const getSentimentEmoji = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return '📈';
      case 'negative': return '📉';
      case 'neutral': return '📊';
      default: return '⚪';
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Competitor Intelligence</h2>
        <Target className="w-5 h-5 text-blue-400" />
      </div>
      
      <div className="space-y-4">
        {competitors.map((competitor, index) => (
          <div
            key={index}
            className="p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700/80 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className="text-lg">{getSentimentEmoji(competitor.sentiment)}</span>
                <h3 className="font-medium text-white">{competitor.name}</h3>
              </div>
              <div className="flex items-center space-x-2">
                <ExternalLink className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-400">{competitor.lastUpdate}</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-300 mb-3">{competitor.recentActivity}</p>
            
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Eye className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-400">{competitor.mentions} mentions</span>
                </div>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-3 h-3 text-gray-400" />
                  <span className={`text-xs ${getSentimentColor(competitor.sentiment)}`}>
                    {competitor.change}
                  </span>
                </div>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${getSentimentColor(competitor.sentiment)} bg-current/20`}>
                {competitor.sentiment.toUpperCase()}
              </span>
            </div>
            
            <div className="space-y-1">
              <p className="text-xs text-gray-400 font-medium">Key Signals:</p>
              <div className="flex flex-wrap gap-1">
                {competitor.keySignals.map((signal, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-gray-600 text-gray-300 rounded"
                  >
                    {signal}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-700/50">
        <h3 className="font-medium text-blue-400 mb-2">Market Intelligence Summary</h3>
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <p className="text-gray-400">Total Mentions</p>
            <p className="text-white font-medium">479 (+12%)</p>
          </div>
          <div>
            <p className="text-gray-400">Competitive Threats</p>
            <p className="text-yellow-400 font-medium">2 Active</p>
          </div>
        </div>
      </div>
    </div>
  );
};