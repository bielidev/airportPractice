# [PR] Implementación inicial del Frontend - React para AeroWatch

## Descripción

Este Pull Request introduce la configuración inicial del frontend para el **Proyecto de Gestión de Vuelos** utilizando **React**. Se ha implementado la estructura del proyecto, API Context, hooks personalizados y una interfaz de usuario con **Shadcn UI**.

## Tecnologías utilizadas

- **React** - Librería para interfaces de usuario.
- **Shadcn UI** - Componentes de Tailwind.
- **React Router DOM** - Enrutamiento.
- **Axios** - Para realizar peticiones HTTP.
- **Material UI** - Componentes de interfaz de usuario adicionales.
- **jsPDF** - Para la generación de archivos PDF.
- **Netify** - Plataforma para desplegar.

---

## Tareas realizadas

- [x] Creación del proyecto React con `create-react-app`.
- [x] Instalación de dependencias: **Material UI, Axios, React Router DOM, jsPDF**.
- [x] Organización del proyecto en carpetas: `components`, `pages`, `context`, `hooks`, `services`.
- [x] Implementación del **ApiContext** para gestionar llamadas a la API.
- [x] Creación de hooks personalizados: **useAirports, useFlights, usePlanes**.
- [x] Implementación de un diseño básico con **Header, Sidebar**.
- [x] Configuración de rutas con **React Router DOM**.
- [x] Implementación de filtros para buscar vuelos por **aeropuerto**.
- [x] Generación del ticket en **PDF** mediante **jsPDF**.

---

## Inicialización del proyecto

Antes de ejecutar el proyecto, copiar el archivo `.env.template` y renombrarlo a `.env`.

Para iniciar el proyecto, ejecutar:

```bash
npm run dev
```

## Demo de la aplicación

[Aerowatch](https://youtu.be/Si49HukoI4Y)

## Despliegue

El fronted del proyecto está desplegado en: [Netify](https://aerowatch-cifo.netlify.app/).
