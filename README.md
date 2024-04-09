# Ejecutar
npm run dev

# Instalacion
npm create vite@latest

# ruteo
npm i react-router-dom

# Test
npm install -D vitest
npm i -D jsdom @testing-library/react
Añadir en package.json "test": "vitest" y ejecutar npm run test

# Tailwind

- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
- y lo añades en index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;
- Ejemplo de componentes: https://tailwindcomponents.com/component/search-input
