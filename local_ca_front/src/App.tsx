import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
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
