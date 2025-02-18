import { SimplePost } from "@/model/Post";
import { client, urlFor } from "@/service/sanity";

const simplePostProjection = `
...,
"username": author->username,
"userImage": author->image,
"image": photo,
"likes": like[]->username,
"text":comments[0].comment,
"comments":count(comments),
"id":_id,
"createdAt":_createdAt
`;

//post 데이터 fetching
export async function getFollowingPostOf(username: string) {
  return client
    .fetch(
      `*[_type == "post" && author->username == "${username}"
    || author._ref in *[_type == "user" && username == "${username}"].following[]._ref]
    | order(_createAt desc){${simplePostProjection}}`
    )
    .then((posts) =>
      posts.map((post: SimplePost) => ({
        ...post,
        image: urlFor(post.image),
      }))
    );
}
