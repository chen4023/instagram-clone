import { SimplePost } from "@/model/Post";
import { client, urlFor } from "@/service/sanity";

const simplePostProjection = `
...,
"username": author->username,
"userImage": author->image,
"image": photo,
"likes": likes[]->username,
"text":comments[0].comment,
"comments":count(comments),
"id":_id,
"createdAt":_createdAt
`;

//post 데이터 fetching
export async function getFollowingPostOf(username: string) {
  return (
    client
      .fetch(
        `*[_type == "post" && author->username == "${username}"
    || author._ref in *[_type == "user" && username == "${username}"].following[]._ref]
    | order(_createAt desc){${simplePostProjection}}`
      )
      // 이미지 최적화 부분 (sanity)
      .then((posts) =>
        posts.map((post: SimplePost) => ({
          ...post,
          image: urlFor(post.image),
        }))
      )
  );
}

// type은 post이고 작성자의 username이 인자로 받아온 username과 동일한 경우이거나
// 작성자의 아이디인데, 인자로 받아온 username과 동일한 user type의 following목록의 아이디와 동일한 경우
// 쉽게 말하면 following 목록인 사람들의 id와 post 목록에 있는 작성자 id가 동일한 경우 (팔로잉 사람들의 게시글)
