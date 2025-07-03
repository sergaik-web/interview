# Задание 1: Настройка проекта

Привет!

Это твое первое задание. Тебе нужно настроить наш проект для дальнейшей работы.

## Шаги:

1.  **Инициализируй npm:**
    - Создай файл `package.json` с помощью команды `npm init -y`.

2.  **Установи зависимости:**
    - Установи React и Next.js: `npm install react react-dom next`
    - Установи TypeScript и его типы для React и Node: `npm install --save-dev typescript @types/react @types/node`

3.  **Настрой `tsconfig.json`:**
    - Next.js требует определенной конфигурации для TypeScript. Убедись, что твой `tsconfig.json` содержит как минимум следующие параметры:
      ```json
      {
        "compilerOptions": {
          "target": "es5",
          "lib": ["dom", "dom.iterable", "esnext"],
          "allowJs": true,
          "skipLibCheck": true,
          "strict": true,
          "forceConsistentCasingInFileNames": true,
          "noEmit": true,
          "esModuleInterop": true,
          "module": "esnext",
          "moduleResolution": "node",
          "resolveJsonModule": true,
          "isolatedModules": true,
          "jsx": "preserve",
          "incremental": true
        },
        "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
        "exclude": ["node_modules"]
      }
      ```

4.  **Создай структуру папок Next.js:**
    - Создай папку `pages` в корне проекта.
    - Внутри папки `pages` создай файл `_app.tsx` (для глобальных стилей и лейаутов) и `index.tsx` (главная страница).

5.  **Добавь скрипты в `package.json`:**
    - Открой `package.json` и добавь в секцию `"scripts"` следующие команды для запуска, сборки и старта проекта:
      ```json
      "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "next lint"
      },
      ```

После выполнения всех шагов, запусти проект командой `npm run dev` и убедись, что он стартует без ошибок.

Удачи!
