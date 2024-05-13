import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({ children }) => {
  const { user, loding } = useContext(AuthContext);
  const location = useLocation()
  //console.log(location);

  if (loding) {
    return <span className="loading loading-spinner loading-lg"></span>
  }

  if (user) {
    return children
  }
  return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoutes;