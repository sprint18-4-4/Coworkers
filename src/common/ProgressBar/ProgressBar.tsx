/**
 * @author sangin
 * @example
 * ```tsx
 * <ProgressBar percent={0}/>
 * <ProgressBar percent={50}/>
 * <ProgressBar percent={1000}/>
 * ```
 */

interface ProgressBarType {
  percent: number;
}

const ProgressBar = ({ percent }: ProgressBarType) => {
  const stripePattern =
    "repeating-linear-gradient(-45deg, #EBEFF5 0, #EBEFF5 46px, transparent 46px, transparent 92px)";

  return (
    <div
      className="w-full h-[27px] bg-background-secondary rounded-full overflow-hidden"
      style={{ backgroundImage: stripePattern }}
    >
      <div
        className="bg-brand-primary h-full rounded-full transition-all duration-300 ease-out"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
