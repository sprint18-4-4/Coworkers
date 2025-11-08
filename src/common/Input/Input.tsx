import { cn } from "@/utils";
import { ComponentPropsWithRef, ReactNode, RefObject, useId } from "react";

type InputVariant = "default" | "error";

/**
 * @param label - input 위에 표시될 레이블
 * @param error - 에러 메시지
 * @param addonAfter - 오른쪽에 표시한 버튼 및 아이콘 추가요소
 * @param containerClassName - 컨테이너의 className
 */

interface InputProps extends ComponentPropsWithRef<"input"> {
  label?: string;
  error?: string;
  addonAfter?: ReactNode;
  containerClassName?: string;
  ref?: RefObject<HTMLInputElement | null>;
}

const variantClasses: Record<InputVariant, string> = {
  default: "border-background-tertiary focus:border-primary",
  error: "border-status-danger focus:border-status-danger",
};

const disabledClasses =
  "disabled:cursor-not-allowed disabled:bg-background-secondary disabled:text-text-disabled disabled:border-border-primary";

const Input = ({
  label,
  error,
  addonAfter,
  containerClassName,
  className,
  type = "text",
  disabled,
  ref,
  ...rest
}: InputProps) => {
  const baseId = useId();
  const inputId = rest.id || `${baseId}-input`;
  const errorId = error ? `${baseId}-error` : undefined;

  const variant: InputVariant = error ? "error" : "default";

  return (
    <div className={cn("w-full", containerClassName)}>
      {label && (
        <label
          htmlFor={inputId}
          className={cn("block text-md-medium text-text-primary mb-2", "tablet:text-lg-regular pc:text-lg-regular")}
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input
          ref={ref}
          id={inputId}
          type={type}
          disabled={disabled}
          className={cn(
            "w-full rounded-lg border px-4 py-3 text-md-regular",
            "tablet:text-lg-regular pc:text-lg-regular",
            "placeholder:text-gray-400 placeholder:text-lg-regular",
            "focus:border-interaction-pressed",
            variantClasses[variant],
            disabled && disabledClasses,
            addonAfter && "pr-12",
            className,
          )}
          aria-invalid={!!error}
          aria-describedby={errorId}
          {...rest}
        />
        {addonAfter && <div className="absolute right-3 top-1/2 -translate-y-1/2">{addonAfter}</div>}
      </div>
      {error && (
        <p id={errorId} className="mt-2 text-md-medium text-status-danger">
          {error}
        </p>
      )}
    </div>
  );
};
Input.displayName = "Input";

export default Input;
