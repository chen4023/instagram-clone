import { SimplePost } from '@/model/Post';
import Image from 'next/image';
import React from 'react';
import CommentBar from './CommentBar';
import PostAuthor from './PostAuthor';
import ActionBar from './ActionBar';
import PostContent from './PostContent';

type Props = {
  post: SimplePost,
  priority?: boolean
}


export default function PostCard({ post, priority = false }: Props) {
  return (
    <article className='w-full mb-5 shadow-sm shadow-neutral-300 rounded-lg text-sm'>
      <PostAuthor post={post} />
      <Image className='w-full h-[400px] object-cover' priority={priority} src={post.image} width={300} height={200} alt='postImage' />
      <div className='p-4'>
        <ActionBar />
        <PostContent post={post} />
        <CommentBar />
      </div>
    </article>
  );
}

