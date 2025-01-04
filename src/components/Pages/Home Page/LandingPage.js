import React from "react";

import Service from "./LandingPage/Service/Service";
import Home from "./LandingPage/Home/Home";
import PopularCourses from "./LandingPage/Popular Courses/PopularCourses";
import Instructors from "./LandingPage/Instructors/Instructorrs";
import Testimonial from "./LandingPage/Testimonial/Testomial";
import About from "./LandingPage/About/About";
import IslamicProducts from "../Projects/IslamicProducts";

const LandingPage = () => {
  return (
    <div>
      <Home />
      <About />

      <Service />
      <PopularCourses />
      <Instructors />
      <Testimonial />
      <IslamicProducts />
    </div>
  );
};

export default LandingPage;
