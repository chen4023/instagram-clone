'use client'
import React from 'react';
import useSWR from 'swr';
import { PulseLoader } from 'react-spinners'
import Avatar from './Avatar';
import { HomeUser } from '@/model/User';
import Link from 'next/link';
import ScrollableBar from './ScrollableBar';

export default function FollowingBar() {
  // 1. 클라이언트 컴포넌트에서 백엔드에게 api/me 사용자 정보 받아오기
  // 2. 백엔드에서는 현재 로그인된 사용자의 세션 정보를 이용해서 사용자의 상세정보를 sanity에서 받아옴
  // 3. client 컴포넌트에서 followings의 정보를 UI에 보여줌
  // 4. (image, username)
  const { data, isLoading } = useSWR<HomeUser[]>('api/me');
  const users = data?.[0]?.following

  // const users = undefined

  return (
    <section className='w-full mx-auto flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto'>
      {isLoading ? (
        <PulseLoader size={8} color='gray' />
      ) : (
        (!users || users.length === 0) && <p>{`You don't have Following!`}</p>
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ image, username }) => (
            <Link key={username} href={`/user/${username}`} className='flex flex-col items-center gap-1 w-16'>
              <Avatar image={image} highlight />
              <p className='w-full text-sm text-center truncate overflow-hidden'>{username}</p>
            </Link>
          ))}
        </ScrollableBar>
      )}

    </section>
  )
}

