'use client'
import { ClientSafeProvider, signIn } from "next-auth/react";
import ColorButton from "./ui/ColorButton";

type Props = {
  providers: Record<string, ClientSafeProvider> | null
  callbackUrl: string;
}
export default function Signin({ providers, callbackUrl }: Props) {
  return (
    <>
      {providers && Object.values(providers).map((provider) => (
        <ColorButton size='big' key={provider.id} text={`${provider.name} 로그인`} onClick={() => signIn(provider.id, { callbackUrl })} />
      ))}
    </>
  );
}

