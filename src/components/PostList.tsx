'use client'
import React from 'react';
import useSWR from 'swr';
import { SimplePost } from '@/model/Post';
import { PulseLoader } from 'react-spinners';

export default function PostList() {
  const { data: posts, isLoading } = useSWR<SimplePost[]>('/api/post');
  console.log(isLoading)

  console.log(posts)
  return (
    <ul>
      {isLoading && <PulseLoader className='text-center mt-32' size={8} color='red' />}
      {posts && posts.map(post => <li key={post.id}>{post.text}</li>)}
    </ul>
  );
}

