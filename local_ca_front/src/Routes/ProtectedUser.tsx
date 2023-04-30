import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { RootStore } from "../redux/App/store";
import { connect, ConnectedProps } from "react-redux";

const mapStateToProps = (state: RootStore) => {
  return { isLoggedIn: state.auth.isLoggedIn };
};

const connector = connect(mapStateToProps);

type protectedProps = { children: any } & ConnectedProps<typeof connector>;

const ProtectedUser = ({ isLoggedIn, children }: protectedProps) => {
  if (!isLoggedIn) {
    return <Navigate to="/?q=unauthenticated" replace />;
  }
  return children;
};
export default connector(ProtectedUser);
