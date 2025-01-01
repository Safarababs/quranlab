import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Service from "./components/Service/Service";
import About from "./components/About/About";
import Categories from "./components/Catagories/Catogaries";
import PopularCourses from "./components/Popular Courses/PopularCourses";
import Instructors from "./components/Instructors/Instructorrs";
import Testimonials from "./components/Testimonial/Testomial";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <>
      <Header />
      <Home />

      <About />
      <Categories />
      <Service />
      <PopularCourses />
      <Instructors />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
