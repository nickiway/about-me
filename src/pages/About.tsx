import me from "../assets/images/me.jpg";

const About = () => {
  return (
    <div className="flex justify-center">
      <div className="container md:grid grid-cols-2">
        <div className="flex justify-end px-20">
          <div className="text-gray-700 dark:text-white ">
            <h1 className="text-4xl py-5">Hi there</h1>

            <p className="text-lg leading-7 py-5">
              I'm a software engineer who enjoys building things that live on
              the internet. I develop exceptional websites and web apps that
              provide intuitive, pixel-perfect user interfaces with efficient
              and modern backends.
            </p>
            <p className="text-lg leading-7 py-5">
              Shortly after graduating from the University of California, Santa
              Barbara, I joined the engineering team at Upstatement where I work
              on a wide variety of interesting and meaningful projects on a
              daily basis.
            </p>
            <p className="text-lg leading-7 py-5">
              Here's a few technologies I've been working with recently:
            </p>
            <ul className="list-disc pl-10">
              <li>TypeScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>GraphQL</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
            <div>Contact Me</div>
          </div>
        </div>
        <div className="py-10 px-10 ">
          <img src={me} alt="Me" />
        </div>
      </div>
    </div>
  );
};

export default About;
