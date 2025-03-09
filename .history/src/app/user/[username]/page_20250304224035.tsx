import Profile from '@/components/user/Profile';
import ProfilePost from '@/components/user/ProfilePost';
import React from 'react';

type Props = {
  params: Promise<{ username: string }>
}
export default async function UserPage({ params }: Props) {
  const { username } = await params
  console.log(username)
  return (
    <section>
      <Profile username={username} />
      <ProfilePost username={username} />
    </section>
  );
}

