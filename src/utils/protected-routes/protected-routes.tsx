import { Outlet, Navigate } from "react-router-dom";
import { FC } from "react";
import { useUserContext } from "../../contexts/user.context";
import Preloader from "../../components/preloader/preloader.component";

type ProtectedRoutesProps = {
  type: string;
};

const ProtectedRoutes: FC<ProtectedRoutesProps> = ({ type }) => {
  const { user, loading } = useUserContext();
  if (loading) {
    return <Preloader />;
  }
  if (type === "Dashboard") {
    return user ? <Outlet /> : <Navigate to="/sign-in" />;
  } else if (type === "Auth") {
    return user ? <Navigate to="/" /> : <Outlet />;
  }
  return <>404 Not Found</>;
};

export default ProtectedRoutes;
