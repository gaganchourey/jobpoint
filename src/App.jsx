import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Job from "./components/Job";
import Section1 from "./components/Section1/Section1";
import Page1Content from "./components/Section1/Page1content";
import Footer from "./components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Apply from "./components/Apply";
import Postjob from "./components/Postjob";
import Login from "./components/Login";

const App = () => {

  
  const [jobOpening, setJobOpening] = useState([
    {
      logo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      company: "Meta",
      date_posted: "5 days ago",
      position: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA",
    },
    {
      logo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      company: "Amazon",
      date_posted: "2 weeks ago",
      position: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Hyderabad, India",
    },
    {
      logo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      company: "Apple",
      date_posted: "3 weeks ago",
      position: "iOS Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Cupertino, USA",
    },
    {
      logo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      company: "Netflix",
      date_posted: "10 days ago",
      position: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hour",
      location: "Los Gatos, USA",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
      company: "Google",
      date_posted: "1 week ago",
      position: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hour",
      location: "Bangalore, India",
    },
    {
      logo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
      company: "Microsoft",
      date_posted: "4 weeks ago",
      position: "Data Scientist",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$75/hour",
      location: "Redmond, USA",
    },
    {
      logo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
      company: "IBM",
      date_posted: "2 days ago",
      position: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "New York, USA",
    },
    {
      logo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
      company: "Tesla",
      date_posted: "6 days ago",
      position: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hour",
      location: "Austin, USA",
    },
  ]);

  const placed = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=688",
      name: "Kanak",
      words:
        "JobFinder made my dream job search easy! I landed a developer role at Amazon within weeks!",
    },
    {
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
      name: "Naman",
      words:
        "Thanks to JobFinder, I got placed in Microsoft. The portal’s job alerts and resume tips really helped!",
    },
    {
      img: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1036",
      name: "Mehek",
      words:
        "JobFinder is the best platform for freshers! I secured a full-time position at Google effortlessly.",
    },
    {
      img: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=765",
      name: "Nayan",
      words:
        "I never thought finding my first tech job would be this easy—JobFinder truly delivers results!",
    },
  ];

  const location = useLocation();

  return (
    <div id="me" className="flex flex-col min-h-screen ">
      <Navbar />

      <main className="flex-1">
        {/* Hide Card on Apply & PostJob pages */}
        {location.pathname !== "/apply" &&
          location.pathname !== "/postjob" &&
          location.pathname !== "/login" && <Card />}

        <Routes>
          {/* ✅ Home Page - Job Listings */}
          <Route
            path="/"
            element={
              <>
                <div id="jobs" className="parent">
                  {jobOpening.map((elem, index) => (
                    <div key={index}>
                      <Job
                        logo={elem.logo}
                        company={elem.company}
                        post={elem.position}
                        date={elem.date_posted}
                        tag1={elem.tag1}
                        tag2={elem.tag2}
                        pay={elem.pay}
                        location={elem.location}
                      />
                    </div>
                  ))}
                </div>
                {/* <Section1 /> */}
                <Page1Content placed={placed} />
              </>
            }
          />

          {/* Apply Page */}
          <Route path="/apply" element={<Apply />} />

          {/* ✅ Post Job Page — pass setJobOpening */}
          <Route
            path="/postjob"
            element={<Postjob setJobs={setJobOpening} />}
          />

          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
