declare module "*.svg" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare module "*.svg?url" {
  import { StaticImageData } from "next/image";
  const content: StaticImageData;
  export default content;
}
