import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { QueryClientProvider, QueryClient } from "react-query";
import Route from "./Routes/Index";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer autoClose={4000} style={{ width: "400px" }} />
      <div className="h-screen w-full dark:text-gray-200 dark:bg-slate-900 duration-100">
        <Route />
      </div>
    </QueryClientProvider>
  );
}

export default App;
