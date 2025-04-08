import PrimaryBtn from "@/components/common/buttons/PrimaryBtn";

function SubscribeForm() {
  return (
    <div>
      <p className="text-center pb-4">By Subscribe Our Newsletter</p>
      <div className=" relative  md:w-2/3 mx-auto flex justify-center items-center">
        <input
          placeholder="Enter your email"
          className="bg-white capitalize w-full  font-semibold text-sm p-4 rounded-[10px] md:rounded-full  focus:outline-primary-dark  transition-all"
          type="email"
          name="subscribe"
          id="subscribe"
        />
        <PrimaryBtn
          paddingVertical="py-3.5"
          paddingHorizontal="px-3.5"
          rounded="rounded-[10px] md:rounded-full"
          style="absolute right-0 "
        >
          <span className="flex gap-2">
            Subscribe
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
        </PrimaryBtn>
      </div>
    </div>
  );
}

export default SubscribeForm;
