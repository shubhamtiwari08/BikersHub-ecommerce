import React, { useContext } from "react";
import { authContext } from "../../Contexts/Auth/AuthContext";
import { Navigate } from "react-router";

function RequireAuth({ children }) {
  const { isLogged } = useContext(authContext);
  return <div>{isLogged ? children : <Navigate to={"/login"} />}</div>;
}

export default RequireAuth;
