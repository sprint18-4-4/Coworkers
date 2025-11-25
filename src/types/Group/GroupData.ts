export interface GroupResponse {
  createdAt: string;
  id: number;
  image: string;
  members: GroupMember[];
  name: string;
  taskLists: TaskList[];
  teamId: string;
  updatedAt: string;
}

export interface GroupMember {
  groupId: number;
  role: "ADMIN" | "MEMBER" | string;
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
