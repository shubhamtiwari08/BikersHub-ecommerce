import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Toast from "../../Components/Toast/Toast";


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
    Toast({ type: "success", message: "Logged out successfully" });
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
