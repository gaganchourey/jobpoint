import React from "react";
import { ArrowUpRight } from "lucide-react";

const Leftcontent = () => {
  return (
    <div className="h-full flex flex-col justify-between w-1/3 ">
      <div className="p-5">
        <p className=" mb-7 text-6xl font-bold">
          Students <br /> <span>Got Offer From</span> <br /> JobFinder
        </p>
        <div  id='yes' className="max-h-60 overflow-y-auto p-2">
          <p className="text-xl text-gray-400">
            JobFinder is a modern job portal designed to connect students and
            fresh graduates with top companies. We bridge the gap between talent
            and opportunity through verified listings and smart matching tools.
            Our mission is to make job hunting simple, transparent, and
            successful for every candidate.
          </p>
        </div>
      </div>
      <div>
        <ArrowUpRight size={80} />
      </div>
    </div>
  );
};

export default Leftcontent;
