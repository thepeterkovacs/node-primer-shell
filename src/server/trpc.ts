import { inferAsyncReturnType, initTRPC } from "@trpc/server"
import * as trpcExpress from "@trpc/server/adapters/express"

export const createContext = ({}: trpcExpress.CreateExpressContextOptions) => ({})
type Context = inferAsyncReturnType<typeof createContext>

const t = initTRPC.context<Context>().create()

export const authProcedure = t.middleware(({ next }) => {
	return next()
})

export const router = t.router

export const publicProcedure = t.procedure
export const privateProcedure = t.procedure.use(authProcedure)
