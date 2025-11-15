import Icon from "../Icon/Icon";
import BaseButton from "@/common/Button/BaseButton";

interface UnsavedSnackbarProps {
  title: string;
  onSave: () => void;
  buttonText?: string;
}

const UnsavedSnackbar = ({ title, onSave, buttonText }: UnsavedSnackbarProps) => {
  return (
    <div
      role="status"
      className="max-w-[868px] min-w-[343px] min-h-[49px] max-h-[57px] bg-brand-primary px-3 py-3 rounded-lg flex items-center gap-2.5"
    >
      <span className="flex items-center gap-2 flex-grow text-md-semibold text-text-inverse tablet:text-lg-semibold">
        <Icon name="alert" className="hidden tablet:block tablet:size-6" />
        {title}
      </span>
      <BaseButton
        variant="solid"
        size="small"
        onClick={onSave}
        className="w-[125px] h-[33px] tablet:w-[141px] bg-background-inverse text-md-semibold hover:bg-background-secondary"
      >
        <span className="text-brand-primary">{buttonText}</span>
      </BaseButton>
    </div>
  );
};

export default UnsavedSnackbar;
