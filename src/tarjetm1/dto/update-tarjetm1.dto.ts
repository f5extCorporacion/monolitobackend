import { PartialType } from '@nestjs/swagger';
import { CreateTarjetm1Dto } from './create-tarjetm1.dto';

export class UpdateTarjetm1Dto extends PartialType(CreateTarjetm1Dto) {}
