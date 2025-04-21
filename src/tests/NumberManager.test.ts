import { describe, it, expect } from 'vitest';
import ConditionManager from '../models/NumberManager.class';

describe('NumberManager', () => {
    it('numberChecker dont throw', async () => {
        expect(() => ConditionManager.numberChecker(1)).not.toThrow();
    });

    it('numberChecker throw', async () => {
        expect(() => ConditionManager.numberChecker(-1)).toThrow('False Number');
        // @ts-expect-error
        expect(() => ConditionManager.numberChecker(undefined)).toThrow('False Number');
        // @ts-expect-error
        expect(() => ConditionManager.numberChecker(null)).toThrow('False Number');
        expect(() => ConditionManager.numberChecker(NaN)).toThrow('False Number');
        // @ts-expect-error
        expect(() => ConditionManager.numberChecker('')).toThrow('False Number');
        // @ts-expect-error
        expect(() => ConditionManager.numberChecker(false)).toThrow('False Number');
    });
});
