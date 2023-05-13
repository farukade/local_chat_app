import React, { useState } from "react";
import { UserIcon, EyeIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { APP_NAME } from "../../utils/constants";
import AlertError from "../../Components/Common/Alerts/AlertError";
import chatLogo from "../../assets/svgs/chat.svg";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import FullpageLoader from "../../Components/Common/FullpageLoader";
import { useLoginWithUser } from "../../Hooks/useAuthenticationData";
import { LoginParams } from "../../utils/types";
import { UseMutationResult } from "react-query";
import { useDispatch } from "react-redux";
import { setLoggedInUser } from "../../redux/Features/authSlice";
import { notifySuccess } from "../../utils/Notify";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  /*User Inputs */
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const changeLoginDetails = (e: { target: { name: string; value: string } }) => {
    let { name, value } = e.target;

    setLoginDetails((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const errorType = searchParams.get("q");

  const onFailure = (err: any) => {
    console.log("dont be a failure", err);
  };

  const onSuccess = (data: any) => {
    /**set user and Redirect */
    dispatch(setLoggedInUser(true));
    navigate("/chats");
    localStorage.setItem("token", JSON.stringify(data.data.result));
    notifySuccess("Login successful");
  };

  const mutation: UseMutationResult<any, any, LoginParams, unknown> = useLoginWithUser();

  const setUser = () => {
    console.log(loginDetails);
    mutation.mutate(loginDetails, {
      onError: onFailure,
      onSuccess,
    });
  };

  return (
    <React.Fragment>
      {mutation.isLoading && <FullpageLoader />}
      <div className="auth-bg-cover py-0 flex justify-center items-center min-h-full">
        {/* Form Starts Here */}
        <div className="auth-form overflow-hidden">
          <div className="flex flex-col items-center justify-center pb-2">
            <img src={chatLogo} alt="" width={70} />
            <h1 className="text-center font-mono text-20 text-gray-400 pb-4">{APP_NAME}</h1>
          </div>
          {errorType && <AlertError message={errorType} />}
          <div className="form-group relative mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Username "
              name="username"
              value={loginDetails.username}
              onChange={changeLoginDetails}
            />
            <UserIcon className="fa text-gray-400 dark:text-gray-500 w-4 h-4" />
          </div>
          <div className="form-group relative mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={loginDetails.password}
              onChange={changeLoginDetails}
            />
            <EyeIcon className="fa text-gray-400 dark:text-gray-500 w-4 h-4" />
          </div>

          {mutation.isError && <span className="alert">{mutation.error.response.data.message}</span>}

          <a className="link" href="#">
            Lost your password?
          </a>
          <button
            className="login-btn bg-gray-700 hover:bg-gray-800 font-bold py-2 px-4 rounded inline-flex justify-center items-center"
            onClick={setUser}
          >
            <span>SignIn</span>
            <ArrowLongRightIcon className=" text-gray-400 dark:text-gray-500 w-7 h-7 mx-2" />
          </button>

          <Link to="/sign-up" className="link mt-4">
            Don't Have an Account&nbsp;?
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
