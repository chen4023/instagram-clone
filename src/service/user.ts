import { client } from "@/service/sanity";
export type OAuthUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
};

export async function addUser({ id, username, email, name, image }: OAuthUser) {
  //사용자가 존재하지 않는 경우 추가
  return client.createIfNotExists({
    _id: id,
    _type: "user",
    username,
    email,
    name,
    image,
    following: [],
    followers: [],
    bookmarks: [],
  });
}

export async function getUserByEmail(email: string) {
  return client.fetch(`*[_type == "user" && email == "${email}"] {
    ..., 
    "id":_id,
    following[]->{username,image},
    followers[]->{username,image},
    "bookmarks":bookmarks[]->_id
    }`);
}

export async function getUserByUsername(username: string) {
  return client.fetch(`*[_type == "user" && username == "${username}"] {
    ...,
    "id":_id,
    "following" : count(following),
    "followers" : count(followers),
    "bookmarks":bookmarks[]->_id
    }`);
}

export async function searchUsers(keyword?: string) {
  const query = keyword
    ? `&& (name match "${keyword}") || (username match "${keyword}")`
    : "";
  return client.fetch(`*[_type == "user" ${query}] {
    ...,
    "following" : count(following),
    "followers" : count(followers),
    }`);
}
