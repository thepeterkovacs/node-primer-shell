import cliSpinners from "cli-spinners"
import { execa } from "execa"
import { oraPromise } from "ora"

import error from "../utils/error.js"

export async function removeUnnecessaryDirectories(name: string): Promise<void> {
	try {
		await oraPromise(execa("rd", ["/s", "/q", `${name}\\cli`], { shell: true }), {
			text: "Removing unnecessary directories...",
			successText: "Unnecessary directories removed successfully",
			spinner: cliSpinners.binary,
			color: "yellow",
		})
	} catch (err) {
		error("Error while removing unnecessary directories", err)
	}
}

export async function removeUnnecessaryFiles(name: string): Promise<void> {
	try {
		await oraPromise(
			execa(
				"del",
				[
					"/f",
					`${name}\\CHANGELOG.md`,
					`${name}\\LICENSE.md`,
					`${name}\\SECURITY.md`,
					`${name}\\README.md`,
					`${name}\\package-lock.json`,
				],
				{
					shell: true,
				}
			),
			{
				text: "Removing unnecessary files...",
				successText: "Unnecessary files removed successfully",
				spinner: cliSpinners.binary,
				color: "yellow",
			}
		)
	} catch (err) {
		error("Error while removing unnecessary files", err)
	}
}
