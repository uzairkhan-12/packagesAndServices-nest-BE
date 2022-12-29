import { OurServices } from '../interfaces/ourServices.interface';
import { Model } from 'mongoose';
export declare class OurServiceService {
    private readonly servicesModel;
    constructor(servicesModel: Model<OurServices>);
    findAll(): Promise<OurServices[]>;
    findOne(id: string): Promise<OurServices>;
    create(serviceInterface: OurServices): Promise<OurServices>;
    delete(id: string): Promise<OurServices>;
    update(id: string, service: OurServices): Promise<OurServices>;
}
