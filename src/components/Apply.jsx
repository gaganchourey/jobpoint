import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Apply = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    techStack: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can replace this with an API call later
    console.log("Form submitted:", formData);
    alert("✅ Application submitted successfully!");
    
    // reset form
    setFormData({
      name: "",
      email: "",
      experience: "",
      techStack: "",
      resume: null,
    });
  };

  const navigate = useNavigate()

  return (
    <div className="flex min-h-full flex-col md:flex-row justify-center items-center px-6 py-10 md:py-12 bg-white mt-4 mb-4">

      {/* Left side image (hidden on small screens) */}
      <div className="hidden md:block w-3/8">
        <img
          src="https://media.istockphoto.com/id/2175612258/vector/woman-laptop-recruitment-job-search-online-cartoon.jpg?s=612x612&w=0&k=20&c=ONyOTVaX3uvq52Mra8CZwyVlKNknQcsS48l4Bre4HPk="
          alt="Apply illustration"
          className="w-3/4 mx-auto"
        />
      </div>

      {/* Right side form */}
      <div className="w-full md:w-1/2 bg-blue-200 shadow-lg rounded-2xl p-8! mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-500 mb-6 text-center">
          Apply for Your Dream Job 🚀
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block text-sm font-semibold mb-2">Experience</label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="e.g. 2 years, Fresher, Intern"
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Tech Stack */}
          <div>
            <label className="block text-sm font-semibold mb-2">Tech Stack</label>
            <input
              type="text"
              name="techStack"
              value={formData.techStack}
              onChange={handleChange}
              placeholder="e.g. React, Node.js, MongoDB"
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-sm font-semibold mb-2">Upload Resume</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl p-2 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-blue-400 file:text-white hover:file:bg-blue-500 cursor-pointer"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Link  to="/">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6! py-3! mt-2 active: rounded transition-all duration-200"
            >
              Submit Application
            </button></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Apply;
