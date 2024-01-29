import { useState } from "react";

export const useBoolean = (
  initialState?: boolean
): [
  boolean,
  { setTrue: () => void; setFalse: () => void; setToggle: () => void }
] => {
  const [boolean, setBoolean] = useState(initialState || false);

  const handlers = {
    setTrue: () => setBoolean(true),
    setFalse: () => setBoolean(false),
    setToggle: () => setBoolean(!boolean),
  };

  return [boolean, handlers];
};
