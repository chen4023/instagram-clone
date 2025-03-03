import UserSearch from '@/components/search/UserSearch';
import React from 'react';

export default function SearchPage() {
  return (
    <div className='w-full'>
      <h1 className='text-center text-2xl font-semibold my-3 mb-8'>검색</h1>
      <UserSearch />
    </div >
  );
}

