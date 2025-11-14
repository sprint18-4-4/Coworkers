import Icon from "../Icon/Icon";
import BaseButton from "@/common/Button/BaseButton";

interface SnackbarProps {
  show: boolean;
  message: string;
  onSave: () => void;
}

const Snackbar = ({ show, message, onSave }: SnackbarProps) => {
  if (!show) return null;

  return (
    <div
      role="status"
      className="max-w-[868px] min-w-[343px] min-h-[49px] max-h-[57px] bg-brand-primary px-3 py-3 rounded-lg flex items-center gap-2.5"
    >
      <span className="flex items-center gap-2 flex-grow text-md-semibold text-text-inverse tablet:text-lg-semibold">
        <Icon name="alert" className="hidden tablet:block tablet:size-6" />
        {message}
      </span>
      <BaseButton
        variant="solid"
        size="small"
        onClick={onSave}
        className="w-[125px] h-[33px] tablet:w-[141px] bg-background-inverse text-md-semibold hover:bg-background-secondary"
      >
        <span className="text-brand-primary">변경사항 저장하기</span>
      </BaseButton>
    </div>
  );
};

export default Snackbar;
