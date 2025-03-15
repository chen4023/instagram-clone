import { ProfileUser } from "@/model/User";
import useSWR from "swr";
type Props = {
  user: ProfileUser
}

export default function FollowButton({ user }: Props) {
  const { username } = user;
  const { data } = useSWR('/api/me')
  const loggedInUser = data && data[0]

  const showButton = loggedInUser && loggedInUser.username !== username;
  const following = loggedInUser && loggedInUser.following?.find((item: { username: string; }) => item.username === username);
  const text = following ? 'Unfollow' : '팔로우'
  return (
    <div>
      {showButton && <button className={`${following ? 'bg-red-500' : 'bg-[#0095F6]'} text-white text-sm font-semibold px-4 py-1 rounded-md `}>{text}</button>}
    </div>
  );
}

