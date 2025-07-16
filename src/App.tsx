import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SignalOverview } from './components/SignalOverview';
import { DataSources } from './components/DataSources';
import { TrendAnalysis } from './components/TrendAnalysis';
import { RiskAssessment } from './components/RiskAssessment';
import { AlertsPanel } from './components/AlertsPanel';
import { CompetitorIntel } from './components/CompetitorIntel';
import { PredictiveAnalytics } from './components/PredictiveAnalytics';
import { SentimentAnalysis } from './components/SentimentAnalysis';
import { AutomatedWorkflows } from './components/AutomatedWorkflows';
import { CollaborationHub } from './components/CollaborationHub';
import { AdvancedFilters } from './components/AdvancedFilters';
import { AIInsights } from './components/AIInsights';
import { RealtimeMetrics } from './components/RealtimeMetrics';
import { SignalCorrelation } from './components/SignalCorrelation';

function App() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [alerts, setAlerts] = useState([]);
  const [signals, setSignals] = useState([]);
  const [activeView, setActiveView] = useState('overview');
  const [filters, setFilters] = useState({
    sources: [],
    categories: [],
    severity: [],
    confidence: [0, 100]
  });

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setSignals(generateMockSignals());
      setAlerts(generateMockAlerts());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const generateMockSignals = () => [
    {
      id: 1,
      name: "API Rate Limiting Complaints",
      source: "Reddit",
      strength: 85,
      trend: "rising",
      confidence: 92,
      category: "technical",
      timeToSpike: "45 days",
      sentiment: -0.7,
      velocity: 23,
      correlatedSignals: [2, 4]
    },
    {
      id: 2,
      name: "Mobile App Crashes",
      source: "Internal Telemetry",
      strength: 78,
      trend: "rising",
      confidence: 88,
      category: "bug",
      timeToSpike: "30 days",
      sentiment: -0.8,
      velocity: 31,
      correlatedSignals: [1, 3]
    },
    {
      id: 3,
      name: "Feature Request: Dark Mode",
      source: "Twitter",
      strength: 72,
      trend: "rising",
      confidence: 85,
      category: "feature",
      timeToSpike: "60 days",
      sentiment: 0.6,
      velocity: 18,
      correlatedSignals: [5]
    },
    {
      id: 4,
      name: "Competitor Migration Chatter",
      source: "Hacker News",
      strength: 68,
      trend: "rising",
      confidence: 81,
      category: "competitive",
      timeToSpike: "35 days",
      sentiment: -0.4,
      velocity: 15,
      correlatedSignals: [1]
    },
    {
      id: 5,
      name: "Performance Optimization Requests",
      source: "Support Tickets",
      strength: 64,
      trend: "stable",
      confidence: 79,
      category: "performance",
      timeToSpike: "50 days",
      sentiment: -0.3,
      velocity: 12,
      correlatedSignals: [3]
    }
  ];

  const generateMockAlerts = () => [
    {
      id: 1,
      type: "critical",
      title: "Critical Signal Spike Detected",
      message: "API rate limiting complaints showing 85% signal strength with 92% confidence",
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
      source: "Reddit Analysis",
      actionRequired: true,
      assignedTo: "PM Team",
      priority: "P0"
    },
    {
      id: 2,
      type: "high",
      title: "Predictive Alert: Mobile Instability",
      message: "Mobile app crash reports predicted to spike in 30 days based on current trajectory",
      timestamp: new Date(Date.now() - 1000 * 60 * 45),
      source: "AI Prediction Engine",
      actionRequired: true,
      assignedTo: "Mobile Team",
      priority: "P1"
    },
    {
      id: 3,
      type: "medium",
      title: "Sentiment Shift Detected",
      message: "Overall product sentiment declining by 12% over past 7 days",
      timestamp: new Date(Date.now() - 1000 * 60 * 90),
      source: "Sentiment Analysis",
      actionRequired: false,
      assignedTo: null,
      priority: "P2"
    },
    {
      id: 4,
      type: "info",
      title: "Workflow Automation Success",
      message: "Auto-escalated 3 signals to engineering teams based on severity thresholds",
      timestamp: new Date(Date.now() - 1000 * 60 * 120),
      source: "Automation Engine",
      actionRequired: false,
      assignedTo: null,
      priority: "P3"
    }
  ];

  const renderMainContent = () => {
    switch (activeView) {
      case 'overview':
        return (
          <>
            {/* Top Row - Overview and Alerts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <SignalOverview 
                  signals={signals} 
                  timeframe={selectedTimeframe}
                  onTimeframeChange={setSelectedTimeframe}
                  filters={filters}
                />
              </div>
              <div>
                <AlertsPanel alerts={alerts} />
              </div>
            </div>

            {/* Second Row - Real-time Metrics and AI Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RealtimeMetrics />
              <AIInsights signals={signals} />
            </div>

            {/* Third Row - Data Sources and Trend Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <DataSources />
              <TrendAnalysis timeframe={selectedTimeframe} />
            </div>

            {/* Fourth Row - Risk Assessment and Competitor Intel */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RiskAssessment signals={signals} />
              <CompetitorIntel />
            </div>
          </>
        );
      case 'analytics':
        return (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PredictiveAnalytics signals={signals} timeframe={selectedTimeframe} />
              <SentimentAnalysis signals={signals} />
            </div>
            <div className="grid grid-cols-1 gap-6">
              <SignalCorrelation signals={signals} />
            </div>
          </>
        );
      case 'automation':
        return (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AutomatedWorkflows />
              <CollaborationHub />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header activeView={activeView} onViewChange={setActiveView} />
      
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Advanced Filters */}
        <AdvancedFilters filters={filters} onFiltersChange={setFilters} />
        
        {/* Main Content */}
        {renderMainContent()}
      </div>
    </div>
  );
}

export default App;