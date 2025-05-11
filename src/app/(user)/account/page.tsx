import { getMetadata } from "@/_utils/getMetadata";
import Profile from "./_components/profile";

export const metadata = getMetadata(
  "Profile",
  "Your profile page, where you can view and manage your account information, preferences, and settings."
);

function page() {
  return <Profile/>;
}

export default page;
