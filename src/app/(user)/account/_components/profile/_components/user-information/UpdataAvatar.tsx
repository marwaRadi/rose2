"use client";

import { updateImageAction } from "@/lib/actions/updataAccount.action";
import { ErrorToast } from "@/lib/utils/ErrorToast";
import { successToast } from "@/lib/utils/successToast";
import { Pencil } from "lucide-react";

function UpdataAvatar() {
  async function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const data = new FormData();
    data.append("photo", file);
    const payload = await updateImageAction(data);

    if (payload && payload.message === "success") {
      successToast("image updated successfully");
    } else {
      ErrorToast(`${payload?.message || "failed to updata image"}`);
    }
  }
  return (
    <form className="absolute bottom-2 right-2 cursor-pointer">
      <div className="relative ">
        <label
          htmlFor="photo"
          className="flex items-center justify-center rounded-full !cursor-pointer  w-[30px] h-[30px]  bg-secondary-dark "
        >
          <Pencil className=" text-white " size={16} />
        </label>
        <input
          aria-label="Upload profile photo"
          id="photo"
          accept="image/*"
          type="file"
          name="photo"
          onChange={handleOnChange}
          className="appearance-none  opacity-0  absolute w-full h-full top-0  "
        />
      </div>
    </form>
  );
}

export default UpdataAvatar;
