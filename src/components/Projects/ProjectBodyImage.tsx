interface ProjectImageProps {
  image: string;
  name: string;
}

const ProjectImage = ({ image, name }: ProjectImageProps) => {
  return (
    <div className="w-full ">
      <img src={image} alt={name} />
    </div>
  );
};

export default ProjectImage;
