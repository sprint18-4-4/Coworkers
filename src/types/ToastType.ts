export type ToastVariant = "success" | "error" | "loading";

export interface AppToastOptions {
  variant?: ToastVariant;
  message: string;
}
