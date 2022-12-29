import { CreateServiceDto } from './dto/ourServices.dto';
import { OurServices } from './interfaces/ourServices.interface';
import { OurServiceService } from './our-service/our-service.service';
export declare class OurServicesController {
    private readonly service;
    constructor(service: OurServiceService);
    findAll(): Promise<OurServices[]>;
    fineOne(id: string): Promise<OurServices>;
    create(createServiceDto: CreateServiceDto): Promise<OurServices>;
    delete(id: string): Promise<OurServices>;
    updateService(createServiceDto: CreateServiceDto, id: string): Promise<OurServices>;
}
