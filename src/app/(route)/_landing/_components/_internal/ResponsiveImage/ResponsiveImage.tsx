import { cn } from "@/utils";
import Image from "next/image";

interface ImageSource {
  mobileSrc: string;
  tabletSrc: string;
  desktopSrc: string;
}

interface ImageInfo {
  alt: string;
  width: number;
  height: number;
}

interface ResponsiveImageProps {
  ImageInfo: ImageInfo;
  Src: ImageSource;
  ImageClassName?: string;
}

const ResponsiveImage = ({
  ImageInfo: { alt, width, height },
  Src: { mobileSrc, tabletSrc, desktopSrc },
  ImageClassName = "",
}: ResponsiveImageProps) => {
  return (
    <picture>
      <source media="(max-width: 430px)" srcSet={mobileSrc} />
      <source media="(min-width: 431px) and (max-width: 745px)" srcSet={tabletSrc} />
      <Image src={desktopSrc} alt={alt} width={width} height={height} className={ImageClassName} priority />
    </picture>
  );
};

export default ResponsiveImage;
