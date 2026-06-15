import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactosModule } from './contactos/contactos.module';
import { Tarjetm1Module } from './tarjetm1/tarjetm1.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // Si instalaste 'better-sqlite3' pon "better-sqlite3". Si instalaste 'sqlite3', pon "sqlite"
      type: 'better-sqlite3', 
      database: 'database.sqlite',
      autoLoadEntities: true, // Carga automáticamente las entidades registradas en los submódulos
      synchronize: true,     // Solo para desarrollo
    }),
    ContactosModule,
    Tarjetm1Module,
  ],
})
export class AppModule {}