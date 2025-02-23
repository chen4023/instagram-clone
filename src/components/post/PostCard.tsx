'use client'
import { SimplePost } from '@/model/Post';
import Image from 'next/image';
import React, { useState } from 'react';
import CommentBar from './CommentBar';
import PostAuthor from './PostAuthor';
import ActionBar from './ActionBar';
import PostContent from './PostContent';
import ModalPortal from '../ui/ModalPortal';
import PostModal from '../PostModal';
import PostDetail from './PostDetail';

type Props = {
  post: SimplePost,
  priority?: boolean
}


export default function PostCard({ post, priority = false }: Props) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <article className='w-full mb-5 shadow-sm shadow-neutral-300 rounded-lg text-sm'>
      <PostAuthor post={post} />
      <Image onClick={() => setOpenModal(true)} className='w-full h-[400px] object-cover' priority={priority} src={post.image} width={300} height={200} alt='postImage' />
      <div className='p-4'>
        <ActionBar />
        <PostContent post={post} />
        <CommentBar />
      </div>
      {openModal &&
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>}
    </article>
  );
}

