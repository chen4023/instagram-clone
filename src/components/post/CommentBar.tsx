'use client'
import { useState } from "react";
import EmojiIcon from "../ui/icons/EmojiIcon";
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';

export default function CommentBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('');

  const handleEmojiSelect = (emojiData: EmojiClickData) => {
    setInputValue(prevInput => prevInput + emojiData.emoji);
    setIsOpen(false); // 선택 후 자동으로 닫히게 함
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const onEmojiClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(prev => !prev)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('제출', inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex relative items-center gap-2 pt-3">
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="댓글 달기 ..." className="w-full py-3 px-1 h-7 outline-none" />
      <button type="button" onClick={onEmojiClick}><EmojiIcon /></button>
      {isOpen &&
        <div className="absolute bottom-9 right-0 z-10">
          <EmojiPicker
            onEmojiClick={handleEmojiSelect}
            lazyLoadEmojis={true}
            searchDisabled={true}
            skinTonesDisabled={true}
            height={300}
            width={300}
          />
        </div>}
    </form>
  );
}

