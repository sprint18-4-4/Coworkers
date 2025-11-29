import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <div className="bg-background-inverse">{children}</div>;
};

export default layout;
