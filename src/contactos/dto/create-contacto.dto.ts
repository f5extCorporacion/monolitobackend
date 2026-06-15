// create-contacto.dto.ts
import { IsOptional, IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; // Si usas Swagger

export class CreateContactoDto {
  @ApiPropertyOptional({ description: 'Nombre del contacto' })
  @IsOptional()
  @IsString()
  nombre?: string;

  @ApiPropertyOptional({ description: 'Número de celular' })
  @IsOptional()
  @IsString()
  celular?: string;

  @ApiProperty({ description: 'Correo electrónico', example: 'contacto@ejemplo.com' })
  @IsNotEmpty()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ description: 'Ubicación' })
  @IsOptional()
  @IsString()
  ubicacion?: string;

  @ApiPropertyOptional({ description: 'Estado', default: 'activo' })
  @IsOptional()
  @IsString()
  estado?: string;
}
