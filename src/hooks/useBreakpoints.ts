import { useEffect, useState } from "react";

// Tailwind default breakpoints
const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

const getBreakpointStatus = (width: number) => ({
  xs: width >= breakpoints.xs && width < breakpoints.sm,
  sm: width >= breakpoints.sm && width < breakpoints.md,
  md: width >= breakpoints.md && width < breakpoints.lg,
  lg: width >= breakpoints.lg && width < breakpoints.xl,
  xl: width >= breakpoints.xl && width < breakpoints["2xl"],
  "2xl": width >= breakpoints["2xl"],
});

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(
    getBreakpointStatus(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setBreakpoint(getBreakpointStatus(width));
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // call once on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
};
