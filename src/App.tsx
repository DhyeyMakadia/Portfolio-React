import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import EducationAndExperience from "./components/Education&Experience/EducationAndExperience";
import Work from "./components/Work/Work";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Email from "./components/Email/Email";

function App() {
  return (
    <>
      <Navbar />
      <SocialMedia />
      <Email />
      <div className={`d-flex flex-column canAlsoBlur main-content`}>
        <div className="container">
          <Hero
            post="Developer"
            companyName="tatvasoft"
            companyLink="https://www.tatvasoft.com/"
          />
          <About />
          <EducationAndExperience />
          <Work />
          <ContactUs />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default App;
