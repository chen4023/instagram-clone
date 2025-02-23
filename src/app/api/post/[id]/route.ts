import { getPost } from "@/service/post";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
type Context = {
  params: Promise<{ id: string }>;
};
export async function GET(request: NextRequest, context: Context) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    return new NextResponse("Authentication Error", { status: 401 });
  }
  const { id } = await context.params;
  const data = await getPost(id);
  return NextResponse.json(data);
}
