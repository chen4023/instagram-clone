import { SimplePost } from '@/model/Post';
import React from 'react';

export default function PostContent({ post }: { post: SimplePost }) {
  const { likes, username } = post;
  return (
    <div>
      <div className='flex flex-col gap-[0.2rem]'>
        <p className='font-semibold'>좋아요 {likes.length ?? 0}개</p>
        <div className='flex gap-1'>
          <p className='font-semibold'>{username}</p>
          <p>{post.text}</p>
        </div>
      </div>
    </div>
  );
}

