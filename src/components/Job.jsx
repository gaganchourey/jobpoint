import React from "react";
import { Bookmark } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Job = (props) => {
  const navigate = useNavigate();

  return (
    <div
    id="jobs-section"
      className="
        bg-white rounded-2xl shadow-lg p-5 
        w-[330px] h-full  
        hover:shadow-2xl hover:-translate-y-1 
        transition-all duration-300 cursor-pointer 
        flex flex-col
      "
    >
      {/* TOP */}
      <div className="flex justify-between items-start mb-4">
        <img
          src={props.logo}
          alt=""
          className="w-12 h-12 object-contain rounded"
        />

        <button className="flex items-center gap-1 text-gray-500 hover:text-black">
          <span className="text-sm">Save</span>
          <Bookmark size={16} />
        </button>
      </div>

      {/* CENTER */}
      <div className="mb-4 flex-1">
        <h3 className="font-semibold text-lg text-gray-800 flex items-center gap-2">
          {props.company}
          <span className="text-gray-400 text-sm">{props.date}</span>
        </h3>

        <h2 className="text-xl font-bold text-gray-900">{props.post}</h2>

        <div className="flex gap-2 mt-3 flex-wrap">
          <span className="px-3 py-1 text-sm bg-gray-200 rounded-full font-medium">
            {props.tag1}
          </span>
          <span className="px-3 py-1 text-sm bg-gray-200 rounded-full font-medium">
            {props.tag2}
          </span>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex justify-between items-center mt-auto">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{props.pay}</h3>
          <p className="text-sm text-gray-500">{props.location}</p>
        </div>

        <button
          onClick={() => navigate("/apply")}
          className="
            flex items-center justify-center 
            bg-purple-600 text-white rounded
            hover:bg-purple-800 hover:scale-110
            transition-all duration-300 shadow-md px-3 py-2
          "
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Job;
