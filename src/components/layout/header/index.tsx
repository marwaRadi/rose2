import HeaderIcons from "./components/HeaderIcons";
import HeaderMenu from "./components/HeaderMenu";
import Logo from "./components/Logo";

// import Logo from "@/../public/gifts-background/logo.svg";
function Header() {
  return (
    <header className="fixed left-0 top-0 right-0  z-10 bg-white border-b-2 border-gray-200/40 ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4 px-4 2xl:px-20">
          <Logo />
          <HeaderMenu />
          <HeaderIcons />
        </div>
      </div>
    </header>
  );
}

export default Header;
