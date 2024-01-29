import { FC } from "react";

import LottieAnimation from "./LottieAnimation";

import animationData from "../assets/images/scene1-2024-01-29.json";
import scrollDownAnimationData from "../assets/images/Animation - 1706527873391.json";

interface HeroProps {
  data: {
    author: string;
    profession: string;
    subtitle: string;
  };
}
const HeroSection: FC<HeroProps> = ({ data }) => {
  const { author, profession, subtitle } = data;

  return (
    <div className="min-h-screen">
      <div className="lg:flex ">
        <div className="lg:w-1/2 flex items-center">
          <div className="mx-20 mt-20 lg:m-0">
            <h1 className="bitter lg:text-[128px] text-6xl">
              Hi, <br /> I am <span className="text-darkBlue">{author}</span>
            </h1>
            <h2 className="lg:text-4xl text-2xl uppercase">{profession}</h2>
            <p className="dark:text-slate-300 my-10">{subtitle}</p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <LottieAnimation lotti={animationData} speed={3} />
        </div>
      </div>
      <div>
        <a href="#test">
          <LottieAnimation
            lotti={scrollDownAnimationData}
            width={64}
            speed={1.5}
            isClickToPauseDisabled={true}
          />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
