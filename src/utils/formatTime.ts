/**
 * @author KimWonSeon
 * @description 상대 시간을 문자열로 변환
 *
 * @remarks
 * - 1분 미만: "방금 전"
 * - 1시간 미만: "n분 전"
 * - 24시간 미만: "n시간 전"
 * - 7일 미만: "n일 전"
 * - 7일 이상: "YYYY. MM. DD"
 *
 *  * @example
 *
 * formatRelativeTime("2025-11-14T12:58:00Z") 등록
 * // "방금 전"
 *
 * formatRelativeTime("2025-11-14T12:30:00Z")
 * // "30분 전"
 *
 * formatRelativeTime("2025-11-14T09:00:00Z")
 * // "4시간 전"
 *
 * formatRelativeTime("2025-11-12T12:00:00Z")
 * // "2일 전"
 *
 * formatRelativeTime("2025-11-25T00:00:00Z")
 * // "2025. 11. 15"
 */

export const formatTime = (dateString: string): string => {
  const now = new Date();
  const date = new Date(dateString);
  const diffInSeconds = Math.floor(now.getTime() - date.getTime() / 1000);

  if (diffInSeconds < 60) {
    return "방금 전";
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays}일 전`;
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
};
