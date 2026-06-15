// contactos/entities/contacto.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('contactos')
export class Contacto {
  @PrimaryGeneratedColumn()
  "id": number;

  @Column({ nullable: true })
  "nombre": string;

  @Column({ nullable: true })
  "celular": string;

  @Column({ unique: true })
  "email": string;

  @Column({ nullable: true })
  "ubicacion": string;

  @Column({ nullable: true })
  "estado": string;

  @CreateDateColumn()
  "createdAt": Date;
}