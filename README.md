# 🍳 Backend - Blog de Recetas

Este es el backend de un **Blog de Recetas** desarrollado con **Node.js, Express y MongoDB**.  
Se encarga de gestionar la API REST que maneja las recetas, categorías y usuarios (si se implementa autenticación en un futuro).  

---

## 📦 Tecnologías utilizadas

- [Express](https://expressjs.com/) - Framework para construir la API.
- [Mongoose](https://mongoosejs.com/) - ODM para interactuar con MongoDB.
- [Cors](https://www.npmjs.com/package/cors) - Middleware para habilitar peticiones desde el frontend.
- [Morgan](https://www.npmjs.com/package/morgan) - Logger HTTP para desarrollo.
- [Express Validator](https://express-validator.github.io/) - Middleware para validar inputs.

---

## 🚀 Instalación y ejecución

1. Clona el repositorio:

bash
git clone https://github.com/tuusuario/blog-recetas-backend.git
cd blog-recetas-backend
Instala las dependencias:

bash
Copiar código
npm install
Configura las variables de entorno en un archivo .env en la raíz del proyecto:

env
Copiar código
PORT=3001
MONGODB=mongodb+srv://juanchiblanco:fpnxCAh1AVYSpUd7@cluster0.0o1o9sq.mongodb.net/blogRecetas

Inicia el servidor en desarrollo:

bash
Copiar código
npm run dev
o en producción:

bash
Copiar código
npm start
El backend correrá en http://localhost:4000.

## 📂 Estructura del proyecto
bash
Copiar código
📦 blog-recetas-backend
├── src
│   ├── controllers     # Controladores de la lógica de negocio
│   ├── models          # Modelos de Mongoose
│   ├── routes          # Definición de rutas de la API
│   └── index.js        # Punto de entrada de la aplicación
├── .env.example        # Variables de entorno de ejemplo
├── package.json
└── README.md
## 📌 Endpoints principales
Recetas
GET /api/recetas → Lista todas las recetas

GET /api/recetas/:id → Obtiene una receta por ID

POST /api/recetas → Crea una nueva receta

PUT /api/recetas/:id → Edita una receta

DELETE /api/recetas/:id → Elimina una receta

Categorías (opcional)
GET /api/categorias → Lista todas las categorías

POST /api/categorias → Crea una nueva categoría

## ✅ Validaciones
Se utiliza express-validator para asegurar que los campos requeridos (ejemplo: titulo, ingredientes, instrucciones) sean correctos antes de guardar en la base de datos.

## 🔧 Scripts disponibles
npm start → Inicia el servidor en producción.

npm run dev → Inicia el servidor con nodemon en modo desarrollo.

## ✨ Autor
Juan Manuel Blanco