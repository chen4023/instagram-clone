'use client'

import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";


export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(true);
  const [searchTerm, setSearchTerm] = useState<string>('')
  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }
  return (
    <div className="relative w-[300px] h-[40px] mx-auto">
      {!isFocused && <IoSearch className="absolute left-2 top-2.5 h-5 text-[#8E8E8E]" />}
      <input type="text" value={searchTerm}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleSearchTerm} className={`bg-[#EFEFEF] ${!isFocused ? 'px-8' : 'px-3'} w-[300px] h-[40px] rounded-md outline-none`} placeholder="검색" />
      {isFocused && <IoCloseCircle className="relative bottom-[31px] h-5 left-[275px] hover:cursor-pointer text-[#8E8E8E] " onMouseDown={(e) => {
        e.preventDefault();
        setSearchTerm('')
      }} />}
    </div >
  );
}

