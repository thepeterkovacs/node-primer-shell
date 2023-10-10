import figlet from "figlet"
import gradient from "gradient-string"

import error from "../utils/error.js"

export default async function showTitle(): Promise<void> {
	return new Promise<void>(function (resolve) {
		figlet.text("Web Primer Shell", { font: "Doom" }, function (err, data) {
			if (err) {
				error("Error while initializing", err)
			}

			console.log(gradient.retro(data))

			return resolve()
		})
	})
}
