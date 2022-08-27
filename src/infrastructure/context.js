import { createContext, useContext, useState } from 'react';

const authContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  return <authContext.Provider value={{ isAuth, setIsAuth }}>{children}</authContext.Provider>;
}

export const useAuthContext = () => useContext(authContext);
