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
<img width="304" height="193" alt="image" src="https://github.com/user-attachments/assets/7767c5a8-753c-4218-b63a-622519748262" />


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
<img width="595" height="233" alt="image" src="https://github.com/user-attachments/assets/c5909f4d-35fe-4e38-9be8-e1681684248f" />

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
<img width="520" height="463" alt="image" src="https://github.com/user-attachments/assets/5a42b6db-05c3-4474-8407-0fb87bced779" />

### GET `/game/1`
<img width="528" height="403" alt="image" src="https://github.com/user-attachments/assets/281f03e1-c03a-4606-80ec-ac649d83e654" />

### PUT `/game/1`
```json
{
  "name": "Updated Game",
  "description": "An updated and exciting game",
  "genre": "Racing",
  "platform": "Mobile"
}
```
<img width="521" height="537" alt="image" src="https://github.com/user-attachments/assets/e14409b2-6b2a-44c8-a364-7a8ddf6669b4" />


### PATCH `/game/1`
```json
{
  "description": "An updated game"
}
```
<img width="521" height="529" alt="image" src="https://github.com/user-attachments/assets/458e105c-dc14-45f1-8419-374735f104fc" />

### DELETE `/game/1`
> No necesita body. Responde con `204 No Content`.

---
<img width="521" height="257" alt="image" src="https://github.com/user-attachments/assets/8aeb9fc0-2852-4756-8059-b967340ad40b" />



##  Middleware de errores

Si algo falla (por ejemplo, ID inválido o error de BD), el middleware responde automáticamente con un JSON de error en vez de crashear el servidor:

```json
{
  "error": "Game not found"
}
```
After delete game 1:

<img width="521" height="364" alt="image" src="https://github.com/user-attachments/assets/54d73392-b41e-4c90-8a1d-416c14d29fff" />



##  Repositorio
https://github.com/gadrilee/Game-API---Task1
