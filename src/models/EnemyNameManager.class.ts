import { faker } from '@faker-js/faker';

class EnemyNameManager {
    // Class Variable
    private static instance: EnemyNameManager;
    private fullEnemyName: string;

    //Constructor call on Name generating Function
    constructor() {
        this.fullEnemyName = faker.person.fullName();
    }

    //Enemy is available or someone is still there
    // static getInstance(): EnemyNameManager {
    //     if (!EnemyNameManager.instance) {
    //         EnemyNameManager.instance = new EnemyNameManager();
    //     }
    //     return EnemyNameManager.instance;
    // }

    //Returning Name for ohter instances
    public get getFullEnemyName() :string {
        return this.fullEnemyName;
    }
}

export default EnemyNameManager;
