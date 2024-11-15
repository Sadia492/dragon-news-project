import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserIcon from "../assets/user.png";
import { authContext } from "../Provider/AuthProvider";
export default function Navbar() {
  const { user, signOutUser } = useContext(authContext);
  return (
    <div className="grid grid-cols-3 place-items-center items-center">
      <div>{user && user.email}</div>
      <div className="space-x-2">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Career</NavLink>
      </div>
      <div className="flex justify-center items-center place-self-end gap-3">
        <div>
          <img className="rounded-full" src={UserIcon} alt="" />
        </div>
        {user && user?.email ? (
          <Link to={"/"} onClick={signOutUser} className="btn btn-neutral">
            Log Out
          </Link>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
