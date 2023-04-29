import React, { useState } from "react";
import AlertError from "./Components/Common/Alerts/AlertError";
import DeleteModal from "./Components/Common/DeleteModal";
import ThemeToggler from "./services/ThemeToggler";
import { ToastContainer } from "react-toastify";
import { notifyError } from "./services/Notify";
import { APP_NAME } from "./services/constants";
import Route from "./Routes/Index";

function App() {
  return (
    <>
      <ToastContainer autoClose={4000} style={{ width: "400px" }} />
      <div className="h-screen w-full dark:text-gray-200 dark:bg-slate-900 duration-100">
        <Route />
      </div>
    </>
  );
}

export default App;
