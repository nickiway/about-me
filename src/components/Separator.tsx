interface SeparatorProps {
  className?: string;
}

const Separator = ({ className }: SeparatorProps) => {
  return (
    <div className={className}>
      <div
        className={"w-20 h-1 rounded-full dark:bg-darkBlue bg-red-950"}
      ></div>
    </div>
  );
};

export default Separator;
