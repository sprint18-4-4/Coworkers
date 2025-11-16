import { cn } from "@/utils";
import Icon from "../Icon/Icon";

interface ProgressBadgeProps {
  total: number;
  current: number;
}

const ProgressBadge = ({ total, current }: ProgressBadgeProps) => {
  const positiveTotal = Math.max(0, total);
  const positiveCurrent = Math.max(0, current);

  const TEXT_COLOR = positiveCurrent > 0 ? "text-brand-primary" : "text-state-400";

  const getIcon = () => {
    const isCompleted = positiveTotal === positiveCurrent && positiveTotal !== 0;
    if (isCompleted) {
      return <Icon name="progress" className="size-4 tablet:size-5" />;
    }
    const progress = positiveTotal > 0 ? (positiveCurrent / positiveTotal) * 100 : 0;
    return (
      <span
        className="inline-block size-[10px] tablet:size-[12px] rounded-full"
        style={{
          background: `conic-gradient(#4F7DFF ${progress}%, #E5E7EB ${progress}%)`,
          mask: "radial-gradient(closest-side, transparent 60%, black 60%)",
          WebkitMask: "radial-gradient(closest-side, transparent 60%, black 60%)",
        }}
      ></span>
    );
  };
  return (
    <span className="inline-block flex-center gap-1 w-[58px] tablet:w-[66px] py-1 px-2 rounded-full bg-background-primary">
      <span className="flex-center size-4">{getIcon()}</span>
      <span className={cn("text-md-regular tablet:text-lg-medium", TEXT_COLOR)}>
        {current}/{total}
      </span>
    </span>
  );
};

export default ProgressBadge;
