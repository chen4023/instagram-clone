import React from 'react';
import Avatar from './Avatar';
import { AuthUser } from '@/model/User';

type Props = {
  user: AuthUser
}


export default function SideBar({ user: { name, username, image } }: Props) {
  return (
    <>
      <div className='flex gap-3 items-center'>
        {image && <Avatar image={image || ''} />}
        <div>
          <h2 className='font-bold text-lg'>{username}</h2>
          <p className='text-lg text-neutral-500 leading-4'>{name}</p>
        </div>
      </div>
      <p className='text-sm text-neutral-500 mt-8'>About · Help · Press · API · Jobs · Provacy · Terms · Loation · Language</p>
      <p className='font-bold text-sm text-neutral-500 mt-8'>@Copyright INSTANGRAM from METAL</p>
    </>
  );
}

