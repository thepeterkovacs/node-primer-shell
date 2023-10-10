import error from "../utils/error.js"

export function validateReady(ready: "Yes" | "No"): void {
	if (ready === "No") {
		process.exit(0)
	}
}

export function validateProjectName(name: string): void {
	if (!/^[^\\/:\*\?"<>\|]+$/.test(name)) {
		error('Project name does not match regex /^[^\\/:*?"<>|]+$/')
	}
}
