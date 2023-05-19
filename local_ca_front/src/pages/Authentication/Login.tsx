import React from "react";
import { UserIcon, EyeIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { APP_NAME } from "../../utils/constants";
import AlertError from "../../Components/Common/Alerts/AlertError";
import chatLogo from "../../assets/svgs/chat.svg";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import FullpageLoader from "../../Components/Common/FullpageLoader";
import { useLoginWithUser } from "../../Hooks/useAuthenticationData";
import { IErrorBlock, ILoginParams, ILoginResponse, OptionalLoginParams } from "../../utils/types";
import { UseMutationResult } from "react-query";
import { useDispatch } from "react-redux";
import { setLoggedInUser } from "../../redux/Features/authSlice";
import { notifySuccess } from "../../utils/Notify";

import { Form, Field } from "react-final-form";

const ErrorBlock = ({ name }: IErrorBlock) => (
  <Field
    name={name}
    subscription={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) => (touched && error ? <small className="text-red-700">{error}</small> : null)}
  />
);

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const errorType = searchParams.get("q");

  const onFailure = (err: any) => {
    console.log("dont be a failure", err);
  };

  const onSuccess = (data: ILoginResponse, _variables: ILoginParams) => {
    /**set user and Redirect */
    dispatch(setLoggedInUser(true));
    navigate("/chats");
    localStorage.setItem("lca_user", JSON.stringify(data.data.result));
    notifySuccess("Login successful");
  };

  const mutation: UseMutationResult<any, any, ILoginParams, unknown> = useLoginWithUser();

  const setUserOnsubmit = (values: ILoginParams) => {
    console.log("onSubmit", values);
    mutation.mutate(values, {
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
          <Form
            onSubmit={setUserOnsubmit}
            validate={(values) => {
              const errors: OptionalLoginParams = {};

              if (!values.username) {
                errors.username = "Enter Your Username";
              }
              if (!values.password) {
                errors.password = "Enter your Password";
              }
              return errors;
            }}
          >
            {({ handleSubmit, submitting, values, submitError }) => (
              <form onSubmit={handleSubmit}>
                {/* {submitError && (
                  <div
                    className="alert alert-danger"
                    dangerouslySetInnerHTML={{
                      __html: `<strong>Error!</strong> ${submitError}`,
                    }}
                  />
                )} */}

                <div className="form-group relative mb-4">
                  <Field name="username" className="form-control" component="input" type="text" placeholder="Enter User Name" />

                  <ErrorBlock name="username" />

                  <UserIcon className="fa text-gray-400 dark:text-gray-500 w-4 h-4" />
                </div>
                <div className="form-group relative mb-4">
                  <Field name="password" className="form-control" component="input" type="text" placeholder="Enter Password" />
                  <ErrorBlock name="password" />

                  <EyeIcon className="fa text-gray-400 dark:text-gray-500 w-4 h-4" />
                </div>

                {mutation.isError && <span className="alert">{mutation.error.response?.data?.message || mutation.error.message}</span>}

                <a className="link" href="#">
                  Lost your password?
                </a>
                <button className="login-btn bg-gray-700 hover:bg-gray-800 font-bold py-2 px-4 rounded inline-flex justify-center items-center">
                  {submitting ? <span>Signing...</span> : <span>SignIn</span>}

                  <ArrowLongRightIcon className=" text-gray-400 dark:text-gray-500 w-7 h-7 mx-2" />
                </button>
              </form>
            )}
          </Form>

          <Link to="/sign-up" className="link mt-4">
            Don't Have an Account&nbsp;?
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
