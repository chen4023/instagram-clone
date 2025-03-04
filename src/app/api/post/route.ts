import { getFollowingPostOf } from "@/service/post";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    return new NextResponse("Authentication Error", { status: 401 });
  }
  const data = await getFollowingPostOf(user.username);
  return NextResponse.json(data);
}
