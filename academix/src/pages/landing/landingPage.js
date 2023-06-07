import React from "react";
import Nav from "../components/navAuth/nav.js";
import Main from "../components/heroSection/main.js";
import Range from "../components/range/range.js";
import TopCourses from "../components/courses/topCourses.js";
import Instructors from "../components/instructor/instructor.js";
import Testimonials from "../components/testimonials/testimonials.js";
import LevelUp from "../components/levelUp/levelUp.js";
import NewCourses from "../components/courses/newCourses.js";
import Footer from "../components/footer/footer.js";

export default function LandingPage() {
  return (
    <>
      <Nav />
      <Main />
      <Range />
      <TopCourses />
      <Instructors />
      <Testimonials />
      <LevelUp />
      <NewCourses />
      <Footer />
    </>
  );
}
