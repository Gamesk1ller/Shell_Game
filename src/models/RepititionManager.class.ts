import chalk from "chalk";
import inquirer from "inquirer";

class RepetitionManager {
    public static async continueQuestion(): Promise<{ continueAnswer: string }> {
        const question: { continueAnswer: string } = await inquirer.prompt([
            {
                type: 'list',
                name: 'continueAnswer',
                message: chalk.green('Play again?\n'),
                choices: [
                    { name: 'Yes', value: 'Y' },
                    { name: 'No', value: 'N' },
                ]
            }
        ]);
        return question;
    }
}

export default RepetitionManager;
