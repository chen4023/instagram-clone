// 전체 유저 데이터를 보여줘
import { getUserByUsername } from "@/service/user";
import { NextRequest, NextResponse } from "next/server";
type Context = {
  params: Promise<{ username: string }>;
};

export async function GET(_: NextRequest, context: Context) {
  try {
    const { username } = await context.params;
    if (!username) {
      return NextResponse.json(
        { error: " Username is Requeired" },
        { status: 400 }
      );
    }
    const userData = await getUserByUsername(username);
    if (!userData) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(userData[0]);
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
