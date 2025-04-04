#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
const commander_1 = require("commander");
const shelljs_1 = __importDefault(require("shelljs"));
//Für Echo
shelljs_1.default.config.silent = false;
let zahl;
const vornamen = ["Bandit", "Sheriff", "Cowboy",];
const nachnamen = ["Müller", "Steffens", "Bohler", "Müsterlich"];
// CLI-Programm erstellen
const program = new commander_1.Command();
//Zufalls Zahl (Math funktion), stern für bedingung -> länge des arrays
let vornamen_zufall = vornamen[Math.floor(Math.random() * vornamen.length)];
let nachnamen_zufall = nachnamen[Math.floor(Math.random() * nachnamen.length)];
// Checkboxen-Menü
const showMenu = async () => {
    const answer = await inquirer_1.default.prompt([
        {
            type: "number",
            name: "Question",
            message: chalk_1.default.yellow("Howdy Cowboy!")
                + chalk_1.default.yellow("\n\nDas Spiel ist einfach:")
                + chalk_1.default.red(" Erwische die Zahl die das Programm errät")
                + chalk_1.default.yellow("\nDein Gegener ist:")
                + chalk_1.default.bgMagenta("\n" + vornamen_zufall + " " + nachnamen_zufall)
                + chalk_1.default.green("\n\nDeine Zahl: ")
        },
    ]);
    console.log(answer.Question);
};
// CLI-Befehl registrieren
program
    .name("testcli")
    .description("Ein schönes TypeScript CLI-Tool mit Navigation und Farben")
    .version("1.0.0")
    .action(async () => {
    await showMenu();
});
program.parse(process.argv);
