import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight});

  const handleSize = () => {
    console.log( window.innerHeight);
    
    setWindowSize({width: window.innerWidth, height: window.innerHeight});
  };

  useEffect(() => {
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return windowSize;
};
