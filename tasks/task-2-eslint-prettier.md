# Задание 2: Настройка ESLint и Prettier

Привет!

На этом этапе мы настроим инструменты для поддержания чистоты и единообразия кода в нашем проекте.

## Шаги:

1.  **Установи необходимые зависимости:**
    - Установи ESLint, Prettier и плагины для их интеграции с React и TypeScript:
      ```bash
      npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react eslint-plugin-react-hooks
      ```

2.  **Настрой ESLint:**
    - Открой файл `.eslintrc.json` (или `eslint.config.ts`, если ты предпочитаешь JS/TS конфигурацию) и убедись, что он содержит следующую конфигурацию. Если файла нет, создай его.
    - **Для `.eslintrc.json`:**
      ```json
      {
        "env": {
          "browser": true,
          "es2021": true,
          "node": true
        },
        "extends": [
          "eslint:recommended",
          "plugin:react/recommended",
          "plugin:@typescript-eslint/recommended",
          "plugin:prettier/recommended"
        ],
        "parser": "@typescript-eslint/parser",
        "parserOptions": {
          "ecmaFeatures": {
            "jsx": true
          },
          "ecmaVersion": 12,
          "sourceType": "module"
        },
        "plugins": ["react", "@typescript-eslint", "prettier"],
        "rules": {
          "prettier/prettier": "error",
          "react/react-in-jsx-scope": "off",
          "react/prop-types": "off"
        },
        "settings": {
          "react": {
            "version": "detect"
          }
        }
      }
      ```
    - **Для `eslint.config.ts` (если ты используешь его):**

      ```typescript
      import globals from "globals";
      import pluginJs from "@eslint/js";
      import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
      import { fixupConfigAsPlugin } from "@eslint/compat";
      import pluginPrettier from "eslint-plugin-prettier/recommended";
      import tseslint from "typescript-eslint";

      export default tseslint.config(
        { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
        {
          languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
              ecmaFeatures: {
                jsx: true,
              },
              ecmaVersion: 12,
              sourceType: "module",
            },
            globals: {
              ...globals.browser,
              ...globals.node,
            },
          },
        },
        pluginJs.configs.recommended,
        fixupConfigAsPlugin(pluginReactConfig),
        ...tseslint.configs.recommended,
        pluginPrettier,
        {
          rules: {
            "prettier/prettier": "error",
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
          },
          settings: {
            react: {
              version: "detect",
            },
          },
        },
      );
      ```

3.  **Настрой Prettier:**
    - Открой файл `.prettierrc` или `.prettierrc.json` и убедись, что он содержит базовые настройки форматирования. Если файла нет, создай его.
    - **Пример `.prettierrc.json`:**
      ```json
      {
        "semi": true,
        "trailingComma": "all",
        "singleQuote": true,
        "printWidth": 100,
        "tabWidth": 2
      }
      ```

4.  **Добавь скрипты в `package.json`:**
    - Добавь в секцию `"scripts"` следующие команды для запуска ESLint и Prettier:
      ```json
      "scripts": {
        "lint": "next lint",
        "lint:fix": "eslint --fix \"./**/*.{js,jsx,ts,tsx}\"",
        "format": "prettier --write \"./**/*.{js,jsx,ts,tsx,json,css,md}\""
      },
      ```
      (Убедись, что `lint` уже есть из предыдущего задания, если нет, добавь его.)

5.  **Проверь работу:**
    - Создай какой-нибудь файл с ошибками форматирования или линтинга (например, `pages/test.tsx` с неиспользуемой переменной или неправильными отступами).
    - Запусти `npm run lint` и убедись, что ESLint находит ошибки.
    - Запусти `npm run format` и `npm run lint:fix` и убедись, что Prettier и ESLint исправляют ошибки форматирования и линтинга соответственно.

Удачи!
