import React, { useState } from 'react';
import { Filter, X, ChevronDown } from 'lucide-react';

interface FiltersProps {
  filters: {
    sources: string[];
    categories: string[];
    severity: string[];
    confidence: number[];
  };
  onFiltersChange: (filters: any) => void;
}

export const AdvancedFilters: React.FC<FiltersProps> = ({ filters, onFiltersChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const sources = ['Reddit', 'Twitter', 'Hacker News', 'Internal Telemetry', 'Support Tickets', 'Bug Reports'];
  const categories = ['technical', 'bug', 'feature', 'competitive', 'performance', 'security'];
  const severityLevels = ['low', 'medium', 'high', 'critical'];

  const toggleFilter = (type: string, value: string) => {
    const currentValues = filters[type as keyof typeof filters] as string[];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    
    onFiltersChange({
      ...filters,
      [type]: newValues
    });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      sources: [],
      categories: [],
      severity: [],
      confidence: [0, 100]
    });
  };

  const activeFilterCount = filters.sources.length + filters.categories.length + filters.severity.length;

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
          >
            <Filter className="w-5 h-5" />
            <span className="font-medium">Advanced Filters</span>
            {activeFilterCount > 0 && (
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                {activeFilterCount}
              </span>
            )}
            <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
          
          {activeFilterCount > 0 && (
            <button
              onClick={clearAllFilters}
              className="flex items-center space-x-1 text-gray-400 hover:text-white text-sm transition-colors"
            >
              <X className="w-4 h-4" />
              <span>Clear All</span>
            </button>
          )}
        </div>
        
        {isExpanded && (
          <div className="mt-4 space-y-4">
            {/* Sources Filter */}
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-2">Data Sources</h3>
              <div className="flex flex-wrap gap-2">
                {sources.map((source) => (
                  <button
                    key={source}
                    onClick={() => toggleFilter('sources', source)}
                    className={`px-3 py-1 rounded-full text-xs transition-colors ${
                      filters.sources.includes(source)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {source}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Categories Filter */}
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-2">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => toggleFilter('categories', category)}
                    className={`px-3 py-1 rounded-full text-xs capitalize transition-colors ${
                      filters.categories.includes(category)
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Severity Filter */}
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-2">Severity</h3>
              <div className="flex flex-wrap gap-2">
                {severityLevels.map((severity) => (
                  <button
                    key={severity}
                    onClick={() => toggleFilter('severity', severity)}
                    className={`px-3 py-1 rounded-full text-xs capitalize transition-colors ${
                      filters.severity.includes(severity)
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {severity}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Confidence Range */}
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-2">
                Confidence Range: {filters.confidence[0]}% - {filters.confidence[1]}%
              </h3>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={filters.confidence[0]}
                  onChange={(e) => onFiltersChange({
                    ...filters,
                    confidence: [parseInt(e.target.value), filters.confidence[1]]
                  })}
                  className="flex-1"
                />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={filters.confidence[1]}
                  onChange={(e) => onFiltersChange({
                    ...filters,
                    confidence: [filters.confidence[0], parseInt(e.target.value)]
                  })}
                  className="flex-1"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};