/**
 * @author sangin
 * @example
 * ```tsx
 * <ProgressBar percent={0}/>
 * <ProgressBar percent={50}/>
 * <ProgressBar percent={100}/>
 * ```
 */

const STRIPE_PATTERN = "repeating-linear-gradient(-45deg, #EBEFF5 0, #EBEFF5 46px, transparent 46px, transparent 92px)";

interface ProgressBarType {
  percent: number;
}

const ProgressBar = ({ percent }: ProgressBarType) => {
  const positivePercent = Math.min(Math.max(0, percent), 100);

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="진행 상태"
      className="w-full h-[27px] bg-background-secondary rounded-full overflow-hidden"
      style={{ backgroundImage: STRIPE_PATTERN }}
    >
      <div
        className="bg-brand-primary h-full rounded-full transition-all duration-300 ease-out"
        style={{ width: `${positivePercent}%` }}
      />
    </div>
  );
};

export default ProgressBar;
