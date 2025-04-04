import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';

export default [
    {
        ignores: ['dist/', '/*.js'],
    },

    js.configs.recommended,
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                console: 'readonly', // Fix "console is not defined"
                process: 'readonly', // Fix "process is not defined"
                dirname: 'readonly',
                filename: 'readonly',
            },
        },
        plugins: {
            '@typescript-eslint': ts,
            prettier: prettier,
            import: importPlugin,
        },
        rules: {
            'no-unused-vars': 'off', // Wichtig: Standardregel deaktivieren
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
            ],
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/explicit-function-return-type': 'error',
        },
    },
];
