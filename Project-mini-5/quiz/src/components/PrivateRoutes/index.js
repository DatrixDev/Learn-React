import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCookie } from "../../helpers/cookie";

function PrivateRoutes() {
  const isLogin = useSelector(state => state.loginReducer);
  const token = getCookie("token");

  return (
    <>
      {isLogin && token ? <Outlet /> : <Navigate to="/login" />}
    </>
  );
}

export default PrivateRoutes;
