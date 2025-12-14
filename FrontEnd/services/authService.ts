import { LoginCredentials, User, UsersResponse } from '../types';

// Environment configuration
const API_URL = import.meta.env.VITE_API_URL;
// Fallback to mock data if VITE_USE_MOCK is true or if API_URL is not set
const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true' || !API_URL;


// Log configuration for debugging purposes
console.log('Auth Service Config:', {
  apiUrl: API_URL || 'Not Set',
  mode: USE_MOCK ? 'Mock Data' : 'Live API'
});

export const authService = {
  login: async (credentials: LoginCredentials): Promise<User> => {
    try {
      // Handle potential trailing slash in API_URL
      const baseUrl = API_URL.replace(/\/$/, '');
      const response = await fetch(`${baseUrl}/auth/login`, {
        credentials: "include",
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  getUsers: async (): Promise<UsersResponse> => {
    try {
      const baseUrl = API_URL.replace(/\/$/, '');
      const response = await fetch(`${baseUrl}/users`, {
        method: "GET",
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch users error:', error);
      throw error;
    }
  },

  logout: async (): Promise<void> => {
    try {
      const baseUrl = API_URL.replace(/\/$/, '');
      const response = await fetch(`${baseUrl}/auth/logout`, {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  }
};