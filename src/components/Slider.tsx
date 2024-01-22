import { useState, FC, useEffect } from "react";

interface SliderProps {
  lyrics: string[];
  intervalTime: number;
}

const Slider: FC<SliderProps> = ({ lyrics, intervalTime }) => {
  const [currentLyric, setCurrentLyric] = useState(lyrics[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLyric(lyrics[Math.floor(Math.random() * lyrics.length)]);
    }, intervalTime);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <p className="text-8xl text-lightBlue">
        <span className="text-gray-500 text-bold pr-5 font-bold">+</span>
        {currentLyric}
      </p>
    </div>
  );
};

export default Slider;
