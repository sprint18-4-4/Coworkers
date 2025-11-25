import { Membership } from "@/types";

const useCheckAdmin = (teamId: number, memberships: Membership[]) => {
  const currentGroup = memberships.find((group) => group.groupId === teamId);

  if (!currentGroup) {
    return false;
  }

  const { role } = currentGroup;

  if (role === "ADMIN") {
    return true;
  }
  return false;
};

export default useCheckAdmin;
