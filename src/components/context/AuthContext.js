import React, { createContext, useState, useEffect } from 'react';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

// Create Authentication Context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user data from MMKV on app start
  useEffect(() => {
    const storedUserName = storage.getString('userName');
    if (storedUserName) {
      setUser(storedUserName);
    }
  }, []);

  // Login function
  const login = (userName, password) => {
    const storedUserName = storage.getString('userName');
    const storedPassword = storage.getString('password');

    if (userName === storedUserName && password === storedPassword) {
      setUser(userName);
      return true;
    }
    return false;
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
