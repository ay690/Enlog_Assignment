import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { DashboardStats } from '../../types';

interface DashboardState {
  stats: DashboardStats;
  isLoading: boolean;
}

const initialState: DashboardState = {
  stats: {
    previousCustomers: [2, 5, 4, 3, 6],
    newCustomers: [3, 8, 6, 9, 4, 7],
    successfulDeals: 68,
    tasksInProgress: 53,
    prepayments: 15890,
  },
  isLoading: false,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setStats: (state, action: PayloadAction<DashboardStats>) => {
      state.stats = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setStats, setLoading } = dashboardSlice.actions;
export default dashboardSlice.reducer;