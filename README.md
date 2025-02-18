# Code-convertor
A simple Express.js API that converts source code between programming languages using OpenAI's GPT model. It includes a static frontend for user interaction and supports CORS for seamless integration. 🚀




## Features

- Converts code between different programming languages using OpenAI API.
- Serves a static frontend for user interaction.
- Supports CORS for cross-origin requests.

## Prerequisites

- Node.js and npm installed on your system.
- OpenAI API key.

## Installation

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd <repo-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add your OpenAI API key:
   ```sh
   OPENAI_API_KEY=your_api_key_here
   ```
4. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

### `POST /convert`

Converts the input code from one language to another.

**Request Body:**

```json
{
  "inputCode": "<your code here>",
  "sourceLang": "<source language>",
  "targetLang": "<target language>"
}
```

**Response:**

```json
{
  "convertedCode": "<converted code here>"
}
```

## Running the Application

- The application runs on `http://localhost:5000` by default (or the port specified in `.env`).
- The frontend will be served automatically.

##

