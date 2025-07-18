import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Customer } from '../../types';

interface CustomersState {
  customers: Customer[];
  searchTerm: string;
  sortBy: string;
  filters: string[];
}

const initialState: CustomersState = {
  customers: [
    {
      id: '1',
      name: 'ByteBridge',
      description: 'Corporate and personal data protection on a turnkey basis',
      stage: 'contacted',
      date: '18 Apr',
      comments: 2,
      attachments: 1,
    },
    {
      id: '2',
      name: 'SkillUp Hub',
      description: 'Platform for professional development of specialists',
      stage: 'negotiation',
      date: '09 Mar',
      comments: 4,
      attachments: 1,
    },
    {
      id: '3',
      name: 'FitLife Nutrition',
      description: 'Nutritious food and nutraceuticals for individuals',
      stage: 'offer-sent',
      date: '10 Mar',
      comments: 1,
      attachments: 3,
    },
    {
      id: '4',
      name: 'CloudSphere',
      description: 'Cloud services for data storage and processing for large companies',
      stage: 'deal-closed',
      date: '24 Mar',
      comments: 2,
      attachments: 1,
    },
    {
      id: '5',
      name: 'AI Synergy',
      description: 'Innovative solutions based on artificial intelligence',
      stage: 'contacted',
      date: '21 Mar',
      comments: 1,
      attachments: 3,
    },
    {
      id: '6',
      name: 'Thera Well',
      description: 'Platform for psychological support and consultations',
      stage: 'negotiation',
      date: 'No due date',
      comments: 7,
      attachments: 2,
    },
    {
      id: '7',
      name: 'Prime Estate',
      description: 'Agency-developer of low-rise elite and commercial real estate',
      stage: 'offer-sent',
      date: '16 Apr',
      comments: 1,
      attachments: 1,
      contact: 'contact@primeestate.com',
      address: '640 Realty Blvd, Miami, FL 33132',
      assignedTo: 'Antony Cardenas',
    },
    {
      id: '8',
      name: 'Advantage Medi',
      description: 'Full cycle of digital advertising and social media promotion',
      stage: 'deal-closed',
      date: '05 Apr',
      comments: 1,
      attachments: 3,
    },
    {
      id: '9',
      name: 'LeadBoost Agency',
      description: 'Lead attraction and automation for small business owners',
      stage: 'contacted',
      date: 'No due date',
      comments: 4,
      attachments: 7,
    },
    {
      id: '10',
      name: 'SwiftCargo',
      description: 'International transportation of chemical goods',
      stage: 'negotiation',
      date: '23 Apr',
      comments: 2,
      attachments: 5,
    },
    {
      id: '11',
      name: 'Safebank Solutions',
      description: 'Innovative financial technologies and digital payments',
      stage: 'deal-closed',
      date: '30 Mar',
      comments: 4,
      attachments: 7,
    },
    {
      id: '12',
      name: 'NextGen University',
      description: 'Online education platform for professional development',
      stage: 'offer-sent',
      date: '15 Apr',
      comments: 2,
      attachments: 4,
    },
  ],
  searchTerm: '',
  sortBy: 'date',
  filters: [],
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
    setFilters: (state, action: PayloadAction<string[]>) => {
      state.filters = action.payload;
    },
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.customers.push(action.payload);
    },
    updateCustomer: (state, action: PayloadAction<Customer>) => {
      const index = state.customers.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state.customers[index] = action.payload;
      }
    },
  },
});

export const { setSearchTerm, setSortBy, setFilters, addCustomer, updateCustomer } = customersSlice.actions;
export default customersSlice.reducer;