import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  // ✅ Configuración CORS para Vercel
  app.enableCors({
    origin: process.env.CORS_ORIGIN || true, // URL de tu frontend Angular o true para desarrollo
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Requested-With'],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // ✅ IMPORTANTE: Usar process.env.PORT para Vercel
  const port = process.env.PORT || 3000;
  
  await app.listen({
    port: port,
    host: '0.0.0.0',
  });

  console.log(`🚀 Servidor iniciado en http://localhost:${port}`);
}

bootstrap();
