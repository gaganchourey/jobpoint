import React from 'react'
import { Bookmark } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';

const Job = (props) => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    // Navigate to /apply and hide the Card (App.jsx already handles it)
    navigate('/apply');
  };

  return (
    <div className="job mt-2" id='jobs-section'>
      <div className="top">
        <img src={props.logo} alt="" />
        <button>
          Save <Bookmark size={15} />
        </button>
      </div>

      <div className="center">
        <h3>
          {props.company} <span>{props.date}</span>
        </h3>
        <h2>{props.post}</h2>
        <div className="tag">
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
        </div>
        <button className="p-2 rounded" onClick={handleApplyClick}>
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Job;
