import React, { useState } from 'react';
import { Login } from './pages/Login';
import { UserList } from './pages/UserList';
import { User, AuthState } from './types';
import { authService } from './services/authService';

function App() {
  const [auth, setAuth] = useState<AuthState>({
    isAuthenticated: false,
    currentUser: null,
  });

  const handleLoginSuccess = (user: User) => {
    setAuth({
      isAuthenticated: true,
      currentUser: user,
    });
  };

  const handleLogout = async () => {
    try {
      await authService.logout();
      setAuth({
        isAuthenticated: false,
        currentUser: null,
      });
    }
    catch (err) {
      console.error("error", err)
    }

  };

  return (
    <>
      {auth.isAuthenticated && auth.currentUser ? (
        <UserList
          currentUser={auth.currentUser}
          onLogout={handleLogout}
        />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
}

export default App;