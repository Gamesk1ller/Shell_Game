import chalk from 'chalk';

class NumberManager {
    
    /**
     * - checking whether Number (which was given by PLayer) is in its right condition
     * - throwing errors if number is not correct
     */

    public static numberChecker(numberCondition: number): void {
        if (typeof numberCondition !== 'number' || isNaN(numberCondition) || numberCondition < 0) {
            throw new Error('False Number');
        }
    }
    
    /**
     * - check whether player is a winner
     * @returns winCondition to determine win  
     */

    public static winChecker(winCondition: number): string {
        if (winCondition % 2 === Math.floor(Math.random()) * 2) {
            return '\nYe win Matey :D';
        } else {
            return '\nYe loose :(';
        }
    }

    /**
     * - try and catch of numberchecker function or errors
     */

    public static handleGameplay(customNumber: number): void {
        try {
            this.numberChecker(customNumber);
            const status: string = this.winChecker(customNumber);
            console.log(status);
        } catch (error) {
            console.log(chalk.red(error));
        }
    }
}

export default NumberManager;
