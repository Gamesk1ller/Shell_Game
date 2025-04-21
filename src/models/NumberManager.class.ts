import chalk from 'chalk';

class ConditionManager {
    public static numberChecker(numberCondition: number): void {
        if (typeof numberCondition !== 'number' || isNaN(numberCondition) || numberCondition < 0) {
            throw new Error('False Number');
        }
    }

    public static winChecker(winCondition: number): string {
        if (winCondition % 2 === Math.floor(Math.random()) * 2) {
            return '\nYe win Matey :D';
        } else {
            return '\nYe loose :(';
        }
    }

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

export default ConditionManager;
