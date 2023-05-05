import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Authentication/Login";
import ProtectedUser from "./ProtectedUser";
import ChatList from "../pages/Chats/ChatList";
import SignUp from "../pages/Authentication/SignUp";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />

          <Route element={<ProtectedUser />}>
            <Route path="chats" element={<ChatList />} />
          </Route>

          <Route path="*" element={<h1>yo broooo</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
