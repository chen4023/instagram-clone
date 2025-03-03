import React from 'react';
import Avatar from '../Avatar';
import { AiOutlineHeart } from "react-icons/ai";
type Props = {
  comment: string;
  username: string;
  userImage: string
}
export default function Comment({ comment, isFirstComment = false }: { comment: Props, isFirstComment: boolean }) {
  const { username, userImage } = comment
  return (
    <div className='w-full flex justify-between text-sm items-center gap-2 my-4 px-3'>
      <div className='w-full flex items-center gap-1.5'>
        <Avatar image={userImage} size='small' highlight={isFirstComment} />
        <div>
          <div className='flex gap-2 mb-0.5'>
            <span className='font-semibold'>{username}</span>
            <span>{comment.comment}</span>
          </div>
          {!isFirstComment && <div className='text-xs text-neutral-500 font-semibold'>답글달기</div>}
        </div>
      </div>
      {!isFirstComment && <AiOutlineHeart className='w-4 h-4' />}
    </div>
  );
}

