import {
  getByUsernameLikedPost,
  getByUsernamePost,
  getByUsernameSavedPost,
} from "@/service/post";
import { NextRequest, NextResponse } from "next/server";

type Context = {
  params: Promise<{ slug: string[] }>;
};
export async function GET(_: NextRequest, context: Context) {
  const { slug } = await context.params;

  if (!slug || !Array.isArray(slug)) {
    return new NextResponse("Bad Request", { status: 400 });
  }
  const [username, query] = slug;

  let request = getByUsernamePost;
  if (query === "saved") {
    request = getByUsernameSavedPost;
  } else if (query === "liked") {
    request = getByUsernameLikedPost;
  }
  return request(username).then((data) => NextResponse.json(data));
}
