import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value;

  if (!token && req.nextUrl.pathname.startsWith("/team")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 소속팀 없는 페이지 -> 유저정보 검사 -> 리다이렉트
  if (token && req.nextUrl.pathname === "/team") {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });

    if (res.ok) {
      const data = await res.json();
      const groupId = data.memberships?.[0]?.groupId;

      if (groupId) {
        return NextResponse.redirect(new URL(`/team/${groupId}`, req.url));
      }
    }
  }

  // 존재하지 않는 groupID URL에 입력시
  if (token && req.nextUrl.pathname.startsWith("/team/")) {
    const teamId = req.nextUrl.pathname.split("/")[2];

    if (!teamId) {
      return NextResponse.next();
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/groups/${teamId}`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.redirect(new URL("/team", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/team/:path*"],
};
