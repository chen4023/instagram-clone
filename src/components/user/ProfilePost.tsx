'use client'

import { PulseLoader } from "react-spinners";
import useSWR from "swr";
// import PostCard from "../post/PostCard";
import { PhotoPost } from "@/model/Post";
import Image from "next/image";

export default function ProfilePost({ username }: { username: string }) {
  const { data: posts, isLoading, error } = useSWR<PhotoPost[]>(`/api/post/userpost/${username}`)
  if (isLoading) return <PulseLoader size={8} color="gray" />
  if (error) {
    console.error('Error loading posts:', error);
    return <div className="text-red-500">포스트를 불러오는 중 오류가 발생했습니다.</div>;
  }
  if (!posts || posts.length === 0) return <div>포스트가 없습니다.</div>;
  console.log(posts)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-8 px-3">
      {posts.map((post) => (
        <Image key={post.id} src={post.image} alt={post.id} className="h-[320px]" width={307} height={410} />
      ))}
    </div>
  );
}

