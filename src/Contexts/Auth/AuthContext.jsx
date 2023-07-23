import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router";

export const authContext = createContext();

function AuthProvider({ children }) {
  const Navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(false);
  const token = localStorage.getItem("Token");
  const [userData, setUserData] = useState({
    cartList: [],
    wishList: [],
    firstName: "",
  });

  useEffect(() => {
    if (token) {
      setIsLogged(true);
    }
  }, [isLogged]);

  const logoutHandler = () => {
    localStorage.removeItem("Token");
    setIsLogged(false);
    Navigate("/");
  };

  return (
    <authContext.Provider
      value={{ isLogged, userData, setUserData, logoutHandler, setIsLogged }}
    >
      {children}
    </authContext.Provider>
  );
}

export default AuthProvider;
