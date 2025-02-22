import { authOptions } from "@/lib/auth";
import { getUserByEmail } from "@/service/user";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    return new NextResponse("Authentication Error", { status: 401 });
  }
  return getUserByEmail(user.email).then((data) => NextResponse.json(data));
}
