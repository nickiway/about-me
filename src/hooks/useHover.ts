import { useState } from "react";

export const useHover = (
  initialState?: boolean
): [boolean, { onMouseEnter: () => void; onMouseLeave: () => void }] => {
  const [hovered, setHovered] = useState(initialState || false);

  const eventHandlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };

  return [hovered, eventHandlers];
};
