import AboutPTag from "./AboutPTag";
import Separator from "../Separator";
import ContactButtons from "./ContactButtons";

interface AboutTextSectionProps {
  paragraphs: string[];
}

const AboutTextSection = ({ paragraphs }: AboutTextSectionProps) => {
  return (
    <div className="lg:w-1/2">
      <div className="py-10 px-5">
        <p className="lg:text-[128px] bitter text-6xl my-5 font-bold">
          Hi There!
        </p>

        <Separator className="my-5" />

        <p className="text-6xl font-thin">I'm Frontend Dev</p>
        <p className="text-l font-bold">Coding | developing</p>

        {paragraphs.map((paragraph) => (
          <AboutPTag>{paragraph}</AboutPTag>
        ))}

        <ContactButtons />
      </div>
    </div>
  );
};

export default AboutTextSection;
