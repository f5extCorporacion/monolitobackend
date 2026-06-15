import "dotenv/config";
import { Injectable } from '@nestjs/common';
import { CreateTarjetm1Dto } from './dto/create-tarjetm1.dto';
import { UpdateTarjetm1Dto } from './dto/update-tarjetm1.dto';

@Injectable()
export class Tarjetm1Service {
  create(createTarjetm1Dto: CreateTarjetm1Dto) {
    return 'This action adds a new tarjetm1 ';
  }

  findAll() {
    const pathToCards = process.env.PATH_TO_CARDS;
    console.log(`Path to cards: ${pathToCards}`);
    return `key: ${pathToCards}`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tarjetm1`;
  }

  update(id: number, updateTarjetm1Dto: UpdateTarjetm1Dto) {
    return `This action updates a #${id} tarjetm1`;
  }

  remove(id: number) {
    return `This action removes a #${id} tarjetm1`;
  }
}
