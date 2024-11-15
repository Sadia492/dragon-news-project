import React from "react";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import swimming from "../assets/swimming.png";
import classImg from "../assets/class.png";
import playground from "../assets/playground.png";

export default function Sidebar() {
  return (
    <div className="w-64 p-4 bg-white shadow-lg">
      {/* Login Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Login With</h2>
        <button className="btn btn-outline w-full flex items-center gap-2 mb-2">
          <FaGoogle /> Login with Google
        </button>
        <button className="btn btn-outline w-full flex items-center gap-2">
          <FaGithub /> Login with Github
        </button>
      </div>

      {/* Social Media Links */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Find Us On</h2>
        <div className="space-y-2">
          <button className="btn btn-outline w-full flex items-center gap-2">
            <FaFacebook /> Facebook
          </button>
          <button className="btn btn-outline w-full flex items-center gap-2">
            <FaTwitter /> Twitter
          </button>
          <button className="btn btn-outline w-full flex items-center gap-2">
            <FaInstagram /> Instagram
          </button>
        </div>
      </div>

      {/* Q-Zone Section */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Q-Zone</h2>
        <div className="space-y-4">
          <div className="shadow-lg">
            <img src={swimming} alt="Swimming" className="rounded-lg" />
            <p className="text-center mt-2 font-semibold">Swimming</p>
          </div>
          <div className="shadow-lg">
            <img src={classImg} alt="Class" className="rounded-lg" />
            <p className="text-center mt-2 font-semibold">Class</p>
          </div>
          <div className="shadow-lg">
            <img src={playground} alt="Play Ground" className="rounded-lg" />
            <p className="text-center mt-2 font-semibold">Play Ground</p>
          </div>
        </div>
      </div>
    </div>
  );
}
