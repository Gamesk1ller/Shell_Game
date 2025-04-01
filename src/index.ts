#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import { Command } from "commander";
import shell, { echo } from "shelljs";
import { log } from "console";

//Für Echo
shell.config.silent = false;

let zahl: number;
const vornamen : string[] = ["Bandit", "Sheriff", "Cowboy",];
const nachnamen : string[] = ["Müller", "Steffens", "Bohler", "Müsterlich"]; 

// CLI-Programm erstellen
const program = new Command();

//Zufalls Zahl (Math funktion), stern für bedingung -> länge des arrays
let vornamen_zufall : String = vornamen[Math.floor(Math.random() * vornamen.length)];
let nachnamen_zufall : String = nachnamen[Math.floor(Math.random() * nachnamen.length)];
let weiterspielen : boolean = true;

//Promise = Void, bis funktion erfüllt ist
const showMenu : () => Promise<void> = async () => {
  
  while(weiterspielen){

  //Zahl Game Funktion
  const numberGame : {inputNumber : number}  = await inquirer.prompt([
    {
      type: "number",
      name: "inputNumber",
      message:chalk.yellow("Howdy Cowboy!")
      + chalk.yellow("\n\nDas Spiel ist einfach:") 
      + chalk.red(" Erwische die Zahl die das Programm errät")
      + chalk.yellow("\nDein Gegener ist:")
      + chalk.bgMagenta ("\n"+vornamen_zufall+" "+ nachnamen_zufall)
      + chalk.green("\n\nDeine Zahl: ")
    },
  ]);
  console.log(numberGame.inputNumber);
  
  const continueQuestion : {continue : String} = await inquirer.prompt([
    {
      type:"list",
      name:"continue",
      message:chalk.green("\n\nWeitermachen?"),
      choices: [
        {name: "Fortsetzen", value: "Ja"},
        {name: "Beenden", value: "Nein"},
      ],
    },
  ],
);

  if(continueQuestion.continue === "Nein"){
    weiterspielen = false;}
  }
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
