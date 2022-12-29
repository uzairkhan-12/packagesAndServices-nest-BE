import { Test, TestingModule } from '@nestjs/testing';
import { OurServicesController } from './our-services.controller';

describe('OurServicesController', () => {
  let controller: OurServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OurServicesController],
    }).compile();

    controller = module.get<OurServicesController>(OurServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
