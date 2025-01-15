import React from "react";
import ProjectTab from "../ProjectTab";
import image1 from "../../assets/onixPhoneriyal.jpeg";
import image2 from "../../assets/onixLaptop.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Onixstore() {
  useGSAP(() => {
    gsap.fromTo(
      ".onix",
      { scale: "0",
        translateY:"-100%"
        }, // Starting state
      { scale: "1",
        translateY:"0%", duration: 1.6, delay:0.3 } // Ending state with animation duration
    );
  }, []);
  return (
    <div>
      <ProjectTab image1={image1} image2={image2} link1={'https://github.com/Daniyalk0/onixstore'} link2={'https://onixstore.vercel.app/'} classImage2={' w-full object-cover md:h-[100%] h-full '} classImage1={`-translate-y-10 md:-translate-y-0 w-full object-cover md:h-[100%] xs:h-[125%] `} wClass={'onix md:w-[45.5vw] md:h-[330px] xs:h-[230px]'}/>
    </div>
  );
}

export default Onixstore;
