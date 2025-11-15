import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUserState] = useState(
    () => JSON.parse(localStorage.getItem("authUser")) || null
  );

  const setAuthUser = (userData) => {
    setAuthUserState(userData);
    localStorage.setItem("authUser", JSON.stringify(userData));
  };

  const clearAuthUser = () => {
    setAuthUserState(null);
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, clearAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
