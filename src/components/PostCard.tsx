import { SimplePost } from '@/model/Post';
import Image from 'next/image';
import React from 'react';
import Avatar from './Avatar';
import LikeIcon from './ui/icons/LikeIcon';
import BookMarkIcon from './ui/icons/BookMarkIcon';
import { format, register } from 'timeago.js'
import ChatIcon from './ui/icons/ChatIcon';
import SendIcon from './ui/icons/SendIcon';
import koLocale from 'timeago.js/lib/lang/ko' //한국어 선택
import CommentBar from './CommentBar';

register('ko', koLocale)



export default function PostCard({ post }: { post: SimplePost }) {
  console.log(post)
  return (
    <div className='w-full mb-5 shadow-sm shadow-neutral-300 rounded-lg text-sm'>
      <div className='flex justify-between items-center w-full p-3' >
        <div className='flex items-center gap-1.5'>
          <Avatar image={post.userImage} highlignt size='small' />
          <span className='font-bold'>{post.username}</span>
          <p className='text-neutral-400 text-xs'> • {format(post.createdAt, 'ko')}</p>
        </div>
        <div className='cursor-pointer'>
          •••
        </div>
      </div>
      <Image className='w-full h-[400px] object-cover' src={post.image} width={300} height={200} alt='postImage' />
      <div className='p-4'>
        <div className='flex justify-between mb-3 px-0.5'>
          <div className='flex items-center gap-2'>
            <LikeIcon />
            <ChatIcon />
            <SendIcon />
          </div>
          <BookMarkIcon />
        </div>
        <div className='flex flex-col gap-[0.2rem]'>
          <p className='font-semibold'>좋아요 {post.likes.length}개</p>
          <div className='flex gap-1'>
            <p className='font-semibold'>{post.username}</p>
            <p>{post.text}</p>
          </div>
        </div>
        <CommentBar />
      </div>
    </div>
  );
}

