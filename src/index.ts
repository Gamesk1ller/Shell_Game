#!/usr/bin/env node
import { Command } from 'commander';
import shell from 'shelljs';
import { GameplayManager, NumberManager, RepetitionManager, } from './models';

//Echo setting
shell.config.silent = false;

//Create new CLI-Program
const program = new Command();

/**
 * - Prompting user for input via GameplayManager
 * - Input NumberManager -> handle game logic (win/loss)
 * - Asks to play again  with RepetitionManager
 * - continue -> looping showMenu()
 *
 * @returns {Promise<void>} Resolves when the player chooses not to continue.
 */
const showMenu: () => Promise<void> = async () => {
    const gameplayInput = await GameplayManager.gameplayStart();

    NumberManager.handleGameplay(gameplayInput.numberInput);

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
