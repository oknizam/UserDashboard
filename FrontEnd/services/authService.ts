import { LoginCredentials, User } from '../types';
import { MOCK_USERS, MOCK_CURRENT_USER } from '../constants';

const DELAY_MS = 800;

export const authService = {
  login: async (credentials: LoginCredentials): Promise<User> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.email) {
          resolve(MOCK_CURRENT_USER);
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, DELAY_MS);
    });
  },

  getUsers: async (): Promise<User[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOCK_USERS);
      }, DELAY_MS);
    });
  },

  logout: async (): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  }
};