interface AboutImageProps {
  image: string;
  alt: string;
}

const AboutImageSection = ({ image, alt }: AboutImageProps) => {
  return <img src={image} className="p-10 " alt={alt} />;
};

export default AboutImageSection;
