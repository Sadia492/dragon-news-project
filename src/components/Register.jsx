import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";

export default function Register() {
  const { createNewUser, updateUser, setUser } = useContext(authContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    createNewUser(email, password).then((result) => {
      console.log(result.user);
      setUser(result.user);
      updateUser({ displayName: name, photoURL: photo });
    });

    // console.log(name);
  };
  return (
    <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
      <h2 className="text-2xl font-semibold text-center">
        Register your account
      </h2>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>
        {/* {error.name && (
          <label className="label text-sx text-red-500">{error.name}</label>
        )} */}

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="photo-url"
            className="input input-bordered"
            required
          />
        </div>
        {/* email input  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
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
            name="password"
            type="password"
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
        {/* {error.register && <label className="label">{error.register}</label>} */}

        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-none">Register</button>
        </div>
      </form>
      <p className="text-center font-semibold">
        Allready Have An Account ?{" "}
        <Link className="text-red-500" to="/auth/login">
          Login
        </Link>
      </p>
    </div>
  );
}
