import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Postjob = ({ setJobs }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    logo: "",
    company: "",
    date_posted: "",
    position: "",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Add new job to App state
    setJobs((prevJobs) => [...prevJobs, formData]);

    // ✅ Redirect back to home where jobs are visible
    navigate("/");


    console.log('hooo gyyy')
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-6 py-10 md:py-12 bg-white mt-4 mb-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl px-4 py-2 w-full max-w-lg space-y-5 m-4"
      >
        <h2 className="text-2xl font-semibold text-center mb-4 text-blue-600">
          Post a New Job
        </h2>

        {/* Logo URL */}
        <div>
          <label className="block mb-1 font-medium">Logo URL</label>
          <input
            type="text"
            name="logo"
            value={formData.logo}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            placeholder="Enter company logo URL"
            required
          />
        </div>

        {/* Company */}
        <div>
          <label className="block mb-1 font-medium">Company Name</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            placeholder="Enter company name"
            required
          />
        </div>

        {/* Date */}
        <div>
          <label className="block mb-1 font-medium">Date Posted</label>
          <input
            type="text"
            name="date_posted"
            value={formData.date_posted}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            placeholder="e.g. 3 days ago"
          />
        </div>

        {/* Position */}
        <div>
          <label className="block mb-1 font-medium">Position</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            placeholder="e.g. GPU Programmer"
            required
          />
        </div>

        {/* Tag1 */}
        <div>
          <label className="block mb-1 font-medium">Employment Type</label>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="tag1"
                value="Full Time"
                checked={formData.tag1 === "Full Time"}
                onChange={handleChange}
              />{" "}
              Full Time
            </label>
            <label>
              <input
                type="radio"
                name="tag1"
                value="Part Time"
                checked={formData.tag1 === "Part Time"}
                onChange={handleChange}
              />{" "}
              Part Time
            </label>
          </div>
        </div>

        {/* Tag2 */}
        <div>
          <label className="block mb-1 font-medium">Experience Level</label>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="tag2"
                value="Entry Level"
                checked={formData.tag2 === "Entry Level"}
                onChange={handleChange}
              />{" "}
              Entry Level
            </label>
            <label>
              <input
                type="radio"
                name="tag2"
                value="Senior Level"
                checked={formData.tag2 === "Senior Level"}
                onChange={handleChange}
              />{" "}
              Senior Level
            </label>
          </div>
        </div>

        {/* Pay */}
        <div>
          <label className="block mb-1 font-medium">Pay</label>
          <input
            type="text"
            name="pay"
            value={formData.pay}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            placeholder="e.g. $120/hour"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block mb-1 font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            placeholder="e.g. Santa Clara, USA"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition mt-2 active:scale-95"
        >
          POST
        </button>
      </form>
    </div>
  );
};

export default Postjob;
