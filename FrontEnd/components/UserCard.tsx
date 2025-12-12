import React from 'react';
import { User } from '../types';
import { Mail, Shield, Circle } from 'lucide-react';

interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const statusColors = {
    Active: 'text-green-500',
    Busy: 'text-amber-500',
    Offline: 'text-slate-400'
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-5 flex items-start space-x-4">
      <img 
        src={user.avatarUrl} 
        alt={user.name} 
        className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100"
      />
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-semibold text-slate-900 truncate">{user.name}</h3>
          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-800`}>
            {user.role}
          </span>
        </div>
        <div className="mt-1 flex items-center text-sm text-slate-500">
          <Mail className="w-3.5 h-3.5 mr-1.5" />
          <span className="truncate">{user.email}</span>
        </div>
        <div className="mt-2 flex items-center text-xs text-slate-500">
          <Circle className={`w-2.5 h-2.5 mr-1.5 fill-current ${statusColors[user.status]}`} />
          <span>{user.status} • {user.lastActive}</span>
        </div>
      </div>
    </div>
  );
};