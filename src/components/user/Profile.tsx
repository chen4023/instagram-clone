'use client'
import { notFound } from 'next/navigation';
import Avatar from '../Avatar';
// import { PulseLoader } from 'react-spinners';
import { ProfileUser } from '@/model/User';
import FollowButton from './FollowButton';

export default function Profile({ user }: { user: ProfileUser }) {
  const { image, name, followers, following, posts, username } = user;
  if (!user) {
    notFound()
  }
  console.log('프로필 :', user)

  return (
    <div className='w-full flex flex-col md:flex-row md:gap-12 items-center justify-center gap-5 py-10'>
      <Avatar image={image} size='xlarge' highlight />
      <div className='flex flex-col gap-2 justify-center'>
        <div className='flex gap-4 items-center'>
          <p className='text-lg'>{username}</p>
          <FollowButton user={user} />
        </div>
        <div className='flex gap-5 text-sm'>
          <p>게시물 {posts} </p>
          <p>팔로워 {followers} </p>
          <p>팔로잉 {following} </p>
        </div>
        <p className='font-semibold'>{name}</p>
      </div>
    </div>
  );
}

