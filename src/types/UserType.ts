/**
 * @author jikwon
 * @description 유저와 관련된 타입 정의입니다.
 */

export interface Group {
  teamId: string;
  updatedAt: string;
  createdAt: string;
  image: string;
  name: string;
  id: number;
}

export interface Membership {
  group: Group;
  role: string;
  userImage: string;
  userEmail: string;
  userName: string;
  groupId: number;
  userId: number;
}

export interface User {
  teamId: string;
  image: string;
  nickname: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  id: number;
  memberships: Membership[];
}

/**
 * @author KimWonSeon
 * @description 유저 관련 리스톤스 타입 정의
 */

export type UserRole = "ADMIN" | "MEMBER";

export type UserResponse = User;
