# Chattrix

Chattrix is a real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.IO. It supports user registration, login, avatar selection, one-to-one messaging, and live message delivery.

## Features

- User signup and login
- Set profile avatar before chatting
- Real-time messaging using Socket.IO
- Persistent chat history stored in MongoDB
- Responsive React frontend
- Backend API with Express and MongoDB
- Docker Compose setup for easy local deployment

## Tech Stack

- Frontend: React, React Router, Styled Components, Axios, Socket.IO Client
- Backend: Node.js, Express, MongoDB, Mongoose, Socket.IO
- Dev tooling: Nodemon, React Scripts
- Deployment: Docker, Docker Compose

## Project Structure

- `public/` – React frontend application
- `server/` – Express backend API and Socket.IO server
- `docker-compose.yml` – Docker services for frontend and backend
- `images/` – project screenshots

## Requirements

- Node.js
- MongoDB
- Docker and Docker Compose (optional, for containerized deployment)

## Setup

### 1. Clone the repository

```powershell
git clone https://github.com/your-username/chattrix.git
cd chattrix
```

### 2. Configure environment variables

#### Backend

```powershell
cd server
copy .env.example .env
```

Open `server/.env` and update `MONGO_URL` as needed.

#### Frontend

```powershell
cd ..\public
copy .env.example .env
```

### 3. Install dependencies

```powershell
cd ..\server
npm install
cd ..\public
npm install
```

### 4. Run locally

Start the backend:

```powershell
cd server
npm start
```

Start the frontend in a separate terminal:

```powershell
cd public
npm start
```

Open the browser at `http://localhost:3000`.

## Environment Variables

### `server/.env.example`

```text
PORT=5000
MONGO_URL="mongodb://localhost:27017/chat"
```

### `public/.env.example`

```text
REACT_APP_LOCALHOST_KEY="chat-app-current-user"
```

## Docker Setup

If you prefer Docker, use the existing `docker-compose.yml`:

```powershell
docker compose build --no-cache
docker compose up
```

Then open `http://localhost:3000`.

## Notes

- The backend listens on port `5000` by default.
- The frontend uses `3000` by default.
- MongoDB must be available for the backend to connect successfully.

## Screenshots

![login page](./images/snappy_login.png)
![home page](./images/snappy.png)
