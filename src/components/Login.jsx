import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";
import auth from "../firebase/firebase.config";

export default function Login() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { signInUser, setUser } = useContext(authContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const email = form.get("email");
    const password = form.get("password");
    signInUser(email, password).then((result) => {
      setUser(result.user);
      navigate(state ? state : "/");
    });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className="text-center">
          Dont’t Have An Account ?{" "}
          <Link to="/auth/register" className="text-red-500">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
