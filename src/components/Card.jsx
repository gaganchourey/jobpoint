import React from "react";
import { Link } from "react-router-dom";
import { Briefcase, Zap } from "lucide-react";

const Card = () => {
  return (
    <div className="w-full px-6 md:px-12 lg:px-20 flex flex-col "> 
    
      {/* This gives equal left & right margins */}
      
      <section className="hero bg-linear-to-br from-purple-600 via-purple-500 to-purple-700 rounded-3xl p-10 shadow-2xl">
        
        <div className="hero-content flex flex-col lg:flex-row justify-between items-center gap-10">
          
          

          {/* LEFT TEXT - stays LEFT ALIGNED */}
          <div className="hero-text flex-1 text-left space-y-6">
           
            <h1 className="text-4xl font-bold text-white leading-tight">
              <span>Jobpoint-</span> <br/>Find Your Dream Job or Hire the Best Talent
            </h1>

            <p className="text-white/80 text-lg max-w-xl">
              Join thousands of professionals and employers on JobBoardPro — your one-stop platform to discover, connect, and grow your career.
            </p>

            <Link to="/postjob">
              <button className="hero-btn px-8 py-3 rounded-full bg-blue-700 text-blue-700 font-bold hover:scale-105 transition">
                Post a Job
              </button>
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-image flex-1 flex justify-center">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/job-interview-illustration-download-in-svg-png-gif-file-formats--hiring-human-resources-hr-business-pack-illustrations-4182832.png"
              alt="illustration"
              className="w-80 md:w-96 drop-shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
