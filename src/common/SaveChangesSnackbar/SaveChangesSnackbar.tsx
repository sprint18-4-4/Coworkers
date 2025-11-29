import Icon from "@/common/Icon/Icon";
import BaseButton from "@/common/Button/BaseButton";
import { cn } from "@/utils";

interface UnsavedSnackbarProps {
  title: string;
  onSave: () => void;
  buttonText?: string;
  formId?: string;
  className?: string;
  disabled?: boolean;
}

const SaveChangesSnackbar = ({ title, onSave, buttonText, formId, className, disabled }: UnsavedSnackbarProps) => {
  return (
    <div
      role="status"
      className={cn("w-full py-12 px-6 bg-brand-primary p-3 rounded-lg flex items-center gap-3", className)}
    >
      <span className="flex items-center gap-2 flex-grow text-md-semibold text-text-inverse tablet:text-lg-semibold">
        <Icon name="alert" className="hidden tablet:block tablet:size-6" />
        {title}
      </span>
      <BaseButton
        type="submit"
        form={formId}
        variant="solid"
        size="small"
        onClick={formId ? undefined : onSave}
        className="w-[125px] h-[33px] tablet:w-[141px] bg-background-inverse text-md-semibold hover:bg-background-secondary"
        disabled={disabled}
      >
        <span className="text-brand-primary">{buttonText}</span>
      </BaseButton>
    </div>
  );
};

export default SaveChangesSnackbar;
