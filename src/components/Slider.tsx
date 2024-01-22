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
      <span className="text-8xl text-lightBlue">{currentLyric}</span>
    </div>
  );
};

export default Slider;
