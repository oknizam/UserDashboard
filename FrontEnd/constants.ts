import { User } from './types';

export const MOCK_USERS: User[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    email: 'sarah.chen@teamsync.com',
    role: 'Admin',
    avatarUrl: 'https://picsum.photos/200/200?random=1',
    status: 'Active',
    lastActive: 'Now'
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    email: 'marcus.r@teamsync.com',
    role: 'Editor',
    avatarUrl: 'https://picsum.photos/200/200?random=2',
    status: 'Busy',
    lastActive: '5m ago'
  },
  {
    id: '3',
    name: 'Emma Wilson',
    email: 'emma.w@teamsync.com',
    role: 'Viewer',
    avatarUrl: 'https://picsum.photos/200/200?random=3',
    status: 'Offline',
    lastActive: '2h ago'
  },
  {
    id: '4',
    name: 'James Okonjo',
    email: 'james.o@teamsync.com',
    role: 'Editor',
    avatarUrl: 'https://picsum.photos/200/200?random=4',
    status: 'Active',
    lastActive: 'Now'
  },
  {
    id: '5',
    name: 'Priya Patel',
    email: 'priya.p@teamsync.com',
    role: 'Viewer',
    avatarUrl: 'https://picsum.photos/200/200?random=5',
    status: 'Active',
    lastActive: '10m ago'
  },
  {
    id: '6',
    name: 'Tom Baker',
    email: 'tom.b@teamsync.com',
    role: 'Viewer',
    avatarUrl: 'https://picsum.photos/200/200?random=6',
    status: 'Offline',
    lastActive: '1d ago'
  }
];

export const MOCK_CURRENT_USER: User = {
  id: '999',
  name: 'Demo User',
  email: 'demo@teamsync.com',
  role: 'Admin',
  avatarUrl: 'https://picsum.photos/200/200?random=999',
  status: 'Active',
  lastActive: 'Now'
};