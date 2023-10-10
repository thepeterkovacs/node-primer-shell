import cliSpinners from "cli-spinners"
import { execa } from "execa"
import { oraPromise } from "ora"

import error from "../utils/error.js"

export async function startVscode(name: string): Promise<void> {
	try {
		await oraPromise(
			execa("code", [name]),

			{
				text: "Starting VSCode...",
				successText: "VSCode started successfully",
				spinner: cliSpinners.binary,
				color: "yellow",
			}
		)
	} catch (err) {
		error("Error while starting VSCode", err)
	}
}
