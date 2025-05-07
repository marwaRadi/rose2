// "use client";
// import { signIn } from "next-auth/react";
// // import { getMetadata } from "@/_utils/getMetadata"
// import { FormEvent } from "react";

// // export const metadata = getMetadata(
// //   "Login",
// //   "Login to your account to access all the features and services of our website.")

// function Page() {
//   async function handleSubmit(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const data = Object.fromEntries(formData);
//     console.log(data);

//     const res = await signIn("credentials", { ...data , redirect: false });
//     console.log('res from login',res?.ok)
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="email">email</label>
//         <input type="email" name="email" id="email" />
//       </div>
//       <div>
//         <label htmlFor="password">password</label>
//         <input type="password" name="password" id="password" />
//       </div>
//       <button>enter</button>
//     </form>
//   );
// }

// export default Page;
