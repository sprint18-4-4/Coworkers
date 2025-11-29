import { Ref, useCallback, useEffect, useRef } from "react";

const useAutoHeight = (
  minHeight: number = 48,
  maxHeight: number = 200,
): { ref: Ref<HTMLTextAreaElement>; resetHeight: () => void } => {
  const ref = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = useCallback(() => {
    const textarea = ref.current;
    if (!textarea) return;

    textarea.style.height = "0px";
    const scrollHeight = textarea.scrollHeight;
    const newHeight = Math.max(Math.min(scrollHeight, maxHeight), minHeight);
    textarea.style.height = `${newHeight}px`;
  }, [minHeight, maxHeight]);

  const resetHeight = useCallback(() => {
    const textarea = ref.current;
    if (!textarea) return;

    textarea.style.height = `${minHeight}px`;
  }, [minHeight]);

  useEffect(() => {
    const textarea = ref.current;
    if (!textarea) return;

    adjustHeight();
    textarea.addEventListener("input", adjustHeight);

    return () => {
      textarea.removeEventListener("input", adjustHeight);
    };
  }, [adjustHeight]);

  return { ref, resetHeight };
};

export default useAutoHeight;
