// import { Pencil } from "lucide-react";
import Image from "next/image";
import UpdataAvatar from "./UpdataAvatar";

function UserAvatar({ avatar }: { avatar: string }) {
  return (
    <div className="flex justify-center">
      <div className="w-[150px] h-[150px]  relative ">
        {/* avatar */}
        <div className="relative h-full w-full  rounded-full bg-primary-light-90 overflow-hidden  ">
          <Image
            fill
            src={avatar}
            alt={`avatar`}
            priority
            sizes="150px"
            className="object-cover"
          />
        </div>
        {/* edit avatar */}
        <UpdataAvatar/>
      </div>
    </div>
  );
}

export default UserAvatar;
