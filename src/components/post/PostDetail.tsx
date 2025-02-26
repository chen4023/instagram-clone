import { FullPost, SimplePost } from "@/model/Post";
import Image from "next/image";
import ActionBar from "./ActionBar";
import CommentBar from "./CommentBar";
import PostContent from "./PostContent";
import useSWR from "swr";
import Comment from "./Comment";

export default function PostDetail({ post }: { post: SimplePost }) {
  const { id, username, image } = post;
  const { data } = useSWR<FullPost>(`/api/post/${id}`);
  const comments = data?.comments
  return (
    <div className="flex w-[70%] h-[80%] bg-white rounded-md">
      <Image className='basis-3/5 object-cover' src={image} alt={`photo by ${username}`} priority width={300} height={300} />
      <div className="basis-2/5 p-2 flex flex-col justify-between">
        <div>
          {comments && comments.map((comment, index) => (
            <Comment key={comment.username} comment={comment} isFirstComment={index === 0}
            />
          ))}
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

