import { useState, FC, useEffect } from "react";

interface ITextSlider {
  lyrics: string[];
}

const TextSlider: FC<ITextSlider> = ({ lyrics }) => {
  const [currentLyric, setCurrentLyric] = useState(lyrics[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLyric(lyrics[Math.floor(Math.random() * lyrics.length)]);
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <span className="text-8xl text-lightBlue">{currentLyric}</span>
    </div>
  );
};

export default TextSlider;
