import React, { useState } from "react";
import FullpageLoader from "../../Components/Common/FullpageLoader";
import chatLogo from "../../assets/svgs/chat.svg";

import { UserIcon, EyeIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { APP_NAME } from "../../services/constants";
import AlertError from "../../Components/Common/Alerts/AlertError";
import { RegisterSuccess } from "../../services/PopupTab";

const SignUp = () => {
  const [authenticating, setAuthenticating] = useState(false);
  const [error, setError] = useState(null);

  const createUser = () => {
    setAuthenticating(true);
    console.log("User created");
    setAuthenticating(false);
    return RegisterSuccess();
  };

  return (
    <React.Fragment>
      {authenticating && <FullpageLoader />}
      <div className="auth-bg-cover py-0 flex justify-center items-center min-h-full">
        {/* Form Starts Here */}
        <div className="auth-form overflow-hidden">
          <div className="flex flex-col items-center justify-center pb-2">
            <img src={chatLogo} alt="" width={70} />
            <h1 className="text-center font-mono text-20 text-gray-400 pb-4">{APP_NAME}</h1>
          </div>
          {error && <AlertError message={error} />}
          <div className="form-group relative mb-4">
            <input type="text" className="form-control" placeholder="Username " id="UserName" />
            <UserIcon className="fa text-gray-400 dark:text-gray-500 w-4 h-4" />
          </div>
          <div className="form-group relative mb-4">
            <input type="password" className="form-control" placeholder="Password" id="Passwod" />
            <EyeIcon className="fa text-gray-400 dark:text-gray-500 w-4 h-4" />
          </div>
          <span className="alert">Invalid Credentials</span>
          <Link to="/" className="link">
            Already Have an Account&nbsp;?
          </Link>
          <button
            className="login-btn bg-gray-700 hover:bg-gray-800 font-bold py-2 px-4 rounded inline-flex justify-center items-center"
            onClick={createUser}
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
