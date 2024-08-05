import { useState } from "react";

export const useIsChecked = () => {
  const [isChecked, setIsChecked] = useState<boolean>(Math.random() > 0.5);

  const handleCheck = () => {
    setIsChecked(Math.random() > 0.5);
  };

  return { isChecked, handleCheck };
};
