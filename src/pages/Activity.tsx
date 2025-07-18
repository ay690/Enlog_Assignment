import React from 'react';
import { motion } from 'framer-motion';

const Activity: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="space-y-6 p-6"
    >
      <h1 className="text-2xl font-bold text-gray-900">Activity</h1>
      <div className="bg-white p-6 rounded-lg">
        <p className="text-gray-600">Activity feed coming soon...</p>
      </div>
    </motion.div>
  );
};

export default Activity;
