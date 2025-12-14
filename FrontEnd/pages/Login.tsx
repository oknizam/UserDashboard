import React, { useState } from 'react';
import { authService } from '../services/authService';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Lock, Users } from 'lucide-react';
import { User } from '../types';

interface LoginProps {
  onLoginSuccess: (user: User) => void;
}

export const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    try {
      const user = await authService.login({ email, password });
      onLoginSuccess(user);
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
            <Users className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Welcome back</h1>
          <p className="text-slate-500 mt-2">Sign in to your PeoplePanel account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            id="email"
            type="email"
            label="Email address"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />

          <Input
            id="password"
            type="password"
            label="Password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />

          {error && (
            <div className="p-3 bg-red-50 border border-red-100 rounded-lg flex items-start">
              <div className="text-sm text-red-600">{error}</div>
            </div>
          )}

          <Button
            type="submit"
            className="w-full"
            isLoading={isLoading}
            icon={<Lock className="w-4 h-4" />}
          >
            Sign In
          </Button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-400">
          This is a demo. Use any email and password to log in.
        </p>
      </div>
    </div>
  );
};