# Chef's notebook 🍳✨

¡Bienvenido a **Chef's notebook**! Este es un proyecto de gestión de recetas de cocina desarrollado con **Node.js**, **Express**, **TypeScript**, **MySQL**, **HTML**, **CSS** y **JavaScript**. La aplicación permite a los usuarios agregar, editar, eliminar y buscar recetas de manera fácil y rápida.

---

## Características Principales 🌟

- **Agregar Recetas:** Los usuarios pueden agregar nuevas recetas con detalles como nombre, ingredientes, pasos de preparación, tiempo de cocción y una imagen opcional.
- **Editar Recetas:** Permite modificar recetas existentes.
- **Eliminar Recetas:** Elimina recetas que ya no son necesarias.
- **Buscar Recetas:** Filtra recetas por nombre o ingredientes.
- **Interfaz Amigable:** Diseño responsive y fácil de usar.

---

## Tecnologías Utilizadas 🛠️

- **Frontend:** HTML, CSS, JavaScript.
- **Backend:** Node.js, Express, TypeScript.
- **Base de Datos:** MySQL.
- **Control de Versiones:** Git y GitHub.

---

## Estructura del Proyecto 📂
```
Chef's notebook
├── /src
│ ├── /controllers # Controladores para manejar las rutas de la API
│ ├── /models # Modelos para interactuar con la base de datos
│ ├── /routes # Rutas de la API
│ ├── /services # Lógica de negocio
│ ├── /utils # Utilidades (validaciones, manejo de errores, etc.)
│ └── app.ts # Punto de creación de la servidor
│
├── /public # Archivos estáticos (HTML, CSS, JS)
│ ├── index.html # Página principal
│ ├── styles.css # Estilos CSS
│ └── main.js # Lógica del frontend
│
├── /database
│ └── schema.sql # Script para crear la base de datos
│
├── package.json # Dependencias del proyecto
├── tsconfig.json # Configuración de TypeScript
└── README.md # Este archivo
```

## Instalación y Configuración 🚀

### Requisitos Previos
- Node.js (v16 o superior)
- MySQL
- Git

### Pasos para Ejecutar el Proyecto

1. **Clonar el Repositorio:**
   ```bash
   git clone https://github.com/Naim-Torres/Chef-s-notebook.git
   cd Chef-s-notebook
   ````
  
2. **Instalar Dependencias:**
   ```bash
   npm install
   ```
3. **Configurar la Base de Datos:**
  - Crea una base de datos en MySQL.
  - Ejecuta el script schema.sql para crear la tabla recipes.

4. **Configurar Variables de Entorno:**
 - Crea un archivo .env en la raíz del proyecto con las siguientes variables:
   ```bash
   DB_HOST=localhost
   DB_USER=tu-usuario
   DB_PASSWORD=tu-contraseña
   DB_NAME=nombre-de-tu-base-de-datos
   PORT=3000
   ```

5. Compilar TypeScript:
   ```bash
   npm run build
   ```

6. Ejecutar el Servidor:
   ```bash
   npm start
   ```

7. Abrir en el Navegador:
Visita http://localhost:3000 para ver la aplicación en acción.


### Licencia 📜
Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo LICENSE.

### Contacto 📧
Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

Email: naimtorrescruz@gmail.com

GitHub: Naim-Torres

¡Gracias por visitar Chef's notebook! Esperamos que disfrutes gestionando tus recetas tanto como disfrutamos creando esta aplicación. 🎉