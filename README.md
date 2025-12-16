# Specula

Sitio web minimalista para el observatorio socio-económico "Specula" construido con Next.js (App Router) y Tailwind CSS.

## Requisitos previos
- Node.js 18+
- npm

## Desarrollo local
1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Levantar el entorno de desarrollo:
   ```bash
   npm run dev
   ```
3. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Build de producción
1. Generar el build:
   ```bash
   npm run build
   ```
2. Iniciar el servidor de producción:
   ```bash
   npm start
   ```

## Linting
```bash
npm run lint
```

## Estructura
- `/app`: páginas con App Router (Home, About, Research, Resources, Contact y plantilla de post).
- `/components`: layout global con header y footer.
- `/content`: datos base para rutas de Research.
- `/styles`: utilidades y configuración de estilos.
