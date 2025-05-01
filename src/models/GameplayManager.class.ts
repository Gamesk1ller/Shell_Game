import inquirer from 'inquirer';
import chalk from 'chalk';
import {EnemyNameManager, SystemManager } from './index'

class GameplayManager {
   /**
    * - awaiting Input 
    * - User prompt to give a number  
    * @returns game a.k.a. numberInput
    */
    public static async gameplayStart(): Promise <{ numberInput: number }> {
        const enemy = new EnemyNameManager();
        
        //Round number Variable
        const round = SystemManager.roundNumber;
        console.log(chalk.bgBlue('Round:'+ '\t'+ round));

        const game: { numberInput: number } = await inquirer.prompt([
            {
                type: 'number',
                name: 'numberInput',
                message:
                    chalk.red('\tChoose a number and the almighty Cowboy God may decide if yer right') +
                    chalk.yellow('\nYer Enemy: ' + enemy.getFullEnemyName) +
                    chalk.green('\n\nYer Number: '),
            },
        ]);

        SystemManager.countRound();
        return game;
    }
}

export default GameplayManager;
