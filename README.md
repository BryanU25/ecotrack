# Documentación del Frontend

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera, siguiendo las mejores prácticas para un proyecto de Next.js 14:

src
├── app
├── components
├── containers
├── hooks
├── redux
├── styles
├── types
├── utils
└── middleware.ts

### Descripción de Carpetas

- **app**: Contiene la configuración y las rutas principales de la aplicación. Aquí se definen las páginas de Next.js y la lógica de enrutamiento.

- **components**: Contiene componentes reutilizables que se utilizan en diferentes partes de la aplicación. Los componentes suelen ser elementos de UI autónomos.

- **containers**: Contiene componentes que están conectados a la lógica de estado de la aplicación (Redux, Context API, etc.). Estos componentes a menudo envuelven a los componentes de presentación.

- **hooks**: Contiene hooks personalizados que encapsulan la lógica reutilizable y proporcionan una forma más limpia de manejar el estado y los efectos secundarios.

- **redux**: Contiene toda la lógica relacionada con Redux, incluyendo acciones, reducers, y configuraciones del store.

- **styles**: Contiene archivos de estilos (CSS, SCSS, etc.) y componentes de estilo (styled-components, Emotion, etc.).

- **types**: Contiene definiciones de tipos TypeScript, interfaces y otros archivos relacionados con la tipificación.

- **utils**: Contiene funciones de utilidad y helpers que se utilizan en toda la aplicación.

- **middleware.ts**: Contiene middleware que se aplica a la aplicación, generalmente utilizado para gestionar autenticación, autorización, y otras funciones a nivel de aplicación.

## Configuración de Next.js

### Archivo `next.config.js`

El archivo `next.config.js` contiene la configuración personalizada de Next.js. Aquí puedes configurar cosas como la optimización de imágenes, las redirecciones, los encabezados de seguridad, etc.

### Scripts de NPM

En el archivo `package.json`, se definen varios scripts de NPM para facilitar las tareas de desarrollo, construcción y despliegue. Algunos ejemplos comunes son:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

## Estilos

El proyecto utiliza una combinación de CSS modules y styled-components para los estilos. Los archivos CSS se encuentran en la carpeta styles.

## Estado y Redux

La lógica de estado se maneja con Redux. Los archivos relacionados con Redux se encuentran en la carpeta redux.

```jsx
// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
```

## Documentación de API

La documentación de la API está gestionada por Swagger. La documentación se puede acceder en la siguiente ruta:

*https://github.com/BryanU25/ecotrack-backend*

