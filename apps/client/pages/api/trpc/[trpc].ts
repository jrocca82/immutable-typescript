import { apiHandler } from "@roccaweb/lib/api";
import { createContext } from "@roccaweb/lib/server/context";
import { appRouter } from "@roccaweb/lib/server/router/_app";
import { createNextApiHandler } from "@trpc/server/adapters/next";


export default apiHandler()
  .all(
    createNextApiHandler({
      router: appRouter,
      createContext,
    })
  );
