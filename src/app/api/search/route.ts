// 전체 유저 데이터를 보여줘
import { searchUsers } from "@/service/user";
import { NextResponse } from "next/server";

export async function GET() {
  return searchUsers().then((data) => NextResponse.json(data));
}
