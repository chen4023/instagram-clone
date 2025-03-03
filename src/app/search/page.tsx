import SearchBar from '@/components/search/SearchBar';
import SearchResult from '@/components/search/SearchResult';
import React from 'react';

export default function SearchPage() {
  return (
    <div className='w-full'>
      <h1 className='text-center text-2xl font-semibold my-3 mb-8'>검색</h1>
      <SearchBar />
      <SearchResult />
    </div >
  );
}

