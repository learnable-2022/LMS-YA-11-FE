import React from "react";
import Nav from "../components/navAuth/nav.js";
import Main from "../components/heroSection/main.js";
import Range from "../components/range/range.js";
import Instructors from "../components/instructor/instructor.js";
import Testimonials from "../components/testimonials/testimonials.js";
import LevelUp from "../components/levelUp/levelUp.js";
import Service from "../components/serviceEnroll/service.js";
import Enroll from "../components/serviceEnroll/enroll.js";
import Footer from "../components/footer/footer.js";

export default function LandingPage() {
  return (
    <>
      <Nav />
      <Main />
      <Range />
      <Instructors />
      <Testimonials />
      <LevelUp />
      <Service />
      <Enroll />
      <Footer />
    </>
  );
}
