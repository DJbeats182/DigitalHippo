import AppRouter from "next/dist/client/components/app-router";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  anyAPIRoute: publicProcedure.query(() => {
    return 'hello'
  }),
})

export type AppRouter = typeof appRouter