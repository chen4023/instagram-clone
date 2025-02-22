import { SimplePost } from '@/model/Post';
import Image from 'next/image';
import React from 'react';
import CommentBar from './CommentBar';
import PostAuthor from './PostAuthor';
import PostIcon from './PostIcon';
import PostContent from './PostContent';




export default function PostCard({ post }: { post: SimplePost }) {
  return (
    <article className='w-full mb-5 shadow-sm shadow-neutral-300 rounded-lg text-sm'>
      <PostAuthor post={post} />
      <Image className='w-full h-[400px] object-cover' src={post.image} width={300} height={200} alt='postImage' />
      <div className='p-4'>
        <PostIcon />
        <PostContent post={post} />
        <CommentBar />
      </div>
    </article>
  );
}

