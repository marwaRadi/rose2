import { getMetadata } from "@/_utils/getMetadata"

export const metadata = getMetadata(
  "Contact",
  "Get in touch with our customer support team for assistance with orders, products, or inquiries. Contact us via email or phone for prompt and helpful responses."
);

function page() {
  return (
    <main className="container mx-auto 2xl:px-[80px] my-20 px-[16px]">
      <h2 className=" uppercase tracking-[4px] mb-[48px] text-primary-dark font-bold">
        contact us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
        {/* left side */}
        <div className=" space-y-6 rounded-[20px] shadow-[0px_0px_17px_-5px_rgba(219,61,128,0.2)]  md:w-fit p-6">
          {/* content */}
          <div className="flex gap-2">
            <div className="border w-[70px] h-[70px] flex justify-center items-center rounded-[10px] border-primary-dark text-primary-dark ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold !text-primary-dark text-xl">
                Call Anytime
              </p>
              <p className="!text-heading">241-373-2123</p>
            </div>
          </div>
          <div className="flex gap-2 ">
            <div className="border w-[70px] h-[70px] flex justify-center items-center rounded-[10px] border-primary-dark text-primary-dark ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold !text-primary-dark text-xl">Send Email</p>
              <p className="!text-heading">Dwight63@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-2 ">
            <div className="border w-[70px] h-[70px] flex justify-center items-center rounded-[10px] border-primary-dark text-primary-dark ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold !text-primary-dark text-xl">Visit Us </p>
              <p className="!text-heading">
                20 Island Park Road,
                <br /> New Jearsy, New York, USA
              </p>
            </div>
          </div>
        </div>
        {/* Right side */}
        <form className=" space-y-6">
          <div className="w-full h-12 relative flex rounded-xl capitalize ">
            <input
              itemID="userName"
              className="peer w-full  outline-none px-4 text-base rounded-xl  border border-primary-dark focus:shadow-md focus:shadow-primary-dark/10"
              id="userName"
              type="text"
              required
            />
            <label
              className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 rounded-full peer-focus:top-0 peer-focus:left-3 font-light 
              peer-focus:text-sm peer-focus:text-primary-dark 
              peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm   peer-valid:text-primary-dark  duration-150"
              htmlFor="userName"
            >
              name
            </label>
          </div>
          <div className="w-full h-12 relative flex rounded-xl capitalize">
            <input
              itemID="email"
              className="peer w-full  outline-none px-4 text-base rounded-xl  border border-primary-dark focus:shadow-md focus:shadow-primary-dark/10"
              id="email"
              type="text"
              required
            />
            <label
              className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light peer-focus:text-sm peer-focus:text-primary-dark  peer-valid:text-primary-dark  peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm   duration-150"
              htmlFor="email"
            >
              email
            </label>
          </div>
          <div className="w-full h-12 relative flex rounded-xl capitalize">
            <input
              itemID="phone"
              className="peer w-full  outline-none px-4 text-base rounded-xl  border border-primary-dark focus:shadow-md focus:shadow-primary-dark/10"
              id="phone"
              type="number"
              required
            />
            <label
              className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light peer-focus:text-sm peer-focus:text-primary-dark  peer-valid:text-primary-dark  peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm   duration-150"
              htmlFor="phone"
            >
              phone
            </label>
          </div>
          <div className="w-full  relative flex rounded-xl capitalize">
            <textarea
              itemID="message"
              className="peer w-full h-[150px] pt-[10px]  outline-none px-4 text-base rounded-xl  border border-primary-dark focus:shadow-md focus:shadow-primary-dark/10"
              id="message"
              required
            />
            <label
              className="absolute top-[10%] bg-white left-4 px-2 peer-focus:top-[-10px]  peer-focus:left-3 font-light peer-focus:text-sm peer-focus:text-primary-dark  peer-valid:text-primary-dark  peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm   duration-150"
              htmlFor="message"
            >
              your message
            </label>
          </div>
        </form>
      </div>
    </main>
  );
}

export default page
 