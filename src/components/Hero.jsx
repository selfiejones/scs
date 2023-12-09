import React from "react";
import styles, { layout } from "../styles.js";
import { bucket } from "./homepage/index.js";
import { benefits } from "../constants/index.js";

const BenefitCard = ({ logo, title, index }) => (
  <div className={`flex flex-row justify-start items-center sm:mb-10 mb-2`}>
    <div className={`w-[64px] h-[64px] `}>
      <img src={logo} alt="icon" />
    </div>
    <div className="flex-1 flex flex-col ml-3 pb-3">
      <h4 className="font-sora font-semibold text-blackprime text-[18px]">
        {title}
      </h4>
    </div>
  </div>
);

const Hero = () => (
  <section
    id="home"
    className={`${styles.boxWidth} z-0 flex flex-wrap overflow-hidden ${styles.padding} bg-radial-gradient w-full`}
  >
    <div>
      <div
        className={`flex items-start flex-col justify-between z-0 md:flex-row    `}
      >
        <div className="flex  font-sora  font-extrabold rapidtop sm:text-[80px] text-[55px] object-contain sm:leading-[100px]">
          <h1 className="text-white">
            {" "}
            India's{" "}
            <a className="text-blackprime">
              No.1 <br className="sm:block hidden" /> Thermal{" "}
              <br className="sm:block hidden" />{" "}
            </a>{" "}
            Reflective <br className="sm:block hidden" /> Paint
          </h1>
        </div>
        <div className="sm:w-[800px]"></div>
        <div
          className={`flex-none justify-end mt-5 md:ml-2 items-start md:pl-[20px] flex-col rapidtop`}
        >
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.id} {...benefit} index={index} />
          ))}
        </div>
      </div>
    </div>
    <div className="flex-none fromdown ">
      <img
        src={bucket}
        alt="paint1"
        className="md:-translate-x-[70px]  -translate-x-[200px]  -mb-[50px] sm:-mt-[700px] -mt-[130px] h-auto sm:w-[1900px] w- w-[800px]"
      />
    </div>
  </section>
);

export default Hero;
