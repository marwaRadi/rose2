import { getMetadata } from "@/_utils/getMetadata"

export const metadata =getMetadata(
  "Profile",
  "Your profile page, where you can view and manage your account information, preferences, and settings.") 

function page() {
  return (
    <div>
      profile
    </div>
  )
}

export default page
