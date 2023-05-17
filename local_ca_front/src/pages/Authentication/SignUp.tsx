import React, { useState } from "react";
import FullpageLoader from "../../Components/Common/FullpageLoader";
import chatLogo from "../../assets/svgs/chat.svg";

import { UserIcon, EyeIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { APP_NAME } from "../../utils/constants";
import { RegisterSuccess } from "../../utils/PopupTab";
import { usePostSignup } from "../../Hooks/useAuthenticationData";
import { UseQueryResult } from "react-query";
import { AxiosResponse } from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [details, setDetails] = useState("");

  const createUser = (data: any) => {
    console.log("User created", data.data);
    return RegisterSuccess();
  };

  const {
    isLoading,
    isFetching,
    isError,
    error: signupError,
    refetch,
  }: UseQueryResult<AxiosResponse, any> = usePostSignup({ username, password, details }, createUser);

  const CallUseQuery = () => {
    refetch();
  };

  return (
    <React.Fragment>
      {isFetching && <FullpageLoader />}
      <div className="auth-bg-cover py-0 flex justify-center items-center min-h-full">
        {/* Form Starts Here */}
        <div className="auth-form overflow-hidden">
          <div className="flex flex-col items-center justify-center pb-2">
            <img src={chatLogo} alt="" width={70} />
            <h1 className="text-center font-mono text-20 text-gray-400 pb-4">{APP_NAME}</h1>
          </div>
          {/* {isError && <AlertError message={signupError?.response?.data.message} />} */}
          <div className="form-group relative mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Username "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <UserIcon className="fa text-gray-400 dark:text-gray-500 w-4 h-4" />
          </div>
          <div className="form-group relative mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <EyeIcon className="fa text-gray-400 dark:text-gray-500 w-4 h-4" />
          </div>
          {isError && <span className="alert">{signupError?.response?.data.message || signupError.message}</span>}
          <Link to="/" className="link">
            Already Have an Account&nbsp;?
          </Link>
          <button
            className="login-btn bg-gray-700 hover:bg-gray-800 font-bold py-2 px-4 rounded inline-flex justify-center items-center"
            onClick={CallUseQuery}
          >
            <span>SignUp</span>
            <ArrowLongRightIcon className=" text-gray-400 dark:text-gray-500 w-7 h-7 mx-2" />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
