import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CircleUserRound } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToJobs = () => {
    const section = document.getElementById("jobs-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`w-full py-3 px-4 flex items-center justify-between transition-all duration-500 sticky top-0 z-50 ${
        scrolled ? "bg-purple-800 shadow-lg" : "bg-purple-500"
      }`}
    >
      {/* LEFT SIDE — Logo */}
      <Link to="/">
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="/JobpointLogo.png"
            alt="JobPoint Logo"
            className="w-13 h-13 object-contain"
          />
          <h1 className="text-2xl font-bold text-white">
            Job<span>point</span>
          </h1>
        </div>
      </Link>

      {/* RIGHT SIDE — Search + Filter */}
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search jobs or companies..."
          className="border border-gray-300 rounded-md px-3 py-2 w-56 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
        />

        <select className="border border-gray-300 rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300">
          <option>Job Type</option>
          <option value="fulltime">Full-Time</option>
          <option value="parttime">Part-Time</option>
          <option value="remote">Remote</option>
          <option value="internship">Internship</option>
        </select>

        <Link className="">
          <button
            onClick={scrollToJobs}
            className="bg-green-50 text-blue-900 px-4 py-2 rounded hover:bg-blue-600 active:scale-95 transition duration-300"
          >
            Search
          </button>
        </Link>

        <Link to="/login">
          <CircleUserRound size={35} strokeWidth={1.5} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
