export interface BaseProfileProps {
  src: string | null;
  alt?: string;
}

// 프로필 Type

export interface ProfileProps extends BaseProfileProps {
  size?: "sm" | "md" | "lg";
}

// 프로필 수정 Type

export interface ProfileEditProps extends BaseProfileProps {
  size?: "md" | "lg";
  onChange: (file: File) => void;
}

// 프로필 아이템 Type

export interface ProfileItemProps extends BaseProfileProps {
  name: string;
  onClick: () => void;
}

export interface MyProfileType extends ProfileItemProps {
  type: "myProfile";
  groupName: string;
}

export interface MemberItemType extends ProfileItemProps {
  type: "memberItem";
  email: string;
}

export type ProfileItemType = MyProfileType | MemberItemType;
