# Sentrycs - Word Checker

A React application for checking English words.

## Description

This app allows users to check if a 5-letter word is a valid English word (dictionaryapi.dev), using an interactive input field and virtual keyboard. The check is performed via an external API.

### Prerequisites

- Node.js 18.15.0+
- Docker 
- GIT

## Technologies

- React 19
- TypeScript
- Material-UI (MUI)
- Docker (with Dockerfile for deployment)

## Installation & Usage

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run in development mode:
   ```bash
   npm start
   ```
3. Build the project:
   ```bash
   npm run build
   ```
4. Run with Docker:
   ```bash
   docker build -t sentrycs-app .
   docker run -p 3000:3000 sentrycs-app
   ```

## Project Structure

- `src/components` - React components (keyboard, input fields, buttons)
- `src/providers` - Global state management with React Context
- `src/utils` - Utility functions (word validation)
- `src/theme` - Theme configuration
- `src/styledComponents` - Styled components
- `public/assets/fonts` - Custom fonts

---

![Screenshot](resources/home.png =800x400)
![Screenshot](resources/success.png =800x400)
![Screenshot](resources/error.png =800x400)
