import { Packages } from '../interfaces/packages.interface';
import { Model } from 'mongoose';
export declare class PackagesService {
    private readonly packagesModel;
    constructor(packagesModel: Model<Packages>);
    findAll(): Promise<Packages[]>;
    create(pkgInterface: Packages): Promise<Packages>;
    delete(id: string): Promise<Packages>;
    update(id: string, item: Packages): Promise<Packages>;
    findOne(id: string): Promise<Packages>;
}
