import { FC } from "react";
import Lottie, { Options } from "react-lottie";

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

  const options: Options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      className: "static z-[-1]",
    },
  };

  const options2: Options = {
    loop: true,
    autoplay: true,
    animationData: scrollDownAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      className: "static z-[-1]",
    },
  };

  return (
    <div className="min-h-screen">
      <div className="lg:flex ">
        <div className="lg:w-1/2 flex items-center">
          <div className="mx-20 mt-20 lg:m-0">
            <h1 className="bitter lg:text-[128px] text-6xl">
              Hi, <br /> I am <span className="text-darkBlue">{author}</span>
            </h1>
            <h2 className="text-4xl uppercase">{profession}</h2>
            <p className="dark:text-slate-300 my-10">{subtitle}</p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Lottie options={options} speed={3} />
        </div>
      </div>
      <div>
        <a href="#test">
          <Lottie
            options={options2}
            isClickToPauseDisabled={true}
            speed={1.5}
            width={64}
          />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
