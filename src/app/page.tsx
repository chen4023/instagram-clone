import Image from "next/image";
import { getPosts, Post } from "../service/post";

export default async function Home() {
  const posts = await getPosts() as Post[]
  return (
    <>
      <h1 className="text-gray-700">Instagram </h1>
      <div>
        {posts.map(({ _id, author: { name, email }, photo: { asset: { url } } }) => (

          <li key={_id}>
            <p>{name} : {email}</p>
            <Image src={url} alt="image" width={300} height={300} />
          </li>
        ))}
      </div>
    </>
  );
}
