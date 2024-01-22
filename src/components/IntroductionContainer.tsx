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
    <div className="h-screen flex items-center justify-center w-full">
      <div>
        {/* author */}
        <div className="pb-10">
          <span className="uppercase text-2xl tracking-[.50em]">{author}</span>
        </div>

        {/* proffesion + separator */}
        <div className="flex">
          <span className="text-8xl">{profession}</span>
          <div className="flex items-center justify-center">
            <div className="w-80 h-1 rounded-full bg-lightBlue mx-5"></div>
          </div>
        </div>

        {/* text slider */}
        <Slider lyrics={lyrics} intervalTime={2000} />

        {/* go down button */}
        <div className="absolute bottom-10 left-1/2">
          <a href="#test">
            <div className="rounded-[20px] h-10 w-6 border-darkBlue border-4 relative">
              <div className="rounded h-2 w-[4px] bg-darkBlue absolute left-[calc(50%-2px)]"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default IntroductionContainer;
