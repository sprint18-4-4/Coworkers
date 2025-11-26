export interface CreateTeamRequest {
  name: string;
  image: string;
}

export interface CreateTeamResponse {
  id: string;
  name: string;
  image: string;
  createdAt: string;
}
