import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email, password) => {
    // Implement your login logic here
    // For example, check if email and password match your records
    if (email === 'test@test.com' && password === 'password') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const signup = (email, password) => {
    // Implement your signup logic here
    // For example, create a new user record
    if (email && password) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
