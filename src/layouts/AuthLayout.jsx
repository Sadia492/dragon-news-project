import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="bg-[#f3f3f3] h-screen">
      <div className="w-4/5 mx-auto">
        <div>
          <Navbar></Navbar>
        </div>
        <div className="flex justify-center items-center h-[calc(100vh-48px)]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
