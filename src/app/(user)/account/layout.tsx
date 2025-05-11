import ProtectedRoute from "@/components/protected-route/ProtectedRoute";

import SideBar from "./_components/sidebar/SideBar";
import MobileMenu from "./_components/sidebar/mobileMenu";
// ====================================================

// ====================================================

function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <MobileMenu />
      <div className="container mx-auto px-4 2xl:px-20">
        <div className="md:grid md:grid-cols-4 gap-20 xl:grid-cols-5">
          <div className="md:col-span-1">
            <SideBar />
          </div>
          <div className=" md:col-span-3  xl:col-span-4 min-h-screen ">
            <section className="">{children}</section>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default AccountLayout;
