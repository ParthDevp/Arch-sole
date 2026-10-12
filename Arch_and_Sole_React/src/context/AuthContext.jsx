import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { authService } from '../services/authService';
const AuthContext = createContext(null);
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!localStorage.getItem('healthyfeet_token')) { setLoading(false); return; }
    authService.me().then(setUser).catch(() => { localStorage.removeItem('healthyfeet_token'); setUser(null); }).finally(() => setLoading(false));
  }, []);
  const value = useMemo(() => ({
    user, loading,
    async login(credentials) {
      const result = await authService.login(credentials);
      const token = result?.token || result?.accessToken;
      if (token) localStorage.setItem('healthyfeet_token', token);
      const nextUser = result?.user || await authService.me();
      setUser(nextUser); return nextUser;
    },
    async register(data) {
      const result = await authService.register(data);
      const token = result?.token || result?.accessToken;
      if (token) localStorage.setItem('healthyfeet_token', token);
      if (result?.user) setUser(result.user);
      return result;
    },
    async logout() {
      try { await authService.logout(); } finally { localStorage.removeItem('healthyfeet_token'); setUser(null); }
    },
    setUser,
  }), [user, loading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);
