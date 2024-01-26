import { FC } from "react";

import Slider from "./Slider";

interface IIntroductionContainer {
  data: {
    author: string;
    profession: string;
    lyrics: string[];
  };
}
const IntroductionContainer: FC<IIntroductionContainer> = ({ data }) => {
  const { author, profession, lyrics } = data;

  return (
    <div className="h-screen flex flex-col w-full">
      <div className="h-3/4 flex items-center justify-center">
        <div>
          {/* author */}
          <div className="pb-10">
            <span className="uppercase text-2xl tracking-[.50em]">
              {author}
            </span>
          </div>

          {/* proffesion + separator */}
          <div className="md:flex">
            <span className="text-6xl lg:text-8xl">{profession}</span>
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-80 h-1 rounded-full bg-lightBlue mx-5"></div>
            </div>
          </div>

          {/* text slider */}
          <Slider lyrics={lyrics} intervalTime={2000} />
        </div>
      </div>
      {/* go down button */}
      <div className="h-1/4 flex items-end justify-center pb-10">
        <a href="#test">
          <div className="rounded-[20px] h-10 w-6 border-darkBlue border-4 flex justify-center ">
            <div className="rounded h-2 w-[4px] bg-darkBlue "></div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default IntroductionContainer;
