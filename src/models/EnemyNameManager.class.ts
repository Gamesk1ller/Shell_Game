import { faker } from '@faker-js/faker';

class EnemyNameManager {
    
/**
 * - creating a radom enemy Name
 * - creating a instance of Enemy for futur checks
 * @returns fullEnemyName a.k.a. randomised Name by faker function
 */

    // Class Variable
    private static instance: EnemyNameManager;
    private fullEnemyName: string;

    //Constructor call on Name generating Function
    constructor() {
        this.fullEnemyName = faker.person.fullName();
    }

    /** NOTE: Futur plan
     * Enemy is available or someone is still there
     * static getInstance(): EnemyNameManager {
     * if (!EnemyNameManager.instance) {
     * EnemyNameManager.instance = new EnemyNameManager();
     * }
     * return EnemyNameManager.instance;
     * }
     */

    //Returning Name for ohter instances
    public get getFullEnemyName(): string {
        return this.fullEnemyName;
    }
}

export default EnemyNameManager;
