import { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/utils";

interface LandingHeaderProps {
  iconSrc: string;
  iconAlt: string;
  title: ReactNode;
  description: ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const LandingHeader = ({
  iconSrc,
  iconAlt,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
}: LandingHeaderProps) => {
  return (
    <div className={cn("max-w-[278px] ml-[35px] tablet:ml-[62px]", className)}>
      <Image src={iconSrc} alt={iconAlt} width={48} height={48} className="size-7 tablet:size-10 pc:size-12" />
      <div className="mt-1 flex flex-col gap-[12px]">
        <h2 className={titleClassName}>{title}</h2>
        <p className={descriptionClassName}>{description}</p>
      </div>
    </div>
  );
};

export default LandingHeader;
