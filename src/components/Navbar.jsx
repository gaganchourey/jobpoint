import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CircleUserRound } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  // Detect scroll for background color
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

  // Detect scroll direction for hiding navbar
  useEffect(() => {
    const handleHideOnScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 50) {
        setHidden(true); // scrolling down → hide navbar
      } else {
        setHidden(false); // scrolling up → show navbar
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleHideOnScroll);
    return () => window.removeEventListener("scroll", handleHideOnScroll);
  }, [lastScroll]);

  const scrollToJobs = () => {
    const section = document.getElementById("jobs-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`
        w-full py-3 px-4 flex flex-wrap items-center justify-between gap-3 
        transition-all duration-500 sticky top-0 z-50
        ${scrolled ? "bg-purple-800 shadow-lg" : "bg-purple-500"}
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      {/* LEFT SIDE — LOGO */}
      <Link to="/" className="flex items-center gap-2 cursor-pointer">
        <img
          src="/JobpointLogo.png"
          alt="JobPoint Logo"
          className="w-12 h-12 object-contain"
        />
        <h1 className="text-2xl font-bold text-white">
          Job<span>point</span>
        </h1>
      </Link>

      {/* RIGHT SIDE — SEARCH + FILTER + PROFILE */}
      <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-center md:justify-end">

        {/* SEARCH INPUT */}
        <input
          type="text"
          placeholder="Search jobs or companies..."
          className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-56 
                     focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        />

        {/* JOB TYPE DROPDOWN */}
        <select className="border border-gray-300 rounded-md px-2 py-2 w-full sm:w-auto 
                           focus:outline-none focus:ring-2 focus:ring-blue-600 transition">
          <option>Job Type</option>
          <option value="fulltime">Full-Time</option>
          <option value="parttime">Part-Time</option>
          <option value="remote">Remote</option>
          <option value="internship">Internship</option>
        </select>

        {/* SEARCH BUTTON */}
        <button
          onClick={scrollToJobs}
          className="bg-green-50 text-blue-900 px-4 py-2 rounded 
                     hover:bg-blue-600 hover:text-white active:scale-95 transition 
                     w-full sm:w-auto"
        >
          Search
        </button>

        {/* LOGIN ICON */}
        <Link to="/login" className="flex justify-center w-full sm:w-auto">
          <CircleUserRound size={35} strokeWidth={1.5} />
        </Link>   
      </div>
    </nav>
  );
};

export default Navbar;
