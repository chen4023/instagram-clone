'use client'

import useSWR from "swr";
import { SimplePost } from "@/model/Post";
import Image from "next/image";
import ProfilePostSkeleton from "./ProfilePostSkeleton";
import { useState } from "react";
import ModalPortal from "../ui/ModalPortal";
import PostModal from "../PostModal";
import PostDetail from "../post/PostDetail";

export default function ProfilePost({ username }: { username: string }) {
  const [selectedPost, setSelectedPost] = useState<SimplePost | null>(null)
  const { data: posts, isLoading, error } = useSWR<SimplePost[]>(`/api/post/userpost/${username}`)
  if (isLoading) return <ProfilePostSkeleton />
  if (error) {
    console.error('Error loading posts:', error);
    return <div className="text-red-500">포스트를 불러오는 중 오류가 발생했습니다.</div>;
  }
  if (!posts || posts.length === 0) return <div>포스트가 없습니다.</div>;
  console.log(posts)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-8 px-3">
      {posts.map((post) => (
        <div key={post.id}>
          <Image onClick={() => setSelectedPost(post)} src={post.image} alt={post.id} className="h-[320px] cursor-pointer" width={307} height={410} />

        </div>
      ))
      }
      {selectedPost &&
        <ModalPortal>
          <PostModal onClose={() => setSelectedPost(null)}>
            <PostDetail post={selectedPost} />
          </PostModal>
        </ModalPortal>
      }
    </div>
  );
}

