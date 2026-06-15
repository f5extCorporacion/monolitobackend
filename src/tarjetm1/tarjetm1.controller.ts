import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Tarjetm1Service } from './tarjetm1.service';
import { CreateTarjetm1Dto } from './dto/create-tarjetm1.dto';
import { UpdateTarjetm1Dto } from './dto/update-tarjetm1.dto';

@Controller('tarjetm1')
export class Tarjetm1Controller {
  constructor(private readonly tarjetm1Service: Tarjetm1Service) {}

  @Post()
  create(@Body() createTarjetm1Dto: CreateTarjetm1Dto) {
    return this.tarjetm1Service.create(createTarjetm1Dto);
  }

  @Get()
  findAll() {
    return this.tarjetm1Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tarjetm1Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTarjetm1Dto: UpdateTarjetm1Dto) {
    return this.tarjetm1Service.update(+id, updateTarjetm1Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tarjetm1Service.remove(+id);
  }
}
