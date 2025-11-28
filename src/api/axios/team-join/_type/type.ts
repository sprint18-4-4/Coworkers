export type PostTeamJoinRequest = {
  userEmail: string;
  token: string;
};

export type PostTeamJoinResponse = {
  groupId: number;
};
