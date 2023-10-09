import { Service, ServiceConfig } from "node-windows"
import path from "path"

const config: ServiceConfig = {
	name: "Node Primer Shell Service",
	script: path.join(__dirname, "server.js"),
}

export const service = new Service(config)

service.on("install", function () {
	console.log("Service installed successfully")
})

service.on("alreadyinstalled", function () {
	console.log("Service already installed")
})

service.on("invalidinstallation", function () {
	console.log("Invalid installation")
})
