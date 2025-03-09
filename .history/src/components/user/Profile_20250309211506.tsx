'use client'
import Avatar from '../Avatar';
import useSWR from 'swr';
import { PulseLoader } from 'react-spinners';

export default function Profile({ username }: { username: string }) {
  const { data: user, isLoading } = useSWR(`/api/user/${username}`)
  // if (isLoading) return <PulseLoader size={8} color='gray' />
  const { image, name, followers, following } = user;
  console.log('프로필 :', user)

  return (
    <div className='w-full flex items-center justify-center gap-12 mt-10'>
      <Avatar image={image} size='xlarge' highlight />
      <div className='flex flex-col gap-2 justify-center'>
        <p className='text-lg'>{username}</p>
        <div className='flex gap-5 text-sm'>
          <p>팔로워 {followers ? followers : 0} </p>
          <p>팔로잉 {following ? following : 0} </p>
          <p>팔로잉 {following ? following : 0} </p>
        </div>
        <p className='font-semibold'>{name}</p>
      </div>
    </div>
  );
}

