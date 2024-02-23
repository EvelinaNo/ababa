import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: '',
    permissions: [],
  });

  const navigate = useNavigate();
  const login = (userWhoIsLoging) => {
    if (userWhoIsLoging === 'admin') {
      setUser({
        username: 'admin',
        permissions: ['can_see_everything'],
      });
      navigate('/movies');
    } else {
      setUser({ username: userWhoIsLoging, permissions: [] });
      navigate('/movies');
    }
  };

  return <AuthContext.Provider value={{ user, login }}>{children}</AuthContext.Provider>;
};
