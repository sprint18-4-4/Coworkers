"use client";

import { ReactNode, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }: { children: ReactNode }) => {
  const [mounted] = useState(() => typeof window !== "undefined");

  if (!mounted) return null;

  const root = document.getElementById("portal-root");
  if (!root) return null;

  return createPortal(children, root);
};

export default Portal;
