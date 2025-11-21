import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const POST = async () => {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refreshToken")?.value;

  if (!refreshToken) {
    return NextResponse.json({ message: "No refresh token" }, { status: 401 });
  }

  try {
    const backendResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });

    if (!backendResponse.ok) {
      if (backendResponse.status === 401) {
        cookieStore.set("refreshToken", "", {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          path: "/",
          maxAge: 0,
        });

        return NextResponse.json({ message: "Refresh token expired" }, { status: 401 });
      }

      return NextResponse.json({ message: "Failed to refresh token" }, { status: backendResponse.status });
    }

    const data = (await backendResponse.json()) as { accessToken: string };

    const isProd = process.env.NODE_ENV === "production";
    const response = NextResponse.json({ accessToken: data.accessToken });

    response.cookies.set("accessToken", data.accessToken, {
      httpOnly: false,
      secure: isProd,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60,
    });

    return response;
  } catch {
    return NextResponse.json({ message: "Unexpected error while refreshing token" }, { status: 500 });
  }
};
