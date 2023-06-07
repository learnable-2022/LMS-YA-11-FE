import React from "react";
import Nav from "../components/navAuth/nav.js";
import Main from "../components/heroSection/main.js";
import Range from "../components/range/range.js";
import Topcourses from "../components/courses/topCourses.js";
import Instructors from "../components/instructor/instructor.js";
import Testimonials from "../components/testimonials/testimonials.js";
import Levelup from "../components/levelUp/levelUp.js";
import Newcourses from "../components/courses/newCourses.js";
import Footer from "../components/footer/footer.js";

export default function Landingpage() {
  return (
    <>
      <Nav />
      <Main />
      <Range />
      <Topcourses />
      <Instructors />
      <Testimonials />
      <Levelup />
      <Newcourses />
      <Footer />
    </>
  );
}
