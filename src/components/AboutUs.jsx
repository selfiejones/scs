import React from "react";
import { vectorabout } from "./homepage/index.js";
import styles, { layout } from "../styles.js";
import Certification from "./Certification.jsx";

const AboutUs = () => (
  <section id="about" className={layout.section}>
    <div className="justify-between">
      <div className="flex items-center">
        <div className="w-[6px] h-10  bg-primary"></div>
        <h2 className="ml-5 font-sora font-semibold text-[35px] text-blackprime">
          ABOUT US
        </h2>
      </div>
      <div className="flex-col sm:mx-6 mx-1 ">
        <h1 className="font-sora font-semibold text-secondary text-[40px]  my-5">
          {" "}
          CHENNAI-HYDERABAD-BANGALORE
        </h1>
        <div className="max-w-2xl">
          <p className="font-sora font-normal text-[20px] leading-[35px]">
            Sai Cool Solution is India's Leading Heat reflective Paint
            manufacturing company with branches of 15 all over India.
            <br />9 Years in the industry is the only Company to give a Warranty
            on paint, Providing the best service and Quality at a cost-effective
            price we are rated as No 1 in Google reviews
          </p>
        </div>
        <div className="justify-start">
          <Certification />
        </div>
      </div>
    </div>
    <div className="md:block  hidden flex-1 justify-end">
      <img
        src={vectorabout}
        alt="aboutlogo"
        className="w-auto h-[600px] mx-10"
      />
    </div>
  </section>
);

export default AboutUs;
