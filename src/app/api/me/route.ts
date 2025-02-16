import { getUserByEmail } from "@/service/user";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    return new NextResponse("Authentication Error", { status: 401 });
  }
  return getUserByEmail(user.email).then((data) => NextResponse.json(data));
}
