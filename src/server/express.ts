import * as trpcExpress from "@trpc/server/adapters/express"
import * as dotenv from "dotenv"
import express from "express"

import { appRouter } from "./appRouter"
import { createContext } from "./trpc"

dotenv.config({
	path: ".env.local",
})

const app = express()
const port = process.env.PORT

export function server() {
	app.use("/trpc", trpcExpress.createExpressMiddleware({ router: appRouter, createContext }))

	app.listen(port, () => {
		console.log(`Node Primer Shell listening on port ${port}`)
	})
}
