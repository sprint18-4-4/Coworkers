import { toast } from "react-hot-toast";

/**
 * @author jikwon
 * @description 토스트 유틸 함수
 * @returns { success, error, loading }
 *
 * @example
 * const { success, error, loading } = toastKit();
 *
 * // 성공
 * success("성공적으로 저장되었어요.");
 *
 * // 실패
 * error("에러가 발생했어요.");
 *
 * // 로딩
 * const id = loading("처리 중이에요.");
 *
 * if (성공 로직) {
 *   success("완료됐어요.", { id });
 * } else {
 *   error("에러가 발생했어요.", { id });
 * }
 */

export const toastKit = () => {
  const success = (message: string, options?: { id?: string }) =>
    options?.id ? toast.success(message, { id: options.id }) : toast.success(message);

  const error = (message: string, options?: { id?: string }) =>
    options?.id ? toast.error(message, { id: options.id }) : toast.error(message);

  const loading = (message: string) => toast.loading(message);

  return {
    success,
    error,
    loading,
  };
};

export default toastKit;
