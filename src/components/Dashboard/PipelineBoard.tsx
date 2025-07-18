import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useAppSelector } from '../../store';
import { type Customer } from '../../types';
import CustomerCard from './CustomerCard';

const PipelineBoard: React.FC = () => {
  const customers = useAppSelector(state => state.customers.customers);
  
  const stages = [
    { key: 'contacted', title: 'Contacted', icon: TrendingUp },
    { key: 'negotiation', title: 'Negotiation', icon: TrendingUp },
    { key: 'offer-sent', title: 'Offer Sent', icon: TrendingUp },
    { key: 'deal-closed', title: 'Deal Closed', icon: TrendingDown },
  ];

  const getCustomersByStage = (stage: string): Customer[] => {
    return customers.filter(customer => customer.stage === stage);
  };

  const getStageCount = (stage: string): number => {
    return getCustomersByStage(stage).length;
  };

  return (
    <div className="grid grid-cols-4 gap-6">
      {stages.map((stage) => {
        const stageCustomers = getCustomersByStage(stage.key);
        const count = getStageCount(stage.key);
        
        return (
          <div key={stage.key} className="space-y-4">
            {/* Stage Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-gray-900">{stage.title}</h3>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                  {count}
                </span>
              </div>
              <stage.icon size={16} className="text-gray-400" />
            </div>
            
            {/* Stage Cards */}
            <div className="space-y-3">
              {stageCustomers.map((customer) => (
                <CustomerCard
                  key={customer.id}
                  customer={customer}
                  highlighted={customer.name === 'Prime Estate'}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PipelineBoard;