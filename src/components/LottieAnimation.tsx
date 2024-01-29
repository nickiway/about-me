import { FC } from "react";
import Lottie, { Options } from "react-lottie";

interface LottieAnimationProps {
  lotti: unknown;
  height?: number;
  width?: number;
  classes?: string;
  speed?: number;
  isClickToPauseDisabled?: boolean;
}

const LottieAnimation: FC<LottieAnimationProps> = ({
  lotti,
  height,
  width,
  classes,
  speed,
  isClickToPauseDisabled,
}) => {
  const options: Options = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      className: classes,
    },
  };
  return (
    <div>
      <Lottie
        options={options}
        height={height}
        width={width}
        speed={speed}
        isClickToPauseDisabled={isClickToPauseDisabled}
      />
    </div>
  );
};

export default LottieAnimation;
