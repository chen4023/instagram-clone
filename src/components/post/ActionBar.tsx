import LikeIcon from '../ui/icons/LikeIcon';
import BookMarkIcon from '../ui/icons/BookMarkIcon';
import ChatIcon from '../ui/icons/ChatIcon';
import SendIcon from '../ui/icons/SendIcon';

export default function ActionBar() {
  return (
    <div className='flex justify-between mb-3 px-0.5'>
      <div className='flex items-center gap-3'>
        <LikeIcon />
        <ChatIcon />
        <SendIcon />
      </div>
      <BookMarkIcon />
    </div>
  );
}

