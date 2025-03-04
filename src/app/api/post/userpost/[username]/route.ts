import { getByUsernamePost } from "@/service/post";
import { NextRequest, NextResponse } from "next/server";
type Context = {
  params: Promise<{ username: string }>;
};
export async function GET(_: NextRequest, context: Context) {
  const { username } = await context.params;
  const data = await getByUsernamePost(username);
  return NextResponse.json(data);
}
