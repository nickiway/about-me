interface ProjectImageProps {
  image: string;
  name: string;
}

const ProjectImage = ({ image, name }: ProjectImageProps) => {
  console.log("render ProjectImage");
  return (
    <div className="w-full ">
      <img src={image} alt={name} />
    </div>
  );
};

export default ProjectImage;
