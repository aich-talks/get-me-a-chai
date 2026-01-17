import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from "next-auth/providers/github"
import mongoose from 'mongoose'
import User from '@/app/models/User'
import Payment from '@/app/models/Payment'
import connectDB from '@/app/db/connectDB'

export const authoptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "github") {
        await connectDB();

        const existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          const newUser = await User.create({
            name: user.name || user.login || "GitHub User", // ✅ REQUIRED FIELD FIX
            email: user.email,
            username: user.email.split("@")[0],
          });

          user.name = newUser.username;
        } else {
          user.name = existingUser.username;
        }

        return true;
      }
      return false;
    },

    async session({ session }) {
      await connectDB();

      const dbUser = await User.findOne({
        email: session.user.email,
      });

      if (dbUser) {
        session.user.name = dbUser.username;
      }

      return session;
    },
  },
});

export { authoptions as GET, authoptions as POST };