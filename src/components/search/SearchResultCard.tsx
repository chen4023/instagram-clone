import { SearchUser } from '@/model/User';
import React from 'react';
import Avatar from '../Avatar';

type Props = {
  user: SearchUser
}

export default function SearchResultCard({ user }: Props) {
  const { name, username, following, image } = user
  return (
    <div className='w-[300px] mx-auto mb-5 mt-1 flex gap-2 text-sm'>
      <Avatar image={image} size='normal' highlight />
      <div className='flex flex-col'>
        <span className='font-semibold'>{username}</span>
        <div className='flex gap-3'>
          <span>{name}</span>
          <span>• 팔로잉 {following ? following : '0'}명</span>
        </div>
      </div>
    </div>
  );
}

