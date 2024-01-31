import AboutPTag from "./AboutPTag";
interface AboutTextSectionProps {
  paragraphs: string[];
}

const AboutTextSection = ({ paragraphs }: AboutTextSectionProps) => {
  return (
    <div className="py-10 px-5">
      <p className="section-title">Hi. I'm Nick</p>

      {paragraphs.map((paragraph) => (
        <AboutPTag>{paragraph}</AboutPTag>
      ))}
    </div>
  );
};

export default AboutTextSection;
