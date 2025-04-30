import inquirer from 'inquirer';
import chalk from 'chalk';
import EnemyNameManager from './EnemyNameManager.class';

class GameplayManager {
   /**
    * - awaiting Input 
    * - User prompt to give a number  
    * @returns game a.k.a. numberInput
    */
    public static async gameplayStart(): Promise <{ numberInput: number }> {
        const enemy = new EnemyNameManager();    
        
        const game: { numberInput: number } = await inquirer.prompt([
            {
                type: 'number',
                name: 'numberInput',
                message:
                    chalk.yellow('Howdey Cowboy!') +
                    chalk.yellow("\n\nThe Game's easy:") +
                    chalk.red('\tChoose a number and the almighty Cowboy God may decide if yer right') +
                    chalk.yellow('\nYer Enemy: ' + enemy.getFullEnemyName) +
                    chalk.green('\n\nYer Number: '),
            },
        ]);

        return game;
    }
}

export default GameplayManager;
