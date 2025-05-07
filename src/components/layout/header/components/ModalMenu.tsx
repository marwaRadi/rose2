import Logo from "./Logo";
import MenuList from "./MenuList";

function ModalMenu() {
  return (
    <div className="flex flex-col gap-4 px-4 py-6">
      <Logo />
      <MenuList />
    </div>
  );
}

export default ModalMenu;
