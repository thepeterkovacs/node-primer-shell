import * as dotenv from "dotenv"
import express from "express"

dotenv.config({
	path: ".env.local",
})

const app = express()
const port = process.env.PORT

app.get("/", (_, res) => {
	res.status(200).send("Node Primer Shell")
})

app.listen(port, () => {
	console.log(`Node Primer Shell listening on port ${port}`)
})
