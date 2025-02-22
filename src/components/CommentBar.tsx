'use client'
import EmojiIcon from "./ui/icons/EmojiIcon";
export default function CommentBar() {
  return (
    <div className="flex items-center gap-2 pt-3">
      <input type="text" placeholder="댓글 달기 ..." className="w-full bg-neutral-50 py-3 px-1 h-7 outline-none" />
      <button><EmojiIcon /></button>
    </div>
  );
}

