'use client'

import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";
import { PulseLoader } from "react-spinners";
import useSWR from "swr";
import SearchResultCard from "./SearchResultCard";
import { SearchUser } from "@/model/User";



export default function SearchBar() {
  // api/search/${keyword} 
  // 검색하는 keyword가 있다면 /api/search/bob -> 유저네임이나 네임에 bob이 포함되어 있다면 해당 유저를 보여줘
  // 검색하는 keyword가 없다면 /api/search -> 전체 유저를 보여줘 (ex. 처음 searchPage에 들어온 경우)
  const [isFocused, setIsFocused] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('')

  const { data, isLoading } = useSWR(`/api/search/${searchTerm}`);
  console.log(data)

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    console.log(searchTerm)
  }
  return (
    <div className="relative w-[300px] h-[40px] mx-auto">
      {!isFocused && <IoSearch className="absolute left-2 top-2.5 h-5 text-[#8E8E8E]" />}
      <input type="text" value={searchTerm}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleSearchTerm} className={`bg-[#EFEFEF] ${!isFocused ? 'px-8' : 'px-3'} w-[300px] h-[40px] rounded-md outline-none mb-3`} placeholder="검색" />
      {isFocused && <IoCloseCircle className="absolute right-2 top-1/2 -translate-y-1/2 h-5 hover:cursor-pointer text-[#8E8E8E]" onMouseDown={(e) => {
        e.preventDefault();
        setSearchTerm('')
      }} />}
      <div className='w-[300px] mx-auto mt-3'>
        {isLoading ? (<PulseLoader size={8} color='gray' className="w-[300px] mx-auto" />) :
          (data.length > 0 ? (data.map((user: SearchUser) =>
            <ul key={user.email}>
              <SearchResultCard user={user} />
            </ul>
          )) : (<div> 사용자를 찾을 수 없습니다. </div>))}
      </div>
    </div >
  );
}

