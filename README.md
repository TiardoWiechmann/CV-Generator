# CV Generator

A small React application for creating a CV from a form. Enter personal details,
education, and practical experience, then switch to a clean preview that can be
printed or saved as a PDF through the browser print dialog.

This project was created with the goal of practicing React, CSS and JavaScript.

👉 **[Live Demo](https://cv-generator-tiardo.netlify.app/)**

## Built with

- [React](https://react.dev/)
- [Vite](https://vite.dev/)

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server with hot reload. |
| `npm run build` | Creates an optimized production build in `dist/`. |
| `npm run preview` | Serves the production build locally for previewing. |
| `npm run lint` | Runs ESLint across the project. |

## Project structure

```text
src/
├── components/
│   ├── cv/             # CV preview and its personal, education, and experience sections
│   └── form/           # Reusable form-section and input rendering
├── js/
│   ├── cvData.js       # Initial CV data shape
│   ├── formSections.js # Form field definitions and change handlers
│   └── formatDate.js   # Date formatting for the preview
├── styles/             # Application and global styles
├── App.jsx             # Application state and form/preview toggle
└── main.jsx            # React entry point
```

