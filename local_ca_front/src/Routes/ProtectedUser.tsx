import { Navigate, Outlet } from "react-router-dom";
import { RootStore } from "../redux/App/store";
import { connect, ConnectedProps } from "react-redux";

const mapStateToProps = (state: RootStore) => {
  return { isLoggedIn: state.auth.isLoggedIn };
};

const connector = connect(mapStateToProps);

type protectedProps = { redirectPath?: string } & ConnectedProps<typeof connector>;

const ProtectedUser = ({ isLoggedIn, redirectPath = "/?q=unauthenticated" }: protectedProps) => {
  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};
export default connector(ProtectedUser);
