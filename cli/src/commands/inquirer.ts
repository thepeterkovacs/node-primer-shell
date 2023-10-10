import inquirer from "inquirer"

export async function askIsReady(): Promise<"Yes" | "No"> {
	const answer: { ready: "Yes" | "No" } = await inquirer.prompt([
		{
			name: "ready",
			type: "list",
			message: "Ready to clone Web Primer Shell from GitHub?",
			choices: [
				{
					name: "Yes",
				},
				{
					name: "No",
				},
			],
		},
	])

	return answer.ready
}

export async function askProjectName(): Promise<string> {
	const answer: { name: string } = await inquirer.prompt([
		{
			name: "name",
			type: "input",
			message: "What is the name of your project?",
		},
	])

	return answer.name
}
