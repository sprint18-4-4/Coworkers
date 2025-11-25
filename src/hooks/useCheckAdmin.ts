import { useGetUser } from "@/api/hooks";
import { useParams } from "next/navigation";

const useCheckAdmin = () => {
  const { teamId } = useParams();
  const { data: userInfo } = useGetUser();

  if (!userInfo) {
    return false;
  }

  const { memberships } = userInfo;
  const currentGroup = memberships.find((group) => group.groupId === Number(teamId));

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
