import { cn } from "@/utils";
import { Ref, TextareaHTMLAttributes, useId } from "react";

type InputSize = "sm" | "md" | "lg";

/**
 * @author "KimWonSeon"
 * @param label - textarea 위에 표시될 레이블
 * @param labelClassName - 레이블의 외부 className
 * @param containerClassName - 컨테이너의 className
 * @param textareaClassName - textarea 자체의 className
 * @param size - textarea 사이즈
 * @param required - * 표시
 */

interface InputBoxProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className"> {
  label?: string;
  labelClassName?: string;
  containerClassName?: string;
  textareaClassName?: string;
  size?: InputSize;
  required?: boolean;
  ref?: Ref<HTMLTextAreaElement>;
}

/**
 * @author "KimWonSeon"
 * @param sm - 댓글 입력 사이즈
 * @param md - 할 일 생성 사이즈
 * @param lg - 게시물 작성 사이즈
 */

const sizeClasses: Record<InputSize, { height: string; rows: number }> = {
  sm: {
    height: "min-h-[48px] max-h-[200px]",
    rows: 1,
  },
  md: {
    height: "min-h-[75px]",
    rows: 2,
  },
  lg: {
    height: "min-h-[200px] tablet:h-[240px] pc:h-[240px]",
    rows: 9,
  },
};

const InputBox = ({
  label,
  placeholder,
  labelClassName,
  containerClassName,
  textareaClassName,
  size = "sm",
  required,
  ref,
  ...rest
}: InputBoxProps) => {
  const baseId = useId();
  const inputId = rest.id || `${baseId}-input`;

  const config = sizeClasses[size];

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
        rows={config.rows}
        className={cn(
          "w-full h-full rounded-lg border px-4 py-3 border-background-tertiary",
          "placeholder:text-text-default text-text-primary text-md-regular",
          "tablet:text-lg-regular pc:text-lg-regular",
          "resize-none overflow-y-auto",
          "focus:outline-none",
          textareaClassName,
          config.height,
        )}
        {...rest}
      />
    </div>
  );
};
InputBox.displayName = "InputBox";

export default InputBox;
