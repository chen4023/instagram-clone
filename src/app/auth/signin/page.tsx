import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Signin from "@/components/Signin";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";

type Props = {
  searchParams: {
    callbackUrl?: string; // callbackUrl을 선택적 속성으로 추가
  }
}
export default async function SignPage({ searchParams }: Props) {
  const { callbackUrl } = await searchParams
  const session = await getServerSession(authOptions);
  if (session) {
    // 유저정보가 있는 경우에는 홈으로 리다이렉트
    redirect('/')
  }
  const providers = (await getProviders()) ?? {}
  return (
    <section className="flex justify-center mt-[30%]">
      <Signin providers={providers} callbackUrl={callbackUrl ?? '/'} />
    </section>)
}