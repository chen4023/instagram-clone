import { SimplePost } from "@/model/Post";
import Image from "next/image";
import PostAuthor from "./PostAuthor";
import ActionBar from "./ActionBar";
import CommentBar from "./CommentBar";
import PostContent from "./PostContent";
import Avatar from "../Avatar";

export default function PostDetail({ post }: { post: SimplePost }) {
  const { username, image, userImage, text } = post;
  return (
    <div className="flex w-[70%] h-[95%] bg-white rounded-md">
      <Image className='basis-3/5' src={image} alt={`photo by ${username}`} width={300} height={300} />
      <div className="basis-2/5 p-2 flex flex-col justify-between">
        <div>
          <PostAuthor post={post} />
          <div className="flex items-center gap-3 p-3 text-sm">
            <Avatar image={userImage} size="small" highlignt />
            <span className="font-bold">{username}</span>
            <span>{text}</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 p-2">
          <ActionBar />
          <PostContent post={post} detail={false} />
          <CommentBar />
        </div>
      </div>
    </div>
  );
}

