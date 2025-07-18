export interface User {
  id: string;
  name: string;
  role: string;
  isOnline?: boolean;
  avatar?: string;
}

export interface Task {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'completed';
  dueDate?: string;
}

export interface Customer {
  id: string;
  name: string;
  description: string;
  stage: 'contacted' | 'negotiation' | 'offer-sent' | 'deal-closed';
  date?: string;
  comments?: number;
  attachments?: number;
  value?: number;
  contact?: string;
  address?: string;
  assignedTo?: string;
}

export interface Project {
  id: string;
  name: string;
  count: number;
  icon: string;
}

export interface DashboardStats {
  previousCustomers: number[];
  newCustomers: number[];
  successfulDeals: number;
  tasksInProgress: number;
  prepayments: number;
}

export interface NavigationItem {
  id: string;
  name: string;
  icon: string;
  path: string;
  badge?: number;
}