import React from "react";
import { iso, vectorigbc, certified } from "./homepage/index.js";


const Certification = () => {
  return (
    <section >
      <div className="flex justify-center" >
        <h1 className="font-sora font-thin text-[20px] text-blackprime2 my-5">
        -CERTIFICATION-
        </h1>
      </div>

      <div className="flex flex-row md:w-[800px] justify-between mx-5">
        <img src={certified} alt="certified" className="h-[60px] md:h-[120px] w-auto"/>
        <img src={vectorigbc} alt="igbc" className="h-[60px] md:h-[120px] w-auto " />
        <img src={iso} alt="iso" className="h-[60px] md:h-[120px] w-auto"/>
      </div>
    </section>
  );
};

export default Certification;
