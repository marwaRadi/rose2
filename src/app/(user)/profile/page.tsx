import { getMetadata } from "@/_utils/getMetadata"
import ProtectedRoute from "@/components/protected-route/ProtectedRoute";

export const metadata = getMetadata(
  "Profile",
  "Your profile page, where you can view and manage your account information, preferences, and settings."
);

function page() {
  return (
    <ProtectedRoute>
      <div>profile</div>
    </ProtectedRoute>
  );
}

export default page
