import React from 'react';
import { CiCamera } from "react-icons/ci";
export default function NotPost() {
  return (
    <div className='flex flex-col items-center justify-center gap-3 mt-[20vh]'>
      <CiCamera className='w-24 h-24 border border-black rounded-full p-3.5' />
      <p className='text-xl font-semibold'>게시물 없음</p>
    </div>
  );
}

