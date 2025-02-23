import React from 'react';
import Avatar from '../Avatar';
type Props = {
  comment: string;
  username: string;
  userImage: string
}
export default function Comment({ comment, isFirstComment = false }: { comment: Props, isFirstComment: boolean }) {
  console.log(comment)
  const { username, userImage } = comment
  return (
    <div className='flex text-sm items-center gap-2 my-4 px-3'>
      <Avatar image={userImage} size='small' />
      <div>
        <div className='flex gap-2 mb-0.5'>
          <span className='font-bold'>{username}</span>
          <span>{comment.comment}</span>
        </div>
        {!isFirstComment && <div className='text-xs text-neutral-500 font-semibold'>답글달기</div>}
      </div>
    </div>
  );
}

