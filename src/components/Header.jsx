import React from "react";
import logo from "../assets/logo.png";
import moment from "moment";

export default function Header() {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="my-4">
        <img src={logo} alt="" />
      </div>
      <p>Journalism Without Fear or Favour</p>
      <p className="font-medium">{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
}
