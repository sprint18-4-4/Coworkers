"use client";

import { BaseButton, Input } from "@/common";
import useTeamJoin from "../../_hooks/useTeamJoin";

const TeamJoinForm = () => {
  const { token, isSubmitting, handleTokenChange, handleSubmit } = useTeamJoin();

  return (
    <form className="w-full flex flex-col gap-10" onSubmit={handleSubmit}>
      <Input
        label="팀 링크"
        placeholder="팀 링크를 입력해주세요."
        value={token}
        onChange={(e) => handleTokenChange(e.target.value)}
        disabled={isSubmitting}
      />
      <div className="flex-col-center gap-5 tablet:gap-6">
        <BaseButton type="submit" variant="solid" size="large" disabled={isSubmitting || !token.trim()}>
          {isSubmitting ? "참여 중..." : "참여하기"}
        </BaseButton>
        <p className="text-text-default text-xs-regular tablet:text-lg-regular">
          공유받은 팀 링크를 입력해 참여할 수 있어요.
        </p>
      </div>
    </form>
  );
};

export default TeamJoinForm;
