import { router } from "../trpc";
import { contractRouter } from "./contract";

export const appRouter = router({
    contract: contractRouter
});

export type AppRouter = typeof appRouter;
