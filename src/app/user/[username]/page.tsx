import Profile from '@/components/user/Profile';
import ProfilePost from '@/components/user/ProfilePost';
import ProfilePostSkeleton from '@/components/user/ProfilePostSkeleton';
import ProfileSkeleton from '@/components/user/ProfileSkeleton';
import { getUserByUsername } from '@/service/user';
import React, { Suspense } from 'react';

type Props = {
  params: Promise<{ username: string }>
}
export default async function UserPage({ params }: Props) {
  // 상단: 사용자의 프로필 이미지와 정보 (username, liked, name, 숫자)
  // 하단 : 3개의 텝
  const { username } = await params
  const user = await getUserByUsername(username)
  return (
    <section>
      <Suspense fallback={<ProfileSkeleton />}>
        <Profile user={user} />
      </Suspense>
      <Suspense fallback={<ProfilePostSkeleton />}>
        <ProfilePost username={username} />
      </Suspense>
    </section>
  );
}

