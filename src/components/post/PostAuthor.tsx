import React from 'react';
import Avatar from '../Avatar';
import { SimplePost } from '@/model/Post';
import parseDate from '@/util/date';


type Props = {
  post: SimplePost
}

export default function PostAuthor({ post }: Props) {
  const { userImage, username, createdAt } = post;

  return (
    <div className='flex justify-between items-center w-full text-sm p-3 border-b border-neutral-200' >
      <div className='flex items-center gap-3'>
        <Avatar image={userImage} highlight size='small' />
        <span className='font-bold'>{username}</span>
        <p className='text-neutral-400 text-xs'> • {parseDate(createdAt)}</p>
      </div>
      <div className='cursor-pointer'>
        •••
      </div>
    </div>
  );
}

