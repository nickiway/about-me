interface AboutImageProps {
  image: string;
  alt: string;
}

const AboutImageSection = ({ image, alt }: AboutImageProps) => {
  return (
    <div className="lg:w-1/2 flex justify-center">
      <img src={image} className="rounded-lg w-4/5 m-5" alt={alt} />;
    </div>
  );
};

export default AboutImageSection;
