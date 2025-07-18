import React from 'react';
import { MessageCircle, Paperclip, Calendar, Mail, MapPin, User } from 'lucide-react';
import { type Customer } from '../../types';

interface CustomerCardProps {
  customer: Customer;
  highlighted?: boolean;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ customer, highlighted = false }) => {
  const cardClasses = highlighted
    ? 'bg-gray-900 text-white'
    : 'bg-white text-gray-900 hover:shadow-md';

  const textClasses = highlighted
    ? 'text-gray-300'
    : 'text-gray-600';

  const iconClasses = highlighted
    ? 'text-gray-400'
    : 'text-gray-500';

  return (
    <div className={`p-4 rounded-lg border transition-shadow ${cardClasses}`}>
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-sm">{customer.name}</h3>
        <button className={`text-xs ${iconClasses} hover:text-gray-700 cursor-pointer`}>
          •••
        </button>
      </div>
      
      <p className={`text-xs ${textClasses} mb-4 line-clamp-2`}>
        {customer.description}
      </p>

      {highlighted && customer.contact && (
        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2 text-xs">
            <MapPin size={12} className="text-gray-400" />
            <span className="text-gray-300">{customer.address}</span>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <Mail size={12} className="text-gray-400" />
            <span className="text-gray-300">{customer.contact}</span>
          </div>
          {customer.assignedTo && (
            <div className="flex items-center space-x-2 text-xs mt-3">
              <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                <User size={12} className="text-gray-300" />
              </div>
              <div>
                <p className="text-gray-300">Assigned</p>
                <p className="text-white font-medium">{customer.assignedTo}</p>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center space-x-1">
          <Calendar size={12} className={iconClasses} />
          <span className={textClasses}>{customer.date}</span>
        </div>
        <div className="flex items-center space-x-3">
          {customer.comments && (
            <div className="flex items-center space-x-1 cursor-pointer">
              <MessageCircle size={12} className={iconClasses} />
              <span className={textClasses}>{customer.comments}</span>
            </div>
          )}
          {customer.attachments && (
            <div className="flex items-center space-x-1 cursor-pointer">
              <Paperclip size={12} className={iconClasses} />
              <span className={textClasses}>{customer.attachments}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;