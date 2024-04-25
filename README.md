# FRONT-END
## Ejecutar
npm run dev

## Instalación
npm create vite@latest

## ruteo
npm i react-router-dom



## Tailwind

- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
- y lo añades en index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;
- Ejemplo de componentes: https://tailwindcomponents.com/component/search-input


## Instalacion
npm install react-hook-form
npm i axios
npm i js-cookie
npm install dayjs

#  Three.js
- npm install three
- npm install three stats.js

# Test Cypress
- npm install cypress --saved-dev
- npx cypress open
- npx cypress run --record --key PONERLACLAVE

<img width="500" height="600"  src="image-4.png">

## Otra opción de hacer Test
npm install -D vitest
npm i -D jsdom @testing-library/react
Añadir en package.json "test": "vitest" y ejecutar npm run test

# Imágenes

### Registrado como admin

![alt text](image.png)
![alt text](image-1.png)

### Editar CRUD
![alt text](image-2.png)

### Usuario registrado (token)
![alt text](image-3.png)

### Por completar
- Definir roles
- Visualización para los visitantes

### Instalar 
- npm install @tgwf/co2



![alt text](image-5.png)

# Docker
- npm run build
- docker init

- se crea automáticamente los siguinets archivos:  compose.yaml | README.Docker |dockerignore | Dockerfile

- agregar en el package.json 
"preview": "vite preview --host"


Agregar en el Dokerfile :
- ENV NODE_ENV development
- COPY package*.json ./
- RUN npm install

  
<!-- - creo el image : docker buildx build -t mi-imagen . -->
- creo la image: docker build -t anhi1/mi-imagen .
- Creo el contenedor con mi usuario: docker run -d -p 4173:4173 --name mi-contenedor anhi1/mi-imagen:latest
- subir a hub docker: docker push anhi1/mi-imagen:latest
<!-- - crear contenedor segun el puerto: docker run -p 4173:4173 mi-imagen -->

- Imagenes (otra accion de acrear images)
![alt text](image-5.png)
![alt text](image-6.png)
