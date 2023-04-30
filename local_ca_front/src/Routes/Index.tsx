import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Authentication/Login";
import ProtectedUser from "./ProtectedUser";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route
            path="*"
            element={
              <ProtectedUser>
                <h1>yo broooo</h1>
              </ProtectedUser>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
