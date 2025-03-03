'use client'

import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";
import { PulseLoader } from "react-spinners";
import useSWR from "swr";
import SearchResultCard from "./SearchResultCard";
import { SearchUser } from "@/model/User";



export default function UserSearch() {
  // api/search/${keyword} 
  // 검색하는 keyword가 있다면 /api/search/bob -> 유저네임이나 네임에 bob이 포함되어 있다면 해당 유저를 보여줘
  // 검색하는 keyword가 없다면 /api/search -> 전체 유저를 보여줘 (ex. 처음 searchPage에 들어온 경우)
  const [isFocused, setIsFocused] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('')

  const { data: users, isLoading } = useSWR<SearchUser[]>(`/api/search/${searchTerm}`);
  console.log(users)

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    console.log(searchTerm)
  }
  return (
    <section className="relative max-w-[400px] h-[40px] mx-auto">
      {!isFocused && <IoSearch className="absolute left-2 top-2.5 h-5 text-[#8E8E8E]" />}
      <input type="text" value={searchTerm}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleSearchTerm} className={`bg-[#EFEFEF] ${!isFocused ? 'px-8' : 'px-3'} w-[400px] h-[40px] rounded-md outline-none`} placeholder="검색" />
      {isFocused && <IoCloseCircle className="absolute right-2 top-1/2 -translate-y-1/2 h-5 hover:cursor-pointer text-[#8E8E8E]" onMouseDown={(e) => {
        e.preventDefault();
        setSearchTerm('')
      }} />}
      {/*결과 렌더링 */}
      <div className='w-[400px] mx-auto mt-3'>
        {isLoading ? (<PulseLoader size={8} color='gray' className="text-center mt-[50%]" />) :
          (users && users.length > 0 ? (users?.map((user) =>
            <ul key={user.email}>
              <SearchResultCard user={user} />
            </ul>
          )) : (<p> 사용자를 찾을 수 없습니다. </p>))}
      </div>
    </section>
  );
}

