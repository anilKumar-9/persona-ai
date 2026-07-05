# Persona AI

Persona AI is a full-stack chat application where users can talk to different AI personas through a modern React frontend and an Express backend.

## Features

- Chat with multiple personas
- Switch between personas from the UI
- Sidebar with recent chats and delete chat support
- Responsive layout for desktop and mobile
- Backend connected to the OpenAI SDK for AI responses

## Project Structure

```bash
persona-ai/
├── client/                # React + Vite frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── context/        # Chat state management
│   │   ├── pages/          # App pages
│   │   └── services/       # API helpers
│   └── package.json
├── server/                # Express backend
│   ├── src/
│   │   ├── config/         # AI client config
│   │   ├── controllers/    # Request handlers
│   │   ├── middleware/     # Error handling
│   │   ├── prompts/        # Persona prompt definitions
│   │   ├── routes/         # API routes
│   │   ├── services/       # AI logic
│   │   └── server.js       # Entry point
│   └── package.json
```

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Axios
- Lucide React

### Backend

- Express.js
- OpenAI SDK
- dotenv
- CORS

## Prerequisites

- Node.js installed
- npm or pnpm
- OpenAI API key

## Environment Variables

Create a `.env` file inside the server folder:

```env
OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-4o-mini
PORT=5000
```

## Installation

### 1. Clone the repository

```bash
git clone <repo-url>
cd persona-ai
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Install backend dependencies

```bash
cd ../server
npm install
```

## Running the Project

### Start the backend

```bash
cd server
npm run dev
```

### Start the frontend

```bash
cd client
npm run dev
```

The frontend will usually run at:

- http://localhost:5173

The backend will run at:

- http://localhost:5000

## API Endpoint

### Chat

```http
POST /api/chat
Content-Type: application/json
```

Example body:

```json
{
  "persona": "hitesh",
  "message": "Explain React hooks"
}
```

## Notes

- Persona prompts are defined in the server prompt files.
- The app currently supports persona-based chat with a simple sidebar and chat history experience.

## License

This project is for learning and demonstration purposes.
