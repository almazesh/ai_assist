# Fullstack приложение: NestJS + React + Docker

Это полноценное fullstack приложение с современным стеком технологий.

## Технологии

- **Backend**: NestJS, TypeScript
- **Frontend**: React, TypeScript
- **Контейнеризация**: Docker, Docker Compose
- **Веб-сервер**: Nginx

## Структура проекта

```
my-fullstack-app/
├── backend/          # NestJS API
├── frontend/         # React приложение
├── docker-compose.yml
└── README.md
```

## Быстрый старт

### Запуск с Docker (рекомендуется)

```bash
docker-compose up --build
```

### Запуск в режиме разработки

```bash
# Установка зависимостей backend
cd backend
npm install
npm run start:dev

# Установка зависимостей frontend (в новом терминале)
cd frontend
npm install
npm start
```

## Доступ к приложению

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **Health check**: http://localhost:3001/health

## API Endpoints

- `GET /` - Приветственное сообщение
- `GET /health` - Проверка состояния
- `GET /users` - Получить всех пользователей
- `POST /users` - Создать пользователя
- `GET /users/:id` - Получить пользователя по ID
- `DELETE /users/:id` - Удалить пользователя

## Команды Docker

```bash
# Сборка и запуск
docker-compose up --build

# Запуск в фоновом режиме
docker-compose up -d

# Остановка
docker-compose down

# Просмотр логов
docker-compose logs
```

## Разработка

Проект готов для разработки и может быть расширен дополнительными модулями, базой данных, аутентификацией и другими функциями.
