import HeaderIcons from "./HeaderIcons";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";

// import Logo from "@/../public/gifts-background/logo.svg";
function Header() {
  return (
    <header className=" border-b-2 border-gray-200/40 ">
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
