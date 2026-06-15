import { Test, TestingModule } from '@nestjs/testing';
import { Tarjetm1Service } from './tarjetm1.service';

describe('Tarjetm1Service', () => {
  let service: Tarjetm1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Tarjetm1Service],
    }).compile();

    service = module.get<Tarjetm1Service>(Tarjetm1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
