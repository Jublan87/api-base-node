import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { name, version, description } from '../package.json';
import healthRouter from './routes/health';

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de Swagger
const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: name,
      version,
      description,
    },
  },
  apis: ['./src/routes/*.ts'],
});

// Documentación Swagger
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas de la API
// TODO: Agregar nuevas rutas aquí cuando expandes el proyecto
app.use('/', healthRouter);

// Inicio del servidor
app.listen(Number(PORT), () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`📚 Documentación en http://localhost:${PORT}/api`);
});

export default app;
