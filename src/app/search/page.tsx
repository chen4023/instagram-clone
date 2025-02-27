import SearchBar from '@/components/search/SearchBar';
import React from 'react';

export default function SearchPage() {
  return (
    <div>
      <h1 className='text-2xl font-semibold ml-1 my-3 mb-8'>검색</h1>
      <SearchBar />
    </div>
  );
}

