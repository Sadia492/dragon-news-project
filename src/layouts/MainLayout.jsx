import React from "react";
import Header from "../components/Header";
import { Link, Outlet } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import NewsHome from "../components/NewsHome";
import Sidebar from "../components/RightSidebar";
export default function MainLayout() {
  return (
    <div className="w-4/5 mx-auto">
      <header>
        <Header></Header>
        <div>
          <div className="flex font-bold items-center justify-center bg-[#F3F3F3] p-2">
            <div className="p-2">
              <button className="text-white bg-[#D72050] py-2 px-4">
                Latest
              </button>
            </div>
            <Marquee speed={100}>
              <Link>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, quisquam!
              </Link>
              <Link>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, quisquam!
              </Link>
              <Link>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, quisquam!
              </Link>
            </Marquee>
          </div>
        </div>
        <nav className="my-8">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="grid grid-cols-12 gap-6">
        <aside className="col-span-3">
          <LeftSidebar></LeftSidebar>
        </aside>
        <section className="col-span-6">
          <h2>Dragon News Home</h2>
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <Sidebar></Sidebar>
        </aside>
      </main>
    </div>
  );
}
