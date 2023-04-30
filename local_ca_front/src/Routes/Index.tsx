import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Authentication/Login";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="*" element={<h1>yo broooo</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
