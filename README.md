#  Game API - Task1 - Programming4 -Gabriel Mamani Sandoval 

Backend REST API para gestionar juegos, construido con Node.js, Express y Sequelize .

---

##  ¿Cómo levantarlo?

### 1. Instalar dependencias
```bash
npm install
```

### 2. Crear la base de datos en PostgreSQL
Abre pgAdmin o la terminal de Postgres y crea la base de datos:
```sql
CREATE DATABASE t1_game_p4;
```
> Las tablas se crean automáticamente al iniciar el servidor (gracias a `sequelize.sync`).

### 3. Verificar el archivo `.env`
```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=root
DB_NAME=t1_game_p4
PORT=3000
```

### 4. Iniciar el servidor

```bash
npm run dev
```

---

##  Estructura del proyecto

```
task1/
├── server.js                  <- Punto de entrada, conecta BD y levanta Express
├── .env                       <- credenciales
└── src/
    ├── app.js                 <- Configuración de Expres
    ├── config/
    │   └── database.js        <- Conexión a PostgreSQL con Sequelize
    ├── models/
    │   └── game.model.js      <- Definición de la tabla "games"
    ├── controllers/
    │   ├── home.controller.js <- Ruta de bienvenida
    │   └── game.controller.js <- Lógica de las operaciones CRUD
    ├── routes/
    │   ├── home.routes.js     <- GET /
    │   └── game.routes.js     <- Rutas del CRUD /game
    └── middlewares/
        ├── logger.middleware.js  <- Loggea cada petición con fecha y hora
        └── error.middleware.js   <- Captura y responde cualquier error
```

---

##  Rutas disponibles

| Método   | Ruta         | Descripción                        | Status |
|----------|--------------|------------------------------------|--------|
| `POST`   | `/game`      | Crear un nuevo juego               | 201    |
| `GET`    | `/game/:id`  | Obtener un juego por ID            | 200    |
| `PUT`    | `/game/:id`  | Reemplazar todos los datos         | 200    |
| `PATCH`  | `/game/:id`  | Actualizar campos específicos      | 200    |
| `DELETE` | `/game/:id`  | Eliminar un juego                  | 204    |

---

##  Probando con Postman

### POST `/game`
```json
{
  "name": "My Game",
  "description": "An exciting game",
  "genre": "Adventure",
  "platform": "PC"
}
```

### PUT `/game/1`
```json
{
  "name": "Updated Game",
  "description": "An updated and exciting game",
  "genre": "Racing",
  "platform": "Mobile"
}
```

### PATCH `/game/1`
```json
{
  "description": "An updated game"
}
```

### DELETE `/game/1`
> No necesita body. Responde con `204 No Content`.

---

##  Middleware de errores

Si algo falla (por ejemplo, ID inválido o error de BD), el middleware responde automáticamente con un JSON de error en vez de crashear el servidor:

```json
{
  "error": "Game not found"
}
```

##  Repositorio

