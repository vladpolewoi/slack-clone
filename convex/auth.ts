import { convexAuth } from "@convex-dev/auth/server"
import Github from "@auth/core/providers/github"

export const { auth, signIn, signOut, store } = convexAuth({
  providers: [Github({
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  })],
})
