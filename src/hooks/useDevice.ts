"use client";
import { useState, useEffect } from "react";

const useDevice = () => {
  const [device, setDevice] = useState({
    isMobile: false,
    isTablet: false,
    isPc: false,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const queries = {
      mobile: "(max-width: 430px)",
      tablet: "(min-width: 431px) and (max-width: 744px)",
      pc: "(min-width: 745px)",
    };

    const mobile = window.matchMedia(queries.mobile);
    const tablet = window.matchMedia(queries.tablet);
    const pc = window.matchMedia(queries.pc);

    const update = () => {
      setDevice({
        isMobile: mobile.matches,
        isTablet: tablet.matches,
        isPc: pc.matches,
      });
    };

    update();

    mobile.addEventListener("change", update);
    tablet.addEventListener("change", update);
    pc.addEventListener("change", update);

    return () => {
      mobile.removeEventListener("change", update);
      tablet.removeEventListener("change", update);
      pc.removeEventListener("change", update);
    };
  }, []);

  return device;
};

export default useDevice;
