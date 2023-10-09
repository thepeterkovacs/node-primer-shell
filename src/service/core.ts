import { Service, ServiceConfig } from "node-windows"
import path from "path"

const config: ServiceConfig = {
	name: "Node Primer Shell",
	script: path.join(__dirname, "..", "app.js"),
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

service.on("uninstall", function () {
	console.log("Service uninstalled successfully")
})

service.on("alreadyuninstalled", function () {
	console.log("Service does not exist or already uninstalled")
})

service.on("start", function () {
	console.log("Service started successfully")
})

service.on("stop", function () {
	console.log("Service stopped successfully")
})

service.on("error", function () {
	console.log("Internal error")
})
