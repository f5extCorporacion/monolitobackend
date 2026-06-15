import { Module } from '@nestjs/common';
import { Tarjetm1Service } from './tarjetm1.service';
import { Tarjetm1Controller } from './tarjetm1.controller';

@Module({
  controllers: [Tarjetm1Controller],
  providers: [Tarjetm1Service],
})
export class Tarjetm1Module {}
