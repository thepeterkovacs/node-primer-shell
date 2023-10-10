import cliSpinners from "cli-spinners"
import { execa } from "execa"
import { promises } from "fs"
import { oraPromise } from "ora"

import error from "../utils/error.js"

export async function removeExistingPackageJson(name: string): Promise<void> {
	try {
		await oraPromise(execa("del", ["/f", `${name}\\package.json`], { shell: true }), {
			text: "Removing existing package.json...",
			successText: "Existing package.json removed successfully",
			spinner: cliSpinners.binary,
			color: "yellow",
		})
	} catch (err) {
		error("Error while removing existing package.json", err)
	}
}

export async function createPackageJson(name: string): Promise<void> {
	try {
		const content = {
			name,
			version: "0.0.0",
			license: "MIT",
			private: true,
			engines: {
				node: ">=18.17.1",
			},
			packageManager: "pnpm@8.7.1",
			scripts: {
				build: "npx tsc",
				watch: "tsc -w",
				dev: "node build/app.js",
				format: "pnpm prettier . --write",
			},
			devDependencies: {
				"@trivago/prettier-plugin-sort-imports": "^4.2.0",
				"@types/express": "^4.17.18",
				"@types/node": "^20.8.2",
				"@types/node-windows": "^0.1.4",
				typescript: "^5.2.2",
			},
			dependencies: {
				"@trpc/server": "^10.40.0",
				dotenv: "^16.3.1",
				express: "^4.18.2",
				"node-windows": "1.0.0-beta.8",
			},
		}

		await oraPromise(
			promises.writeFile(`${name}\\package.json`, JSON.stringify(content, null, "\t") + "\n"),
			{
				text: "Creating package.json...",
				successText: "package.json created successfully",
				spinner: cliSpinners.binary,
				color: "yellow",
			}
		)
	} catch (err) {
		error("Error while creating package.json", err)
	}
}
