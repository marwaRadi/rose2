import MainModal from "./MainModal";
import MenuList from "./MenuList";

function HeaderMenu() {
  return (
    <div className="order-last md:order-none  ">
      <div className="md:hidden">
        <MainModal />
      </div>
      <div className="hidden md:block">
        <MenuList />
      </div>
    </div>
  );
}

export default HeaderMenu;
