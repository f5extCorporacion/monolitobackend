import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';

// Función bootstrap normal para desarrollo local
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.enableCors({
    origin: process.env.CORS_ORIGIN || true,
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

  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');
  console.log(`🚀 Servidor iniciado en http://localhost:${port}`);
}

// ✅ IMPORTANTE: Exportar handler para Vercel
let cachedServer: any = null;

export default async function handler(req: any, res: any) {
  if (!cachedServer) {
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
    );
    
    app.enableCors({
      origin: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
      credentials: true,
    });
    
    app.useGlobalPipes(new ValidationPipe());
    
    await app.init();
    cachedServer = app;
  }
  
  // @ts-ignore
  cachedServer.getHttpAdapter().getInstance().ready(() => {
    // @ts-ignore
    cachedServer.getHttpAdapter().getInstance().routing(req, res);
  });
}

// Solo ejecutar bootstrap si no estamos en Vercel
if (process.env.NODE_ENV !== 'production') {
  bootstrap();
}
