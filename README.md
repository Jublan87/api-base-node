# 🚀 API Base Node + TypeScript

Plantilla base para APIs con Node.js, TypeScript y Swagger. Lista para usar y expandir.

## ⚡ Inicio rápido

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Producción
npm run build && npm start
```

## 📋 URLs importantes

- **API**: http://localhost:3000/health
- **Documentación**: http://localhost:3000/api

## 🔧 Estructura del proyecto

```
src/
  ├── index.ts          # Servidor principal
  └── routes/
      └── health.ts     # Endpoint de health
```

## 📈 Cómo expandir

### Agregar nuevas rutas:

1. Crear archivo en `src/routes/nuevaRuta.ts`
2. Importar y usar en `src/index.ts`
3. Agregar documentación Swagger con comentarios `@swagger`

### Ejemplo de nueva ruta:

```typescript
// src/routes/users.ts
import { Router } from 'express';

const router = Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtener usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
router.get('/users', (req, res) => {
  res.json({ users: [] });
});

export default router;
```

Luego en `src/index.ts`:

```typescript
import usersRouter from './routes/users';
app.use('/api', usersRouter);
```

## 🛠️ Tecnologías

- **Node.js** + **TypeScript**
- **Express.js** - Framework web
- **Swagger** - Documentación API
- **ts-node-dev** - Desarrollo
