import { client } from "@/service/sanity";
export type Author = {
  _id: string;
  name: string;
  username: string;
  email: string;
};

export type Post = {
  _id: string;
  author: Author;
  photo: {
    asset: {
      url: string;
    };
  };
};
//post 데이터 fetching
export async function getPosts(): Promise<Post[]> {
  return client.fetch(`*[_type == "post"] {
    _id,
    author->{
      _id,
      name,
      username,
      email
    },
    photo {
      asset->{
        url
      }
    }
  }`);
}
