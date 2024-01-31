const handlePorjectIndex = (index: number): string =>
  index < 10 && index > 0 ? `0${index}` : index.toString();

export default handlePorjectIndex;
