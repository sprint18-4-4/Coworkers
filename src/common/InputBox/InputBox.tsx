import { cn } from "@/utils";
import { RefObject, TextareaHTMLAttributes, useId } from "react";

type InputSize = "sm" | "lg";

/**
 * @author "KimWonSeon"
 * @param label - textarea 위에 표시될 레이블
 * @param labelClassName - 레이블의 외부 className
 * @param containerClassName - 컨테이너의 className
 * @param size - textarea 사이즈
 * @param required - * 표시
 */

interface InputBoxProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className"> {
  label?: string;
  labelClassName?: string;
  containerClassName?: string;
  size?: InputSize;
  required?: boolean;
  ref?: RefObject<HTMLTextAreaElement>;
}

const sizeClasses: Record<InputSize, string> = {
  sm: "min-h-[75px]",
  lg: "min-h-[200px]",
};

const InputBox = ({
  label,
  placeholder,
  labelClassName,
  containerClassName,
  size = "sm",
  required,
  ref,
  ...rest
}: InputBoxProps) => {
  const baseId = useId();
  const inputId = rest.id || `${baseId}-input`;

  return (
    <div className={cn("w-full", containerClassName)}>
      {label && (
        <label
          htmlFor={inputId}
          className={cn(
            "block text-md-bold text-text-primary mb-2",
            "tablet:text-lg-bold pc:text-lg-bold",
            labelClassName,
          )}
        >
          {label}
          {required && <span className="text-status-danger ml-1.5 text-lg-medium">*</span>}
        </label>
      )}

      <textarea
        ref={ref}
        id={inputId}
        placeholder={placeholder}
        required={required}
        className={cn(
          "w-full h-full rounded-lg border px-4 py-3 border-background-tertiary",
          "placeholder:text-text-default text-text-primary text-md-regular",
          "tablet:text-lg-regular pc:text-lg-regular",
          "resize-none overflow-y-auto",
          "focus:outline-none focus:border-interaction-pressed",
          sizeClasses[size],
        )}
        {...rest}
      />
    </div>
  );
};

export default InputBox;
