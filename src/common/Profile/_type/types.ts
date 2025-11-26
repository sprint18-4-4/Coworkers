import { DropdownOption } from "@/common/Dropdown/_types/types";

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
  onChange: (file: File) => void;
  size?: "md" | "lg";
  iconType?: "user" | "imgUpload";
}

// 프로필 아이템 Type

export interface ProfileItemProps extends BaseProfileProps {
  name: string;
  onClick: () => void;
}

export interface MyProfileType extends ProfileItemProps {
  type: "myProfile";
  groupName: string;
  dropdownOptions?: DropdownOption[];
}

export interface MemberItemType extends ProfileItemProps {
  type: "memberItem";
  email: string;
  dropdownOptions?: DropdownOption[];
}

export type ProfileItemType = MyProfileType | MemberItemType;
