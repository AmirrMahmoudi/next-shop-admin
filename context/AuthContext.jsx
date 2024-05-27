"use client";

import { createContext, useEffect, useState } from "react";
import { me } from "@/actions/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const data = await me();
      if (data?.error) {
        setUser(null);
      } else {
        setUser(data?.user);
      }
    };
    checkUserLoggedIn();
  }, []);
  const logoutContext = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, logoutContext }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
