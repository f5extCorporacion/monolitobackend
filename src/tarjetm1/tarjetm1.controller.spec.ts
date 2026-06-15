import { Test, TestingModule } from '@nestjs/testing';
import { Tarjetm1Controller } from './tarjetm1.controller';
import { Tarjetm1Service } from './tarjetm1.service';

describe('Tarjetm1Controller', () => {
  let controller: Tarjetm1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Tarjetm1Controller],
      providers: [Tarjetm1Service],
    }).compile();

    controller = module.get<Tarjetm1Controller>(Tarjetm1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
