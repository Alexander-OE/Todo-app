import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";

const ProtectedRoute = ({ children }) => {
   
  const { user } = useContext(UserContext);
  console.log(user)
  if (!user) {
    return <Navigate to="/" />;
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;
