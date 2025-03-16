'use client'
import { SimplePost } from '@/model/Post';
import Image from 'next/image';
import React, { useState } from 'react';
import ModalPortal from '../ui/ModalPortal';
import PostModal from '../PostModal';
import PostDetail from '../post/PostDetail';
import { signIn, useSession } from 'next-auth/react';
type Props = {
  post: SimplePost
  priority: boolean
}
export default function PostGridCard({ post, priority = false }: Props) {
  const { username, image } = post
  const { data: session } = useSession()
  const [openModal, setOpenModal] = useState(false)
  const handleOpenPost = () => {
    if (!session?.user) {
      return signIn();
    }
    setOpenModal(true);
  }
  return (
    <div>
      <Image
        src={image}
        alt={`photo by ${username}`}
        onClick={handleOpenPost}
        width={300}
        height={300}
        className='h-[150px] sm:h-[210px] md:h-[300px] object-cover cursor-pointer'
        priority={priority}
      />
      {openModal &&
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>}
    </div>
  );
}

