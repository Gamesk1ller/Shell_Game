#!/usr/bin/env node
import { Command } from 'commander';
import shell from 'shelljs';
import ConditionManager from './models/NumberManager.class';
import GameplayManager from './models/GameplayManager.class';
import RepetitionManager from './models/RepititionManager.class';

//Echo setting
shell.config.silent = false;

//Create new CLI-Program
const program = new Command();

//Promise = Void, until answer is given
const showMenu: () => Promise<void> = async () => {
    const mainGame = await GameplayManager.gameplay();

    //Check, whether Input and Random Number is same => Lose
    ConditionManager.handleGameplay(mainGame.numberInput);

    const questionContinue = await RepetitionManager.continueQuestion();

    if (questionContinue.continueAnswer === 'Y') {
        await showMenu();
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
