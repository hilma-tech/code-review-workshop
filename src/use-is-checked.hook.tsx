import { useState } from "react";
/**
 * This hook handles flips checked value
 * Meant to handle checkbox state
 * @param
 */
export const useIsChecked = () => {
  const [isChecked, setIsChecked] = useState<boolean>(Math.random() > 0.5);

  const handleCheck = () => {
    setIsChecked(Math.random() > 0.5);
  };

  return { isChecked, handleCheck };
};
