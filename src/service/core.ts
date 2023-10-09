import { Service, ServiceConfig } from "node-windows"
import path from "path"

const config: ServiceConfig = {
	name: "node-primer-shell-service",
	script: path.join(__dirname, "server.js"),
}

export const service = new Service(config)
