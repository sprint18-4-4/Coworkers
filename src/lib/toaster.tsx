"use client";

import { Toaster } from "react-hot-toast";

const ToasterContainer = () => {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        duration: 2000,
      }}
    />
  );
};

export default ToasterContainer;
