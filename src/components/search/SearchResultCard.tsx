import { SearchUser } from '@/model/User';
import React from 'react';
import Avatar from '../Avatar';
import Link from 'next/link';

type Props = {
  user: SearchUser
}

export default function SearchResultCard({ user }: Props) {
  const { name, username, following, image } = user
  return (
    <Link href={`/user/${username}`} className='w-[400px] mx-auto mt-1 flex gap-2 text-sm hover:bg-neutral-50 py-3'>
      <Avatar image={image} size='normal' highlight />
      <div className='flex flex-col text-neutral-500'>
        <p className='font-semibold text-black'>{username}</p>
        <div className='flex gap-2'>
          <p>{name}</p>
          <p>• 팔로잉 {following ? following : '0'}명</p>
        </div>
      </div>
    </Link>
  );
}

