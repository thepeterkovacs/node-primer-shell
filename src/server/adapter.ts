import { inferAsyncReturnType, initTRPC } from "@trpc/server"
import * as trpcExpress from "@trpc/server/adapters/express"
import express from "express"

const createContext = ({}: trpcExpress.CreateExpressContextOptions) => ({})
type Context = inferAsyncReturnType<typeof createContext>

const t = initTRPC.context<Context>().create()

const appRouter = t.router({})

const app = express()
const port = 4000

app.use("/trpc", trpcExpress.createExpressMiddleware({ router: appRouter, createContext }))

app.listen(port, () => {
	console.log(`Node Primer Shell tRPC listening on port ${port}`)
})
