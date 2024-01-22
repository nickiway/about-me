import Separator from "../components/Separator";
import me from "../assets/images/me.jpg";

const About = () => {
  return (
    <div className="flex justify-center">
      <div className="container grid grid-cols-2">
        <div>
          <h1 className="text-4xl">Hi there</h1>
          <div className="py-5">
            <Separator />
          </div>

          <div className="text-gray-700 dark:text-white">
            <p className="text-lg leading-7">
              I'm a software engineer who enjoys building things that live on
              the internet. I develop exceptional websites and web apps that
              provide intuitive, pixel-perfect user interfaces with efficient
              and modern backends.
            </p>
            <p className="text-lg leading-7">
              Shortly after graduating from the University of California, Santa
              Barbara, I joined the engineering team at Upstatement where I work
              on a wide variety of interesting and meaningful projects on a
              daily basis.
            </p>
            <p className="text-lg leading-7">
              Here's a few technologies I've been working with recently:
            </p>
          </div>
        </div>
        <div>
          <img src={me} alt="Me" />
        </div>
      </div>
    </div>
  );
};

export default About;
