import React from "react";
import { Compare } from "./Compare";
 
export function CompareDemo() {
  return (
    <div className="w-2/5 h-[100vh]  flex items-center justify-center -mt-12 ">
      <div
        style={{
          transform: "rotateX(15deg) translateZ(80px)",
        }}
        className="  rounded-3xl dark:bg-neutral-900 bg-neutral-100   dark:border-neutral-800 mx-auto w-3/4 h-1/2 md:h-3/4"
      >
        <Compare
          firstImage="/pe2.png"
          secondImage="/resume_mockup.png"
          firstImageClassName="object-cover object-left-top w-full"
          secondImageClassname="object-cover object-left-top left-[-1.5rem]  w-full"
          className="w-full h-full rounded-lg md:rounded-lg overflow-hidden"
          slideMode="hover"
          autoplay={true}
        />
      </div>
    </div>
  );
}