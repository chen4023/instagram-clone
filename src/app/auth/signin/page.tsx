import Signin from "@/components/Signin";
import { authOptions } from "@/lib/auth";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";

type Props = Promise<{
  callbackUrl?: string;
  [key: string]: string | string[] | undefined;
}>

export const metadata: Metadata = {
  title: 'SignIn',
  description: 'SignUp or Login to Instangram'
}
export default async function SignPage({ searchParams }: { searchParams: Props }) {
  const { callbackUrl } = await searchParams
  const session = await getServerSession(authOptions);
  if (session) {
    // 유저정보가 있는 경우에는 홈으로 리다이렉트
    redirect('/')
  }
  const providers = await getProviders()
  return (
    <section className="text-center py-36">
      <h1 className="text-2xl mb-3 font-semibold">로그인</h1>
      <Signin providers={providers} callbackUrl={callbackUrl ?? '/'} />
    </section>)
}