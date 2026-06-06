# System Design

## Overview

Chattrix is a real-time chat application built using the MERN stack.

## Architecture

Frontend (React)
    |
    v
Backend API (Node.js + Express)
    |
    v
MongoDB Database

## Components

### Frontend
- React
- Chakra UI
- Axios
- Socket.IO Client

Responsibilities:
- User authentication
- Chat interface
- Group chat management
- Real-time messaging

### Backend
- Node.js
- Express.js
- JWT Authentication
- Socket.IO

Responsibilities:
- User management
- Message handling
- Authentication
- Real-time communication

### Database
- MongoDB

Collections:
- Users
- Chats
- Messages

## Authentication Flow

1. User enters credentials
2. Backend validates credentials
3. JWT token generated
4. Token sent to client
5. Protected routes verify token

## Message Flow

1. User sends message
2. Frontend sends request to backend
3. Backend stores message in MongoDB
4. Socket.IO emits event
5. Receiver gets message instantly

## Future Improvements

- Voice messages
- Video calling
- Message reactions
- End-to-end encryption
- AI chatbot integration