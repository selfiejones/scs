import React from "react";
import styles, { layout } from "../styles.js";
import { features1, features2, features3 } from "../constants/index.js";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className="flex-1 sm:flex  flex-row mt-[30px]  w-full  justify-start items-center">
    <div
      className={` md:w-[200px] w-[150px] mb-5 sm:mb-0 border-gradient mr-7 md:h-[200px] h-[150px]  ${styles.flexCenter} transition-transform duration-300 ease-in-out transform hover:scale-105`}
    >
      <img src={icon} alt="icon" className="w-auto md:h-[250px] h-[200px]" />
    </div>
    <div className="flex-1 flex flex-col justify-center ml-3">
      <h4 className="mb-1 font-sora font-semibold text-blackprime md:text-[40px] text-[24px]">
        {title}
      </h4>
      <div className="max-w-[400px]">
        <p className="font-sora font-normal md:text-[20px] text-m text-blackprime2">
          {content}
        </p>
      </div>
    </div>
  </div>
);
const FeatureCardRev = ({ icon, title, content, index }) => (
  <div className="flex-1  sm:flex flex-row-reverse mt-[30px]   w-full items-center">
    <div className="flex justify-end">
      <div
        className={`md:w-[200px] w-[150px] mb-5 sm:mb-0 border-gradient ml-7 md:h-[200px] h-[150px] ${styles.flexCenter} transition-transform duration-300 ease-in-out transform hover:scale-105`}
      >
        <img src={icon} alt="icon" className="w-auto md:h-[250px]  h-[200px]" />
      </div>
    </div>
    <div className=" flex flex-col justify-center mr-3 ">
      <h4 className="mb-1 text-right font-sora  text-blackprime font-semibold md:text-[40px] text-[24px]">
        {title}
      </h4>
      <div className="flex-none max-w-[400px]">
        <p className=" font-sora text-right  font-normal md:text-[20px] text-m text-blackprime2">
          {content}
        </p>
      </div>
    </div>
  </div>
);

const CoolRoofCoating = () => {
  return (
    <section className="md:py-0 py-7">
      <div>
        <div className="flex flex-row justify-center">
          <div className=" sm:w-0 w-[8px] sm:h-0 h-[100px] sm:mr-0 mr-3 bg-primary "></div>
          <h1 className="font-sora font-semibold text-[35px] sm:mb-10 mb-0 text-blackprime sm:underline decoration-primary decoration-[6px] underline-offset-[15px]">
            COOL ROOF COATING
          </h1>
        </div>
        <div className={`flex-1 flex-row md:ml-[250px] sm:ml-[50px] md:mr-[250px] sm:mr-[50px]`}>
          {features1.map((feature1, index) => (
            <FeatureCard key={feature1.id} {...feature1} index={index} />
          ))}
          {features2.map((feature2, index) => (
            <FeatureCardRev key={feature2.id} {...feature2} index={index} />
          ))}
          {features3.map((feature3, index) => (
            <FeatureCard key={feature3.id} {...feature3} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoolRoofCoating;
