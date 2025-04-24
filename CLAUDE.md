# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Touch Typing Mastery is a web-based application for practicing touch typing skills with different difficulty levels and modes.

## Development Commands
- Install dependencies: `npm install`
- Start server: `npm start`
- Development mode with auto-reload: `npm run dev`
- Run in browser at: http://localhost:3000

## Project Structure
- `index.html`: Main HTML structure
- `styles.css`: All styling rules
- `script.js`: Game logic and functionality
- `server.js`: Express server for serving the application

## Code Style Guidelines
- HTML: Use semantic elements, maintain proper nesting
- CSS: Follow BEM methodology for class naming, group related properties
- JavaScript:
  - Use camelCase for variables/functions
  - Prefer const/let over var
  - Group related functions logically
  - Use clear variable names that reflect purpose
  - Handle errors gracefully with try/catch where appropriate
  - Use consistent indentation (4 spaces)
  - Avoid inline event handlers in HTML