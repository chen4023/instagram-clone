'use client'
import React from 'react';
import useSWR from 'swr';
import { SimplePost } from '@/model/Post';
import { PulseLoader } from 'react-spinners';
import PostCard from './PostCard';

export default function PostList() {
  const { data: posts, isLoading } = useSWR<SimplePost[]>('/api/post');
  return (
    <ul className='w-full'>
      {isLoading && <PulseLoader className='text-center mt-32' size={8} color='red' />}
      {posts && posts.map(post => <PostCard key={post.id} post={post} />)}
    </ul>
  );
}

