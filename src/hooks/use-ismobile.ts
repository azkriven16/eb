import { useEffect, useState } from "react";

export function useDeviceBreakpoints({
  mobile = 768,
  tablet = 1024,
  laptop = 1440,
  pc = 2560,
} = {}) {
  const [breakpoints, setBreakpoints] = useState({
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    isPc: false,
    is4kScreen: false,
  });

  useEffect(() => {
    const updateBreakpoints = () => {
      const width = window.innerWidth;
      setBreakpoints({
        isMobile: width < mobile,
        isTablet: width >= mobile && width < tablet,
        isLaptop: width >= tablet && width < laptop,
        isPc: width >= laptop && width < pc,
        is4kScreen: width >= pc,
      });
    };

    window.addEventListener("resize", updateBreakpoints);
    updateBreakpoints();

    return () => {
      window.removeEventListener("resize", updateBreakpoints);
    };
  }, [mobile, tablet, laptop, pc]);

  return breakpoints;
}
