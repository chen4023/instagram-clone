'use client'
import React from 'react';
import useSWR from 'swr';
import { SimplePost } from '@/model/Post';
import PostCard from './PostCard';
import { PulseLoader } from 'react-spinners';

export default function PostList() {
  const { data: posts, isLoading } = useSWR<SimplePost[]>('/api/post/');
  return (
    <ul className='w-full'>
      {isLoading && <PulseLoader className='text-center mt-32' color='gray' size={8} />}
      {posts && posts.map((post, index) => <PostCard key={post.id} post={post} priority={index < 2} />)}
    </ul>
  );
}

