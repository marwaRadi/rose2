import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import { cookies } from "next/headers";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const baseURL = process.env.API + "/auth/signin";
        const res = await fetch(baseURL, {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { "Content-Type": "application/json" },
        });
        const user: APIResponse<LoginRegisterResponse> = await res.json();
        if ("user" in user && user.message === "success") {
          // set cookie
          // (await cookies()).set("e-commerce-token", user.token, {
          //   httpOnly: true,
          //   maxAge: 60 * 60 * 24 * 7,
          //   sameSite: "strict",
          // });


          return { ...user.user, token: user.token, id: user.user._id };
        } else {
          // If no error and we have user data, return it
          // Return null if user data could not be retrieved
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };
      return token;
    },
    async session({ session, token }) {
      session.token = token.token
      session.firstName = token.firstName;
      session.lastName = token.lastName;
      session.email = token.email;
      session.gender = token.gender;
      session.phone = token.phone;
      session.photo = token.phone;
      session.role = token.role;
      session.wishlist = token.wishlist;
      session.addresses = token.addresses;

      return session;
    },
  },
};
