import Profile from '@/components/user/Profile';
import ProfilePost from '@/components/user/ProfilePost';
import ProfilePostSkeleton from '@/components/user/ProfilePostSkeleton';
import ProfileSkeleton from '@/components/user/ProfileSkeleton';
import { getUserByUsername } from '@/service/user';
import React, { cache, Suspense } from 'react';

type Props = {
  params: Promise<{ username: string }>
}
// 전달하는 username의 값이 변하지 않으면, 캐시된 결과를 사용하게 됨
const getUser = cache(async (username: string) => getUserByUsername(username))
export default async function UserPage({ params }: Props) {
  // 상단: 사용자의 프로필 이미지와 정보 (username, liked, name, 숫자)
  // 하단 : 3개의 텝
  const { username } = await params
  const user = await getUser(username)
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

export async function generateMetadata({ params }: Props) {
  const { username } = await params;
  const user = await getUser(username)

  return {
    title: `${user?.name} @(${user?.username}) · Instangram Photos`,
    description: `${user?.name}'s all Instangram Posts`
  }

}