import { useState } from "react";

const useFlip = () => {
  const [up, setUp] = useState(true);
  const flipCard = () => {
    setUp((flipped) => !flipped);
  };
  return [up, flipCard];
};

export default useFlip;
