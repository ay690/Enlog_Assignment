import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  subtitle: string;
  showArrow?: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, subtitle, showArrow = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex items-center justify-between p-4 rounded-lg"
    >
      <div>
        <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        <div className="mt-10">
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
      </div>
      {showArrow && (
        <ArrowRight className="text-gray-400 cursor-pointer" size={20} />
      )}
    </motion.div>
  );
};

export default StatsCard;
