export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Viewer';
  avatarUrl: string;
  status: 'Active' | 'Offline' | 'Busy';
  lastActive: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  currentUser: User | null;
}

export interface LoginCredentials {
  email: string;
  password: string
}

// Interface for the full response
export interface UsersResponse {
  count: number;
  users: User[];
}