import { toast } from "react-hot-toast";

export type ToastVariant = "success" | "error" | "loading";

export interface AppToastOptions {
  variant?: ToastVariant;
  message: string;
}

export const toastKit = () => {
  const showToast = ({ variant = "success", message }: AppToastOptions) => {
    switch (variant) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      case "loading":
        return toast.loading(message);
    }
  };

  const success = (message: string, options?: { id?: string }) =>
    options?.id ? toast.success(message, { id: options.id }) : toast.success(message);

  const error = (message: string, options?: { id?: string }) =>
    options?.id ? toast.error(message, { id: options.id }) : toast.error(message);

  const loading = (message: string) => {
    return showToast({ variant: "loading", message }) as string;
  };

  return {
    showToast,
    success,
    error,
    loading,
  };
};

export default toastKit;
