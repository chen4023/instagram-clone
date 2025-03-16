import React from 'react';
import ProfilePostSkeleton from './ProfilePostSkeleton';
import useSWR from 'swr';
import { SimplePost } from '@/model/Post';
import NotPost from '../post/NotPost';
import PostGridCard from './PostGridCard';
type Props = {
  username: string,
  query: string
}
export default function PostGrid({ username, query }: Props) {
  const { data: posts, isLoading, error } = useSWR<SimplePost[]>(`/api/users/${username}/${query}`)

  if (error) {
    console.error('Error loading posts:', error);
    return <div className="text-red-500">포스트를 불러오는 중 오류가 발생했습니다.</div>;
  }
  // post가 없는 user
  if (posts && posts.length === 0) return <NotPost />;
  return (
    <div>
      {isLoading && <ProfilePostSkeleton />}
      <ul className="grid grid-cols-3 gap-3 mt-4 px-3">
        {posts && posts.map((post, index) => (
          <li key={post.id}>
            <PostGridCard post={post} priority={index < 6} />
          </li>
        ))
        }
      </ul>
    </div>
  );
}

