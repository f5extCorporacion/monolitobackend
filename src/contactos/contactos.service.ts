import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactoDto } from './dto/create-contacto.dto';
import { UpdateContactoDto } from './dto/update-contacto.dto';
import { Contacto } from './entities/contacto.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContactosService {
  constructor(
    @InjectRepository(Contacto)
    private contactoR: Repository<Contacto>
  ) {}

  // Creación del contacto
  async create(createContactoDto: CreateContactoDto): Promise<Contacto> {
    const newContacto = this.contactoR.create(createContactoDto);
    return await this.contactoR.save(newContacto);
  }

  // Obtener todos los contactos activos
  async findAll(): Promise<Contacto[]> {
    return await this.contactoR.find({
      where: {
        estado: 'activo' // o true, dependiendo de tu campo
      }
    });
  }

  // Obtener un contacto por ID
  async findOne(id: number): Promise<Contacto> {
    const contacto = await this.contactoR.findOne({
      where: { id, estado: 'activo' }
    });
    
    if (!contacto) {
      throw new NotFoundException(`Contacto con ID ${id} no encontrado`);
    }
    
    return contacto;
  }

  // Actualizar un contacto
  async update(id: number, updateContactoDto: UpdateContactoDto): Promise<Contacto> {
    // Verificar si el contacto existe
    const contacto = await this.findOne(id);
    
    // Actualizar los datos
    Object.assign(contacto, updateContactoDto);
    
    // Guardar los cambios
    return await this.contactoR.save(contacto);
  }

  // Eliminar un contacto (borrado físico)
  async remove(id: number): Promise<{ message: string }> {
    const result = await this.contactoR.delete(id);
    
    if (result.affected === 0) {
      throw new NotFoundException(`Contacto con ID ${id} no encontrado`);
    }
    
    return { message: `Contacto con ID ${id} eliminado correctamente` };
  }
}