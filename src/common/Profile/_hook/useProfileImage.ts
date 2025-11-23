"use client";

import { useState } from "react";

const useProfileImage = (src: string | null) => {
  const [hasError, setHasError] = useState(false);
  const [prevSrc, setPrevSrc] = useState(src);

  if (src !== prevSrc) {
    setPrevSrc(src);
    setHasError(false);
  }

  const handleError = () => {
    setHasError(true);
  };

  return { hasError, handleError };
};

export default useProfileImage;
