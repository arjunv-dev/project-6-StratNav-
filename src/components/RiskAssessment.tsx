import React from 'react';
import { AlertTriangle, Shield, Zap } from 'lucide-react';

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

interface RiskAssessmentProps {
  signals: Signal[];
}

export const RiskAssessment: React.FC<RiskAssessmentProps> = ({ signals }) => {
  const risks = [
    {
      id: 1,
      title: 'API Rate Limiting Crisis',
      severity: 'high',
      probability: 92,
      impact: 'Service degradation affecting 40% of users',
      timeframe: '30-45 days',
      mitigation: 'Implement rate limiting improvements',
      affectedSignals: 2
    },
    {
      id: 2,
      title: 'Mobile App Instability',
      severity: 'medium',
      probability: 78,
      impact: 'User churn increase of 15-20%',
      timeframe: '30-35 days',
      mitigation: 'Prioritize mobile crash fixes',
      affectedSignals: 3
    },
    {
      id: 3,
      title: 'Feature Gap Competitive Risk',
      severity: 'medium',
      probability: 68,
      impact: 'Market share loss to competitors',
      timeframe: '60-90 days',
      mitigation: 'Accelerate dark mode development',
      affectedSignals: 1
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityBg = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-500/20 border-red-500/50';
      case 'medium': return 'bg-yellow-500/20 border-yellow-500/50';
      case 'low': return 'bg-green-500/20 border-green-500/50';
      default: return 'bg-gray-500/20 border-gray-500/50';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high': return <AlertTriangle className="w-4 h-4" />;
      case 'medium': return <Zap className="w-4 h-4" />;
      case 'low': return <Shield className="w-4 h-4" />;
      default: return <Shield className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <h2 className="text-xl font-semibold text-white mb-6">Risk Assessment</h2>
      
      <div className="space-y-4">
        {risks.map((risk) => (
          <div
            key={risk.id}
            className={`p-4 rounded-lg border transition-all hover:scale-105 ${getSeverityBg(risk.severity)}`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className={getSeverityColor(risk.severity)}>
                  {getSeverityIcon(risk.severity)}
                </span>
                <h3 className="font-medium text-white text-sm">{risk.title}</h3>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`text-xs px-2 py-1 rounded-full ${getSeverityColor(risk.severity)} bg-current/20`}>
                  {risk.severity.toUpperCase()}
                </span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Probability</span>
                <span className={`font-medium ${getSeverityColor(risk.severity)}`}>
                  {risk.probability}%
                </span>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${
                    risk.severity === 'high' ? 'bg-red-500' :
                    risk.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${risk.probability}%` }}
                ></div>
              </div>
              
              <div className="text-xs text-gray-300">
                <p><strong>Impact:</strong> {risk.impact}</p>
                <p><strong>Timeframe:</strong> {risk.timeframe}</p>
                <p><strong>Mitigation:</strong> {risk.mitigation}</p>
              </div>
              
              <div className="flex justify-between text-xs text-gray-400">
                <span>{risk.affectedSignals} related signals</span>
                <button className="text-blue-400 hover:text-blue-300">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-gray-700/50 rounded-lg">
        <h3 className="font-medium text-white mb-2">Overall Risk Score</h3>
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <div className="w-full bg-gray-600 rounded-full h-3">
              <div className="h-3 rounded-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500" style={{ width: '76%' }}></div>
            </div>
          </div>
          <span className="text-yellow-400 font-medium">76/100</span>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          Moderate risk level - Monitor closely and prepare mitigation strategies
        </p>
      </div>
    </div>
  );
};