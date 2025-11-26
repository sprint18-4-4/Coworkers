import { UserRole } from "../UserType";

export interface GroupMember {
  groupId: number;
  role: UserRole;
  userEmail: string;
  userId: number;
  userImage: string | null;
  userName: string;
}

export interface TaskList {
  createdAt: string;
  displayIndex: number;
  groupId: number;
  id: number;
  name: string;
  tasks: Task[];
  updatedAt: string;
}

export interface Task {
  createdAt: string;
  displayIndex: number;
  groupId: number;
  id: number;
  name: string;
  tasks: Task[];
  updatedAt: string;
  doneAt?: string | null;
}
