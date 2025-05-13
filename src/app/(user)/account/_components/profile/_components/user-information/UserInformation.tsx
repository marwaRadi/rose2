import { getLoginUserData } from "@/lib/api/auth";
// import Image from "next/image";
import UserAvatar from "./UserAvatar";

async function UserInformation() {
  //==========================================================
  const payload = await getLoginUserData();
  
  const { gender, firstName, lastName, photo, email, addresses, phone } =
    payload?.data as LoginUser;

  //========================================================
  //render
  if (payload?.error) return <div> {payload.error}</div>;

  return (
    <div className="mt-10  space-y-10">
      {/* user avatar */}
      <UserAvatar avatar={photo} />
      {/* <div className="flex justify-center">
        <div className="relative w-[150px] h-[150px] rounded-full bg-primary-light-90 overflow-hidden  ">
          <Image
            fill
            src={photo}
            alt={`${firstName} image`}
            priority
            sizes="150px"
            className="object-cover"
          />
        </div>
      </div> */}

      {/* user information */}
      <div className="border-t pt-4">
        <h3 className="text-[20px] text-heading mb-6">personal information:</h3>

        <ul className=" space-y-4 md:grid md:grid-cols-2 md:gap-2 ">
          {/* user name */}
          <li className="   gap-4 capitalize font-semibold flex items-center gap-30 ">
            <div>
              <h5> full name </h5>
              <p className="text-[15px] ">
                {firstName}
                {""} {lastName}
              </p>
            </div>
            <div>
              <button>edit</button>
            </div>
          </li>
          {/* user email */}
          <li className="   gap-4  font-semibold ">
            <h5 className="capitalize"> email address </h5>
            <p className="text-[15px] ">{email || "No email"}</p>
          </li>
          {/* user phone */}
          <li className="   gap-4  font-semibold ">
            <h5 className="capitalize">Phone Number </h5>
            <p className="text-[15px] ">{phone || "No phone"}</p>
          </li>
          {/* user address */}
          <li className="   gap-4  font-semibold capitalize">
            <h5 className="">Home Address </h5>
            <p className="text-[15px] ">
              {addresses.length > 0 ? addresses : "no address"}
            </p>
          </li>
          {/* user gender */}
          <li className="   gap-4  font-semibold capitalize">
            <h5 className="">gander </h5>
            <p className="text-[15px] ">{gender || "no gender"}</p>
          </li>
          {/* edit */}
        </ul>
      </div>
    </div>
  );
}

export default UserInformation;
