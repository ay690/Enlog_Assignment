import React from 'react';
import { Search, SlidersHorizontal, User, Plus } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '../../store';
import { setSearchTerm } from '../../store/slices/customersSlice';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { searchTerm } = useAppSelector((state) => state.customers);
  const currentUser = useAppSelector((state) => state.user.currentUser);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <header className="bg-green-200/30 border-gray-200 px-4 py-3 md:px-6">
      <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:items-center md:justify-between">
        {/* Search Bar */}
        <div className="w-full md:w-1/3">
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
        </div>

        {/* Controls */}
        <div className="flex flex-wrap justify-end gap-2 md:gap-4">
          {/* Sort By */}
          <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-green-100 rounded-lg transition-colors">
            <SlidersHorizontal size={16} />
            <span className="sm:inline">Sort by</span>
          </button>

          {/* Filters */}
          <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-green-100 rounded-lg transition-colors">
            <SlidersHorizontal size={16} />
            <span className="sm:inline">Filters</span>
          </button>

          {/* User Profile */}
          <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-green-100 rounded-lg transition-colors">
            <User size={16} />
            <span className="sm:inline">{currentUser?.name}</span>
          </button>

          {/* Add Customer */}
          <button className="flex items-center space-x-2 px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
            <Plus size={16} />
            <span className="hidden sm:inline">Add customer</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
