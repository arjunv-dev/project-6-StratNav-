import React, { useState } from 'react';
import { Zap, Play, Pause, Settings, CheckCircle, AlertTriangle, Clock } from 'lucide-react';

export const AutomatedWorkflows: React.FC = () => {
  const [workflows, setWorkflows] = useState([
    {
      id: 1,
      name: 'Critical Signal Escalation',
      description: 'Auto-escalate signals >80% strength to engineering teams',
      status: 'active',
      triggers: 3,
      actions: 7,
      lastRun: '2 mins ago',
      successRate: 94,
      conditions: ['Signal strength > 80%', 'Confidence > 85%', 'Category: technical/bug']
    },
    {
      id: 2,
      name: 'Sentiment Alert Pipeline',
      description: 'Monitor sentiment drops and notify PM teams',
      status: 'active',
      triggers: 12,
      actions: 18,
      lastRun: '5 mins ago',
      successRate: 89,
      conditions: ['Sentiment drop > 15%', 'Volume > 100 mentions', 'Timeframe: 24h']
    },
    {
      id: 3,
      name: 'Competitor Intelligence',
      description: 'Track competitor mentions and feature releases',
      status: 'paused',
      triggers: 0,
      actions: 0,
      lastRun: '2 hours ago',
      successRate: 92,
      conditions: ['Competitor mentions spike', 'New feature detected', 'Market share impact']
    },
    {
      id: 4,
      name: 'Risk Assessment Automation',
      description: 'Generate risk reports for high-probability predictions',
      status: 'active',
      triggers: 5,
      actions: 12,
      lastRun: '15 mins ago',
      successRate: 96,
      conditions: ['Prediction probability > 75%', 'Impact: medium/high', 'Timeframe < 45 days']
    }
  ]);

  const toggleWorkflow = (id: number) => {
    setWorkflows(workflows.map(workflow => 
      workflow.id === id 
        ? { ...workflow, status: workflow.status === 'active' ? 'paused' : 'active' }
        : workflow
    ));
  };

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'text-green-400' : 'text-yellow-400';
  };

  const getStatusIcon = (status: string) => {
    return status === 'active' ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />;
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Zap className="w-6 h-6 text-yellow-400" />
          <h2 className="text-xl font-semibold text-white">Automated Workflows</h2>
        </div>
        <button className="flex items-center space-x-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
          <Settings className="w-4 h-4" />
          <span className="text-sm">Configure</span>
        </button>
      </div>
      
      <div className="space-y-4">
        {workflows.map((workflow) => (
          <div
            key={workflow.id}
            className="p-4 bg-gray-700/50 rounded-lg border border-gray-600 hover:bg-gray-700/80 transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-medium text-white mb-1">{workflow.name}</h3>
                <p className="text-sm text-gray-400">{workflow.description}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`flex items-center space-x-1 text-sm ${getStatusColor(workflow.status)}`}>
                  {getStatusIcon(workflow.status)}
                  <span className="capitalize">{workflow.status}</span>
                </span>
                <button
                  onClick={() => toggleWorkflow(workflow.id)}
                  className="p-1 text-gray-400 hover:text-white transition-colors"
                >
                  {workflow.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 mb-3">
              <div>
                <p className="text-xs text-gray-400">Triggers Today</p>
                <p className="font-medium text-white">{workflow.triggers}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Actions Taken</p>
                <p className="font-medium text-white">{workflow.actions}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Success Rate</p>
                <p className="font-medium text-green-400">{workflow.successRate}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Last Run</p>
                <p className="font-medium text-gray-300">{workflow.lastRun}</p>
              </div>
            </div>
            
            <div>
              <p className="text-xs text-gray-400 font-medium mb-2">Conditions:</p>
              <div className="flex flex-wrap gap-1">
                {workflow.conditions.map((condition, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-yellow-900/30 text-yellow-300 rounded"
                  >
                    {condition}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="p-4 bg-green-900/20 rounded-lg border border-green-700/50">
          <div className="flex items-center space-x-2 mb-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-green-400">Active Workflows</span>
          </div>
          <p className="text-2xl font-bold text-white">3</p>
        </div>
        
        <div className="p-4 bg-yellow-900/20 rounded-lg border border-yellow-700/50">
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">Actions Today</span>
          </div>
          <p className="text-2xl font-bold text-white">37</p>
        </div>
        
        <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-700/50">
          <div className="flex items-center space-x-2 mb-2">
            <Clock className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Avg Response</span>
          </div>
          <p className="text-2xl font-bold text-white">2.3m</p>
        </div>
      </div>
    </div>
  );
};