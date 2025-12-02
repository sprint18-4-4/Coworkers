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

interface DeviceImageProps {
  ImageInfo: ImageInfo;
  Src: ImageSource;
  ImageClassName?: string;
}

const DeviceImage = ({
  ImageInfo: { alt, width, height },
  Src: { mobileSrc, tabletSrc, desktopSrc },
  ImageClassName = "",
}: DeviceImageProps) => {
  return (
    <picture>
      <source media="(max-width: 430px)" srcSet={mobileSrc} />
      <source media="(min-width: 431px) and (max-width: 939px)" srcSet={tabletSrc} />
      <Image
        src={desktopSrc}
        alt={alt}
        width={width}
        height={height}
        className={ImageClassName}
        quality={85}
        priority
        draggable={false}
      />
    </picture>
  );
};

export default DeviceImage;
