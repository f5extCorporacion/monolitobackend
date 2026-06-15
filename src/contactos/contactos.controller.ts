import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ContactosService } from './contactos.service';
import { CreateContactoDto } from './dto/create-contacto.dto';
import { UpdateContactoDto } from './dto/update-contacto.dto';

@Controller('contactos')
export class ContactosController {
  constructor(private readonly contactosService: ContactosService) {}

  @Post()
  create(@Body() createContactoDto: CreateContactoDto) {
    return this.contactosService.create(createContactoDto);
  }

  @Get()
  findAll() {
    return this.contactosService.findAll();
  }

  
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    // Ya no necesitas el '+id', NestJS te entrega un 'number' limpio
    return this.contactosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateContactoDto: UpdateContactoDto) {
    return this.contactosService.update(id, updateContactoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.contactosService.remove(id);
  }
}