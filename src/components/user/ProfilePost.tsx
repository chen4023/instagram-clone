'use client'
import { useState } from "react";
import PostIcon from "../ui/icons/PostIcon";
import LikeIcon from "../ui/icons/LikeIcon";
import BookMarkIcon from "../ui/icons/BookMarkIcon";
import PostGrid from "./PostGrid";

type Props = {
  username: string
}
const tabs = [
  { type: 'posts', title: '게시물', icon: <PostIcon /> },
  { type: 'liked', title: '좋아요', icon: <LikeIcon className="w-3.5 h-3.5" /> },
  { type: 'saved', title: '저장됨', icon: <BookMarkIcon className="w-3 h-3" /> }
]
export default function ProfilePost({ username }: Props) {
  const [query, setQuery] = useState(tabs[0].type)

  return (
    <section className="">
      <ul className="flex items-center justify-center gap-20 border-t">
        {tabs.map(({ type, title, icon }) =>
          <li key={type}
            onClick={() => setQuery(type)}
            className={`flex items-center justify-center text-sm gap-1 pt-3 border-black cursor-pointer ${type === query && 'font-bold border-t'}`}>
            <button className=" scale-150 md:scale-100">{icon}</button>
            <span className="hidden md:inline">{title}</span>
          </li>)}
      </ul>
      <PostGrid username={username} query={query} />
    </section>
  );
}

