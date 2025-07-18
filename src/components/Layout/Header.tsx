import React from 'react';
import { Search, SlidersHorizontal, User, Plus } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '../../store';
import { setSearchTerm } from '../../store/slices/customersSlice';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { searchTerm } = useAppSelector((state) => state.customers);
  const currentUser = useAppSelector((state) => state.user.currentUser);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-green-200/30 border-gray-200 px-4 py-3 md:px-6"
    >
      <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:items-center md:justify-between">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full md:w-1/3"
        >
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search customer..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-end gap-2 md:gap-4">
          {[
            { label: 'Sort by', icon: <SlidersHorizontal size={16} /> },
            { label: 'Filters', icon: <SlidersHorizontal size={16} /> },
            { label: currentUser?.name || 'User', icon: <User size={16} /> },
          ].map((btn) => (
            <motion.button
              key={btn.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-green-100 rounded-lg transition-colors cursor-pointer"
            >
              {btn.icon}
              <span className="sm:inline">{btn.label}</span>
            </motion.button>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="flex items-center space-x-2 px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <Plus size={16} />
            <span className="hidden sm:inline">Add customer</span>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
