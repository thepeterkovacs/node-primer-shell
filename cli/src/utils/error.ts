import chalk from "chalk"

export default function error(msg: string, err?: unknown): void {
	console.log(chalk.bgRed(msg + "\n"))

	if (err) {
		console.log(chalk.red(err + "\n"))
	}

	process.exit(1)
}
