# infinite-canvas-studio

Создай простой аналог сервиса Miro.com, то есть функционал бесконечного холста (виртуальной доскти) с возможностью создавать на этой доске различные фигуры, соединять их между собой стрелками, создавать стикеры, создавать карточки и собирать эти карточки в Kanban-доски и так далее. Используй технологиский стек Quasar+Pinia+Phaser для фронта и Django c API GraphQL (Graphen) для бэкенда. При помощи Quasar реализуется общая логика приложения, в том числе возможность экспорта в веб-приложение, десктопное приложение и так далее. Pinia хранит состояние, в том числе для реактивного обновления данных. На Phaser реализует основной функционал бесконечного холста (виртуальной доски).

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/infinite-canvas-studio.git
cd infinite-canvas-studio
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
