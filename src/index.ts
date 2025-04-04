#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import { Command } from 'commander';
import shell from 'shelljs';

//Für Echo
shell.config.silent = false;

//Globale Variablen
const vornamen: string[] = ['Bandit', 'Sheriff', 'Cowboy'];
const nachnamen: string[] = ['Müller', 'Steffens', 'Bohler', 'Müsterlich'];
let weiterspielen: boolean = true;
let wahlZahl: number;

// CLI-Programm erstellen
const program = new Command();

//Zufalls Zahl (Math funktion), stern für bedingung -> länge des arrays
let vornamen_zufall: string = vornamen[Math.floor(Math.random() * vornamen.length)];
let nachnamen_zufall: string = nachnamen[Math.floor(Math.random() * nachnamen.length)];

//Promise = Void, bis funktion erfüllt ist
const showMenu: () => Promise<void> = async () => {
    while (weiterspielen) {
        //Zahl Game Funktion
        const numberGame: { inputNumber: number } = await inquirer.prompt([
            {
                type: 'number',
                name: 'inputNumber',
                message:
                    chalk.yellow('Howdy Cowboy!') +
                    chalk.yellow('\n\nDas Spiel ist einfach:') +
                    chalk.red(' Erwische die Zahl die das Programm errät') +
                    chalk.yellow('\nDein Gegener ist:') +
                    chalk.bgMagenta('\n' + vornamen_zufall + ' ' + nachnamen_zufall) +
                    chalk.green('\n\nDeine Zahl: '),
            },
        ]);

        //Eingegebene Nummer wird in globale Variable gespeichert
        wahlZahl = numberGame.inputNumber;

        //Ergebnis Check     Floor = Abrunden     0/1
        if (wahlZahl % 2 === Math.floor(Math.random() * 2))  {
            console.log('\nVerloren');
        }

        //Weiterspielen Funktion
        const continueQuestion: { continue: String } = await inquirer.prompt([
            {
                type: 'list',
                name: 'continue',
                message: chalk.green('\n\nWeitermachen?'),
                choices: [
                    { name: 'Fortsetzen', value: 'Ja' },
                    { name: 'Beenden', value: 'Nein' },
                ],
            },
        ]);

        //Überprüfung der Weiterspielen Funktion
        if (continueQuestion.continue === 'Nein') {
            weiterspielen = false;
        }
    }
};

// CLI-Befehl registrieren
program
    .name('testcli')
    .description('Ein schönes TypeScript CLI-Tool mit Navigation und Farben')
    .version('1.0.0')
    .action(async () => {
        await showMenu();
    });

program.parse(process.argv);
