import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../../types';

interface UserState {
  currentUser: User | null;
  teamMembers: User[];
}

const initialState: UserState = {
  currentUser: {
    id: '1',
    name: 'Me',
    role: 'Admin',
  },
  teamMembers: [
    {
      id: '2',
      name: 'Sandra Perry',
      role: 'Product Manager',
      isOnline: true,
      avatar: '/api/placeholder/32/32',
    },
    {
      id: '3',
      name: 'Antony Cardenas',
      role: 'Sales Manager',
      isOnline: true,
      avatar: '/api/placeholder/32/32',
    },
    {
      id: '4',
      name: 'Jamal Connolly',
      role: 'Growth Marketer',
      isOnline: false,
      avatar: '/api/placeholder/32/32',
    },
    {
      id: '5',
      name: 'Cara Carr',
      role: 'SEO Specialist',
      isOnline: false,
      avatar: '/api/placeholder/32/32',
    },
    {
      id: '6',
      name: 'Iona Rollins',
      role: 'Developer',
      isOnline: true,
      avatar: '/api/placeholder/32/32',
    },
  ],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
    addTeamMember: (state, action: PayloadAction<User>) => {
      state.teamMembers.push(action.payload);
    },
  },
});

export const { setCurrentUser, addTeamMember } = userSlice.actions;
export default userSlice.reducer;