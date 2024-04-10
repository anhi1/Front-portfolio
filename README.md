# FRONT-END
## Ejecutar
npm run dev

## Instalacion
npm create vite@latest

## ruteo
npm i react-router-dom

## Test
npm install -D vitest
npm i -D jsdom @testing-library/react
Añadir en package.json "test": "vitest" y ejecutar npm run test

## Tailwind

- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
- y lo añades en index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;
- Ejemplo de componentes: https://tailwindcomponents.com/component/search-input


## Form-validaciones
npm install react-hook-form



drgadacion
{
    "colors": [
        {
            "color": "#F9F9F9",
            "enabled": true
        },
        {
            "color": "#D8D8D8",
            "enabled": true
        },
        {
            "color": "#DADADA",
            "enabled": true
        },
        {
            "color": "#FFFFFF",
            "enabled": true
        },
        {
            "color": "#FFFFFF",
            "enabled": true
        }
    ],
    "speed": 4,
    "horizontalPressure": 3,
    "verticalPressure": 3,
    "waveFrequencyX": 2,
    "waveFrequencyY": 2,
    "waveAmplitude": 9,
    "shadows": 0,
    "highlights": 10,
    "colorBrightness": 1,
    "colorSaturation": -1,
    "wireframe": false,
    "colorBlending": 8,
    "backgroundColor": "#FFFFFF",
    "backgroundAlpha": 1,
    "resolution": 1
}