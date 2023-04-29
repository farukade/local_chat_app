import React from "react";
import ThemeToggler from "../../services/ThemeToggler";

const Login = () => {
  return (
    <React.Fragment>
      <div className="auth-bg-cover py-5 flex justify-center items-center min-h-full">
        <h1>WE WIll LOGIN </h1>
        <ThemeToggler />
      </div>
    </React.Fragment>
  );
};

export default Login;
