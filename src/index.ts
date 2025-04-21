#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import { Command } from 'commander';
import shell from 'shelljs';
import ConditionManager from './models/NumberManager.class';
import EnemyNameManager from './models/EnemyNameManager.class';


//Echo setting
shell.config.silent = false;

//Create new CLI-Program
const program = new Command();

//Promise = Void, until answer is given
const showMenu: () => Promise<void> = async () => {
    const enemy = new EnemyNameManager();    


    const numberInputFunction: { numberInput: number } = await inquirer.prompt([
        {
            type: 'number',
            name: 'numberInput',
            message:
                chalk.yellow('Howdey Cowboy!') +
                chalk.yellow("\n\nThe Game's easy:") +
                chalk.red('\tChoose a number and the almighty Cowboy God may decide if yer right') +
                chalk.yellow('\nYer Enemy: '+ enemy.getFullEnemyName) +
                chalk.green('\n\nYer Number: '),
        },
    ]);

    //Check, whether Input and Random Number is same => Lose
    ConditionManager.handleGameplay(numberInputFunction.numberInput);

    const questionContinue: { answerContinue: String } = await inquirer.prompt([
        {
            type: 'list',
            name: 'answerContinue',
            message: chalk.green('Play again?'),
            choices: [
                { name: 'Yes', value: 'Y' },
                { name: 'No', value: 'N' },
            ],
        },
    ]);

    if (questionContinue.answerContinue === 'Y') {
        showMenu();
    }
};

// Register CLI Tool
program
    .name('CLI-Shell Game')
    .description('A Useful CLI-Tool with Navigtion and Colours')
    .version('1.0.0')
    .action(async () => {
        await showMenu();
    });

program.parse(process.argv);
