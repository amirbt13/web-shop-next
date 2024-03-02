import { cookies } from "next/headers";
import ProfilePage from "src/components/profile/ProfilePage";

const Profile = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/profile`, {
    headers: { Cookie: cookies().toString() },
    cache: "no-store",
  });
  const data = await res.json();
  //   console.log(data);
  return <ProfilePage profile={data.user} />;
};

export default Profile;
