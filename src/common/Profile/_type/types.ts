export interface CommonProfileProps {
  src: string | null;
  name?: string;
  alt?: string;
  onClick?: () => void;
}

export interface ProfileProps extends CommonProfileProps {
  size?: "sm" | "md" | "lg";
}

export interface ProfileEditProps extends CommonProfileProps {
  size?: "md" | "lg";
}

export interface MyProfileType extends CommonProfileProps {
  type: "myProfile";
  groupName: string;
}

export interface MemberItemType extends CommonProfileProps {
  type: "memberItem";
  email: string;
}

export type ProfileItemProps = MyProfileType | MemberItemType;
