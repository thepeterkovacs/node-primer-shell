import express from "express"

const app = express()
const port = 3000

app.get("/", (_, res) => {
	res.status(200).send("Node Primer Shell")
})

app.listen(port, () => {
	console.log(`Node Primer Shell listening on port ${port}`)
})
